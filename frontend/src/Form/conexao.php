<?php

    class Database{
        public $con;
        public function __construct(){
            $this->con = mysqli_connect("localhost", "root", "", "ods");
            if($this->con){
               
            }else{
            
            }
        }
    }
    $obj = new Database;
?>