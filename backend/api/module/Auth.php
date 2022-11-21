<?php

class Auth{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }


    private function encrypt_password($pword){
        $hashFormat = "$2y$10$";
        $saltLength = 22;
        $salt = $this->generateSalt($saltLength);
        return crypt($pword, $hashFormat.$salt);
    }

    private function generateSalt($length){
        $str_hash = md5(uniqid(mt_rand(), true));
        $b64string = base64_encode($str_hash);
        $mb64string = str_replace("+", ".", $b64string);
        return substr($mb64string, 0, $length);
    }

    private function checkPassword($pword, $existingPassword){
       return $existingPassword === crypt($pword, $existingPassword);
    }




    public function add_users($data)
    {
        $sql = "INSERT INTO users(studnum, pword) 
        VALUES (?,?)";
        try {
            $stmt = $this->pdo->prepare($sql);
            $data->pword = $this->encrypt_password($data->pword);
            $stmt->execute([$data->studnum, $data->pword]);
            return $this->gm->response_payload($data, "success", "Succesfully added user.", 200);
        } catch (PDOException $e) {
            return $this->gm->response_payload(null, "failed", $e->getMessage(), 400);
        }
    }

    public function login($data)
    {
        $username = $data->username;
        $password = $data->password;
        $sql = "SELECT studnum, pword, fname, lname, token, student.is_archived FROM users INNER JOIN student USING(studnum) WHERE studnum = ? AND users.is_archived = 0 LIMIT 1";
        $stmt = $this->pdo->prepare($sql);

        try {
            $stmt->execute([$username]);
            if ($stmt->rowCount() > 0) {
                $res = $stmt->fetchAll()[0];
                if ($this->checkPassword($password,$res['pword'])) {
                    $data = array(
                        "fname" => $res['fname'],
                        "lname" => $res['lname'],
                        "token" => $res['token'],
                        "is_archived" => $res['is_archived'],
                        "studnum" => $res['studnum']
                    );

                    return $this->gm->response_payload($data, "success", "Succesfully logged in.", 200);
                } else {
                    return $this->gm->response_payload(null, "failed", "Incorrect password", 401);
                }
            }
            else{
                return $this->gm->response_payload(null, "failed", "Incorrect username", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->response_payload(null, "failed", "Unable to process data.", 401);
        }
    }

}
?>