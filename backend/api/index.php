<?php
require_once "./config/Connection.php";
require_once "./module/Global.php";
require_once "./module/Procedural.php";

require_once "./module/data/User.php";
require_once "./module/data/Todolist.php";
require_once "./module/data/Team.php";


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

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    exit();
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
                //         // echo encrypt($get->get_user($req[1]));
                //     } else {
                //         echo json_encode($get->get_user());
                //         // echo encrypt($get->get_user());
                //     }
                //     break;

            default:
                http_response_code(403);
                break;
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        // $data = decrypt(file_get_contents("php://input"));
        switch ($req[0]) {
            case 'user':
                switch ($req[1]) {
                    case 'auth':
                        echo json_encode($user->auth($data));
                        break;
                    case 'team':
                        echo json_encode($user->teamlist($data));
                        break;
                    case 'todolist':
                        switch ($req[2]) {
                            case 'get':
                                echo json_encode($user->gettodolist($data));
                                break;
                            case 'specific':
                                switch ($req[3]) {
                                    case 'task':
                                        echo json_encode($user->gettask($data));
                                        break;
                                    case 'settask':
                                        echo json_encode($user->settask($data));
                                        break;
                                    default:
                                        http_response_code(403);
                                        break;
                                }
                                break;

                            case 'archive':
                                echo json_encode($user->getarhivetodolist($data));
                                break;
                            case 'ongoing':
                                echo json_encode($user->getongoingtodolist($data));
                                break;
                            case 'create':
                                echo json_encode($user->createtodolist($data));
                                break;
                            case 'setarchive':
                                echo json_encode($user->archivetodolist($data));
                                break;
                            case 'delete':
                                echo json_encode($user->deletetodolist($data));
                                break;
                            default:
                                http_response_code(403);
                                break;
                        }
                        break;
                    case 'register':
                        echo json_encode($user->add_users($data));
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
                echo decrypt(json_encode($data));
                // print_r($data);
                break;
            case 'encrypt':
                // echo json_encode(array("m" => base64_encode(
                //     json_encode($data)
                // )));
                echo encrypt(json_encode($data));
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
