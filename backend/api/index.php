<?php
require_once "./config/Connection.php";
require_once "./module/Get.php";
require_once "./module/Post.php";
require_once "./module/Global.php";
require_once "./module/Procedural.php";

require_once "./module/data/User.php";
require_once "./module/data/Todolist.php";

$db = new Connection();
$pdo = $db->connect();

$user = new User($pdo);
$todolist = new Todolist($pdo);

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
                        echo json_encode($user->auth($data));
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
                    case 'user':
                        echo json_encode($todolist->todolist($data));
                        break;
                    default:
                        http_response_code(403);
                        break;
                }
                break;
            case 'decrypt':
                print_r($data);
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
