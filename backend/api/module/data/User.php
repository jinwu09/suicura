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
        return $existingPassword === crypt($pword, $existingPassword);
    }




    public function add_users($data)
    {

        try {
            $sql = "SELECT user_name from users where user_name = ?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$data->user_name]);
            if ($stmt->rowCount() == 0) {
                $sql = "INSERT INTO users(user_name, user_password, user_first_name, user_last_name) VALUES (?,?,?,?)";
                $stmt = $this->pdo->prepare($sql);
                $data->user_password = $this->encrypt_password($data->user_password);
                $stmt->execute([$data->user_name, $data->user_password, $data->user_first_name, $data->user_last_name]);
                return $this->gm->res_payload($data, "success", "Succesfully added user.", 200);
            } else {
                $payload = array("isAlreadyExits" => true);
                return $this->gm->res_payload($payload, "failed", "already existing user name", 400);
            }
        } catch (PDOException $e) {
            return $this->gm->res_payload(null, "failed", $e->getMessage(), 400);
        }
    }

    public function auth($data)
    {
        $username = $data->user_name;
        $password = $data->user_password;
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
                        "token" => $token
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
    public function teamlist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "SELECT team_id, team_name, team_description, team_created from teams where user_id = ?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);
                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully fetch team.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $th) {
            return $this->gm->res_payload(null, "failed", "unable to process data", 401);
        }
    }
    public function gettodolist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "SELECT todo_id, todo_name, todo_description, todo_created, todo_archived, todo_status from todolists where user_id = ? and team_id is NULL";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully fetch todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function gettask($data)
    {
        $todo_id = $data->todo_id;
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "SELECT todo_id, todo_name, todo_description, todo_created, todo_archived, todo_status from todolists where user_id = ? and team_id is NULL and todo_id=?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id, $todo_id]);

                $res = $stmt->fetchAll()[0];
                // $res['todo_created'] = str_replace('-', '.', $res['todo_created']);
                return $this->gm->res_payload($res, "success", "Sucessfully fetch specific todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function settask($data)
    {
        $todo_id = $data->todo_id;
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "UPDATE todolists SET todo_description =?, todo_name=? where user_id = ? and team_id is NULL and todo_id=?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->todo_description, $data->todo_name, $data->user_id, $todo_id]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully Update specific todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function getarhivetodolist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "SELECT todo_id, todo_name, todo_description, todo_created, todo_archived, todo_status from todolists where user_id = ? and team_id is NULL and todo_status = 1";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully fetch todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function getongoingtodolist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "SELECT todo_id, todo_name, todo_description, todo_created, todo_archived, todo_status from todolists where user_id = ? and team_id is NULL and todo_status = 0";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully fetch todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function createtodolist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (?,?,?,?,CURRENT_TIMESTAMP )";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id, $data->todo_name, $data->todo_description, $data->todo_status]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully add todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function archivetodolist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "UPDATE todolists SET todo_status = 1, todo_archived = CURRENT_TIMESTAMP where user_id = ? and team_id is NULL and todo_id = ?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id, $data->todo_id]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully archived todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function deletetodolist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "DELETE FROM todolists where user_id = ? and team_id is NULL and todo_id = ?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id, $data->todo_id]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully Delete todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function logout($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "INSERT INTO user_log (user_id, user_status, user_log_date) VALUES (?,?, CURRENT_TIMESTAMP) ";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id, $data->user_status]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully logout.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function session_in($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "INSERT INTO user_session (user_id, user_session_start) VALUES (?, CURRENT_TIMESTAMP) ";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $sql = "SELECT user_session_id from user_session where user_id = ? order by user_session_start DESC LIMIT 1";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $res = $stmt->fetchAll()[0];
                return $this->gm->res_payload($res, "success", "Sucessfully session start.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function session_out($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "UPDATE  user_session SET user_session_end=CURRENT_TIMESTAMP, user_time_diff= TIMESTAMPDIFF(MINUTE,(SELECT user_session_start FROM user_session WHERE user_id=? AND user_session_id=? LIMIT 1 ),CURRENT_TIMESTAMP )WHERE  user_id=? AND user_session_id=?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id, $data->user_session_id, $data->user_id, $data->user_session_id]);

                $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully session end.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }

    public function status($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "SELECT COUNT(todo_id) as todo_done_today FROM todolists where user_id = ? and team_id is NULL and todo_archived > CURRENT_DATE";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);


                $todo_done_today = $stmt->fetchAll()[0];

                $sql = "SELECT COUNT(todo_id) as todo_done_7days FROM todolists where user_id = ? and team_id is NULL and todo_archived > CURRENT_DATE -7";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_7days = $stmt->fetchAll()[0];


                $sql = "SELECT COUNT(todo_id) as todo_done_bef1, DAYOFWEEK(todo_archived) as todo_archived FROM todolists where user_id = ? and team_id is NULL and todo_archived >= CURRENT_DATE - 1 and todo_archived < CURRENT_DATE";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_bef1 = $stmt->fetchAll()[0];

                $sql = "SELECT COUNT(todo_id) as todo_done_bef2, DAYOFWEEK(todo_archived) as todo_archived FROM todolists where user_id = ? and team_id is NULL and todo_archived >= CURRENT_DATE - 2 and todo_archived < CURRENT_DATE -1";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_bef2 = $stmt->fetchAll()[0];

                $sql = "SELECT COUNT(todo_id) as todo_done_bef3, DAYOFWEEK(todo_archived) as todo_archived FROM todolists where user_id = ? and team_id is NULL and todo_archived >= CURRENT_DATE - 3 and todo_archived < CURRENT_DATE -2";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_bef3 = $stmt->fetchAll()[0];

                $sql = "SELECT COUNT(todo_id) as todo_done_bef4, DAYOFWEEK(todo_archived) as todo_archived FROM todolists where user_id = ? and team_id is NULL and todo_archived >= CURRENT_DATE - 4 and todo_archived < CURRENT_DATE -3";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_bef4 = $stmt->fetchAll()[0];

                $sql = "SELECT COUNT(todo_id) as todo_done_bef5, DAYOFWEEK(todo_archived) as todo_archived FROM todolists where user_id = ? and team_id is NULL and todo_archived >= CURRENT_DATE - 5 and todo_archived < CURRENT_DATE -4";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_bef5 = $stmt->fetchAll()[0];

                $sql = "SELECT COUNT(todo_id) as todo_done_bef6, DAYOFWEEK(todo_archived) as todo_archived FROM todolists where user_id = ? and team_id is NULL and todo_archived >= CURRENT_DATE - 6 and todo_archived < CURRENT_DATE -5";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_bef6 = $stmt->fetchAll()[0];

                $sql = "SELECT COUNT(todo_id) as todo_done_bef7, DAYOFWEEK(todo_archived) as todo_archived FROM todolists where user_id = ? and team_id is NULL and todo_archived >= CURRENT_DATE - 7 and todo_archived < CURRENT_DATE -6";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $todo_done_bef7 = $stmt->fetchAll()[0];

                $sql = "SELECT SUM(user_time_diff) as time_log_today FROM user_session where user_id = ? and user_session_end > CURRENT_DATE";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $time_log_today = $stmt->fetchAll()[0];

                $sql = "SELECT SUM(user_time_diff) as time_log_7day FROM user_session where user_id = ? and user_session_end > CURRENT_DATE -7";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                $time_log_7day = $stmt->fetchAll()[0];



                $res = array(
                    'todo_done_today' => $todo_done_today['todo_done_today'],
                    'todo_done_7days' => $todo_done_7days['todo_done_7days'],
                    'time_log_today' => $time_log_today['time_log_today'],
                    'time_log_7day' => $time_log_7day['time_log_7day'],
                    'label' => [
                        $todo_done_bef7['todo_archived'],
                        $todo_done_bef6['todo_archived'],
                        $todo_done_bef5['todo_archived'],
                        $todo_done_bef4['todo_archived'],
                        $todo_done_bef3['todo_archived'],
                        $todo_done_bef2['todo_archived'],
                        $todo_done_bef1['todo_archived'],
                    ],
                    'data' => [
                        $todo_done_bef7['todo_done_bef7'],
                        $todo_done_bef6['todo_done_bef6'],
                        $todo_done_bef5['todo_done_bef5'],
                        $todo_done_bef4['todo_done_bef4'],
                        $todo_done_bef3['todo_done_bef3'],
                        $todo_done_bef2['todo_done_bef2'],
                        $todo_done_bef1['todo_done_bef1'],
                    ]
                );
                // $res = $todo_done_7days;
                return $this->gm->res_payload($res, "success", "Sucessfully fetch status.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
}