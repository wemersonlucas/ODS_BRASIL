<?php

include "conexao.php";

class DataOperation extends Database {
    //Insert in table
    public function insert_record($table,$fields){
        $sql = "";
        $sql .= "INSERT INTO" .$table;
        $sql .= " (".implode(",", array_keys($fields)).") VALUES ";
        $sql .= "('".implode("','", array_values($fields))."')";
        $query = mysqli_query($this->con,$sql);
        if($query){
            return true;
        }
    }
}

$obj = new DataOperation;

if(isset($_POST["submit"])){
    $myArray = array(
        "nome" => $_POST["nome"],
        "ra" => $_POST["ra"],
        "idade" => $_POST["idade"],
        "cidade" => $_POST["cidade"],
        "sexo" => $_POST["sexo"]
    );
    if($obj->insert_record("usuario",$myArray)){
        header("location:index.php?msg=Record Inserted");
    }
}
?>