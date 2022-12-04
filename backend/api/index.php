<?php
require_once "./config/Connection.php";
require_once "./module/Global.php";
require_once "./module/Procedural.php";

require_once "./module/data/User.php";
require_once "./module/data/Todolist.php";
require_once "./module/data/Team.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json: charset=utf8");
header("Access-Control-Allow-Methods: GET, POST, PATCH, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$db = new Connection();
$pdo = $db->connect();

$user = new User($pdo);
$todolist = new Todolist($pdo);
$team = new Team($pdo);

if (isset($_REQUEST['request'])) {
    $req = explode('/', rtrim($_REQUEST['request'], '/'));
} else {
    http_response_code(404);
}


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        switch ($req[0]) {
            case 'test':
                echo 'test';
                break;
                // case 'user':
                //     if (count($req) > 1) {
                //         echo json_encode($get->get_user($req[1]));
                //         // echo returnData($get->get_user($req[1]));
                //     } else {
                //         echo json_encode($get->get_user());
                //         // echo returnData($get->get_user());
                //     }
                //     break;

            default:
                http_response_code(403);
                break;
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        // $data = receiveData(file_get_contents("php://input"));
        switch ($req[0]) {
            case 'user':
                switch ($req[1]) {
                    case 'auth':
                        print_r(getallheaders());
                        // echo json_encode($user->auth($data));
                        break;
                    case 'team':
                        echo json_encode($user->teamlist($data));
                        break;
                    case 'todolist':
                        echo json_encode($user->gettodolist($data));
                        break;
                    case 'create_todolist':
                        echo json_encode($user->createtodolist($data));
                        break;
                    default:
                        http_response_code(403);
                        break;
                }
                break;
                // case 'login':
                //     echo json_encode($user->login($data));
                //     break;
            case 'todolist':
                switch ($req[1]) {

                    default:
                        http_response_code(403);
                        break;
                }
                break;
            case 'team':
                switch ($req[1]) {

                    case 'todolist':
                        echo json_encode($team->getteamtodolist($data));
                        break;
                    case 'logs':
                        echo json_encode($team->getteam_logs($data));
                        break;
                    default:
                        http_response_code(403);
                        break;
                }
                break;
            case 'decrypt':
                print_r($data);
                break;
            case 'encrypt':
                print_r($data);
                break;
            case 'test':
                print_r(getallheaders());
                break;


            default:
                http_response_code(403);
                break;
        }

        break;

    case 'PATCH':
        $data = json_decode(file_get_contents("php://input"));

        switch ($req[0]) {
            case 'sample':
                break;
            default:
                http_response_code(403);
                break;
        }
        break;

    default:
        http_response_code(403);
        break;
}
