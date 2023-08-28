<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$ip=(string)$_SERVER['REMOTE_ADDR'];
$domain = (string)$_SERVER['HTTP_HOST'];
$u_agent = (string)$_SERVER['HTTP_USER_AGENT'];
$name = (string)$_POST['name'];
$lp_url = (string)$_POST['lp_url'];
$pub_id = (string)$_POST['pub_id'];

$referer = (string)$_POST['referer'];
$referrer = (string)$_POST['referrer'];
$offer = (string)$_POST['offer_id'];
$creative = (string)$_POST['pub_id'];
$pixel = (string)$_POST['pixel'];
$mediabuyer = (string)$_POST['mediabuyer'];

$phone = str_replace(array("O", "o"), "0", (string)$_POST['phone']);
$time = (string)date('Y-m-d H:i:s');
$p = (string)$_POST['p'];
$src = (string)$_POST['src'];
$custom2 = (string)$_POST['custom2'];

if($name == '') {
    $name = 'null';
}
if($phone == '') {
    echo 'EMPTY PHONE OR NAME </br>';
    echo '<button style="height:200px;width:200px" onclick="history.go(-1);"><b>Try Again</b></button>';
    exit;
}


#PP API
$url = 'https://affiliate.drcash.sh/v1/order';

//Initiate cURL.
$ch = curl_init($url);

//The JSON data.
$jsonData = [
    'stream_code' => 'zaiwq', // поменять
    'client' => [
        'name' => $name,
        'phone' => $phone,
    ],
    'sub1' => $custom2,
    'sub2' => $pub_id,
    'sub3' => $lp_url,
    'product' => '97de142d-4108-4bd4-8c80-1299986de496',
];
$jsonDataEncoded = json_encode($jsonData);
$headers = [
    "Content-Type: application/json",
    "Authorization: Bearer YJG0MTHIYWQTZDVKMI00YZRJLWFMZDUTMGYXYJJKYZA5M2NL"
];
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
print_r($result);
curl_close($ch);

header("Location:thanks.php?p=$p&src=$src");

?>
