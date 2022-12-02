<?php

class GlobalMethods
{
    protected $pdo;
    public function __construct(\PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function exec_query($sql)
    {
        $data = array();
        $errmsg = "";
        $code = 0;

        try {
            if ($result = $this->pdo->query($sql)->fetchAll()) {
                foreach ($result as $record) {
                    array_push($data, $record);
                }
                $result = null;
                $code = 200;
                return array("code" => $code, "data" => $data);
            } else {
                $errmsg = "No data found";
                $code = 404;
            }
        } catch (\PDOException $e) {
            $errmsg = $e->getMessage();
            $code = 403;
        }
        return array("code" => $code, "errmsg" => $errmsg);
    }

    public function insert($table, $data)
    {
    }


    public function update($table, $data, $condition_string)
    {
    }

    public function tokencheck($user_id, $token)
    {
        if ($token != null) {
            $sql = "SELECT user_id, user_token from users where user_id = ?";
            $stmt = $this->pdo->prepare(($sql));
            $stmt->execute([$user_id]);
            if ($stmt->rowCount() > 0) {
                $res = $stmt->fetchAll()[0];
                if ($res['user_token'] === $token) {
                    return true;
                }
            }
        }
        return false;
    }

    public function res_payload($payload, $remarks, $message, $code)
    {
        $status = array("remarks" => $remarks, "message" => $message);
        http_response_code($code);
        return array(
            "status" => $status,
            "payload" => $payload,
            "timestamp" => date_create(),
            "prepared_by" => "Albert John B. Santos"
        );
    }
}
