<?php

class User
{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }


    private function encrypt_password($pword)
    {
        $hashFormat = "$2y$10$";
        $saltLength = 22;
        $salt = $this->generateSalt($saltLength);
        return crypt($pword, $hashFormat . $salt);
    }

    private function generateSalt($length)
    {
        $str_hash = md5(uniqid(mt_rand(), true));
        $b64string = base64_encode($str_hash);
        $mb64string = str_replace("+", ".", $b64string);
        return substr($mb64string, 0, $length);
    }

    private function checkPassword($pword, $existingPassword)
    {
        // return $existingPassword === crypt($pword, $existingPassword);
        return $existingPassword === $pword;
    }




    public function add_users($data)
    {
        $sql = "INSERT INTO users(user_name, user_password) 
        VALUES (?,?)";
        try {
            $stmt = $this->pdo->prepare($sql);
            $data->pword = $this->encrypt_password($data->password);
            $stmt->execute([$data->username, $data->password]);
            return $this->gm->res_payload($data, "success", "Succesfully added user.", 200);
        } catch (PDOException $e) {
            return $this->gm->res_payload(null, "failed", $e->getMessage(), 400);
        }
    }

    public function auth($data)
    {
        $username = $data->username;
        $password = $data->password;
        $sql = "SELECT user_id, user_name, user_password, user_token  FROM users where user_name = ? LIMIT 1 ";
        $stmt = $this->pdo->prepare($sql);

        try {
            $stmt->execute([$username]);
            if ($stmt->rowCount() > 0) {
                $res = $stmt->fetchAll()[0];
                $token = bin2hex(random_bytes(50));
                $sql = "UPDATE users set user_token = ? where user_id = ?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$token, $res['user_id']]);

                // return $res;
                // return "hello " . $res['user_password'];
                // return $this->checkPassword($password, $res['user_password']);
                if ($this->checkPassword($password, $res['user_password'])) {
                    $data = array(
                        "user_id" => $res['user_id'],
                        "user_name" => $res['user_name'],
                        "token" => $token,
                    );

                    return $this->gm->res_payload($data, "success", "Succesfully logged in.", 200);
                } else {
                    return $this->gm->res_payload(null, "failed", "Incorrect password", 401);
                }
            } else {
                return $this->gm->res_payload(null, "failed", "Incorrect username", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "Unable to process data.", 401);
        }
    }
}
