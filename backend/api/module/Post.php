<?php

class Post{

    protected $pdo, $gm;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
    }

    public function add_student($data){
        try{
            $sql = "INSERT INTO student (studnum, fname, lname) VALUES (?,?,?);";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$data->studnum, $data->fname, $data->lname]);
            return $this->gm->response_payload(null, "success", "Succesfully inserted data.", 200);
        }
        catch(\PDOException $e){
            return $this->gm->response_payload(null, "failed", "Failed to insert data.", 400);
        }
       
    }

    public function edit_student($data, $id){
        try{
            $sql = "UPDATE student SET fname = '$data->fname' WHERE studnum = '$id'";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute();
            return $this->gm->response_payload(null, "success", "Succesfully updated data.", 200);
        }
        catch(\PDOException $e){
            return $this->gm->response_payload(null, "failed", "Failed to update data.", 400);
        }
       
    }

    public function delete_student($id){
        try{
            $sql = "DELETE FROM student WHERE studnum = '$id'";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute();
            return $this->gm->response_payload(null, "success", "Succesfully deleted data.", 200);
        }
        catch(\PDOException $e){
            return $this->gm->response_payload(null, "failed", "Failed to delete data.", 400);
        }
       
    }



}
