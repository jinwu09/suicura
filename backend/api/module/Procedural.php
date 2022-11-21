<?php

function returnData($plaint_text){
    $string = json_encode($plaint_text);
    $method = "AES-256-CBC";
    $key = hash('sha256', SECRET_KEY, true);
    $iv = openssl_random_pseudo_bytes(16);
    $ciphertext = openssl_encrypt($string, $method, $key, OPENSSL_RAW_DATA, $iv);
    $hash = hash_hmac("sha256", $ciphertext.$iv, $key, true);
    $output = ['ciphertext'=>bin2hex($ciphertext), 'iv'=>bin2hex($iv), 'hash'=>bin2hex($hash)];
    return json_encode(array("a"=>base64_encode(json_encode($output))));
}

function receiveData($encryptedText){
    $data = json_decode($encryptedText);
    $enc_text = json_decode(base64_decode($data->a));
  
    $method = "AES-256-CBC";
    $key = hash('sha256', SECRET_KEY, true);
   
    $iv =   hex2bin($enc_text->iv);
    $hash =  $enc_text->hash;
    $ciphertext = hex2bin($enc_text->ciphertext);

    if(!hash_equals(hash_hmac("sha256", $ciphertext.$iv, $key, true), $hash)) { return null; }

    return openssl_decrypt($ciphertext, $method, $key, OPENSSL_RAW_DATA, $iv);

}
