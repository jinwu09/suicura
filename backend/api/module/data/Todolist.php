<?php

class Todolist
{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }

    public function todolist($data)
    {
        try {
            if ($this->gm->tokencheck($data->user_id, $data->user_token)) {
                $sql = "SELECT todo_id, todo_name, todo_description, todo_created, todo_status from todolists where user_id = ?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->user_id]);

                return $res = $stmt->fetchAll();
                return $this->gm->res_payload($res, "success", "Sucessfully fetch todolist.", 200);
            } else {
                return $this->gm->res_payload(null, "failed", "expired token", 401);
            }
        } catch (\PDOException $e) {
            return $this->gm->res_payload(null, "failed", "unable to process date", 401);
        }
    }
}
