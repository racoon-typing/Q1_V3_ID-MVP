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
$url = 'https://efirstpanel.com/api/make/contact';

//Initiate cURL.
$ch = curl_init($url);

//The JSON data.
$jsonData = array(
    'first_name' => $name,
    'lp_url' => $lp_url,
    'pub_id' => $pub_id,
    'phone' => $phone,
    'click_id' => $custom2,
    'product' => '97de142d-4108-4bd4-8c80-1299986de496',
    'token' => 'c84eeaebe9f71ca2da4e7975921ccba2'
);

$jsonDataEncoded = json_encode($jsonData);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
curl_close($ch);

header("Location:thanks.php?p=$p&src=$src");

?>
