<?php

class Get
{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }


    public function get_user($user_id = null)
    {
        $sql = "SELECT * FROM user WHERE is_archived = 0 ";
        if ($user_id != null) {
            $sql .= "AND user_id = '$user_id'";
        }
        $result = $this->gm->exec_query($sql);
        if ($result['code'] == 200) {
            return $this->gm->response_payload($result['data'], "success", "Succesfully retrieved data.", $result['code']);
        }
        return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", $result['code']);
    }
}
