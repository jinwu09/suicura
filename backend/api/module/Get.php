<?php

class Get{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }


    public function get_student($studnum = null){
        $sql = "SELECT * FROM student WHERE is_archived = 0 ";
        if($studnum!=null){
            $sql .= "AND studnum = '$studnum'";
        }
        $result = $this->gm->exec_query($sql);
        if($result['code']==200){
            return $this->gm->response_payload($result['data'], "success", "Succesfully retrieved data.", $result['code']);
        }
        return $this->gm->response_payload(null, "failed", "Unable tp retrieve data.", $result['code']);
    }

  

}
?>