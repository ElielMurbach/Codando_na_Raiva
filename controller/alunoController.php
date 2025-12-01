<?php
require_once __DIR__ . "/../config/config/db/database.php";

class AlunoController {

    private $conn;

    //Exemplo...
    
    public function __construct() {
        $banco = new Database();
        $this->conn = $banco->Connect();
    }
    
}
