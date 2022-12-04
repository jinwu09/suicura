<?php

// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json: charset=utf8");
// header("Access-Control-Allow-Methods: GET, POST, PATCH");
// header("Access-Control-Allow-Headers: X-Requested-With");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json: charset=utf8");
header("Access-Control-Allow-Methods: GET, POST, PATCH, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

date_default_timezone_set("Asia/Manila");
set_time_limit(1000);

define("SERVER", "localhost");
define("DBASE", "suicura");
define("USER", "root");
define("PASSWORD", "");
define("SECRET_KEY", "cielo");

class Connection
{
    protected $con_string = "mysql:host=" . SERVER . ";dbname=" . DBASE . "; charset=utf8mb4";
    protected $options = [
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
        \PDO::ATTR_EMULATE_PREPARES => false
    ];

    public function connect()
    {
        return new \PDO($this->con_string, USER, PASSWORD, $this->options);
    }
}
