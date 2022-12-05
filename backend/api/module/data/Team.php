<?php

class Team
{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }


    public function getteamtodolist($data)
    {
        try {
            if ($data->team_id != null) {
                if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                    $sql = "SELECT todo_id, team_id, todo_name, todo_description, todo_created, todo_status from todolists where team_id = ? ";
                    $stmt = $this->pdo->prepare($sql);
                    $stmt->execute([$data->team_id]);

                    $res = $stmt->fetchAll();
                    return $this->gm->res_payload($res, "success", "Sucessfully fetch todolist.", 200);
                } else {
                    return $this->gm->res_payload(null, "failed", "expired token", 401);
                }
            } else {
                return $this->gm->res_payload(null, "failed", "mising team_id", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }

    public function getteam_logs($data)
    {
        try {
            if ($data->team_id != null) {
                if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                    $sql = "SELECT team_id, user_id, log, log_type, log_date from team_logs where team_id = ? ";
                    $stmt = $this->pdo->prepare($sql);
                    $stmt->execute([$data->team_id]);

                    $res = $stmt->fetchAll();
                    return $this->gm->res_payload($res, "success", "Sucessfully fetch todolist.", 200);
                } else {
                    return $this->gm->res_payload(null, "failed", "expired token", 401);
                }
            } else {
                return $this->gm->res_payload(null, "failed", "mising team_id", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
    public function create_team($data)
    {
        try {
            if ($data->team_id != null) {
                if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                    $sql = "INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (?,?,?, CURRENT_TIMESTAMP)";
                    $stmt = $this->pdo->prepare($sql);
                    $stmt->execute([$data->team_id]);

                    $res = $stmt->fetchAll();
                    return $this->gm->res_payload($res, "success", "Sucessfully fetch todolist.", 200);
                } else {
                    return $this->gm->res_payload(null, "failed", "expired token", 401);
                }
            } else {
                return $this->gm->res_payload(null, "failed", "mising team_id", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
}
