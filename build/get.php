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
$creative = (string)$_POST['pub_id'];
$pixel = (string)$_POST['pixel'];
$mediabuyer = (string)$_POST['mediabuyer'];

$phone = str_replace(array("O", "o"), "0", (string)$_POST['phone']);
$time = (string)date('Y-m-d H:i:s');
$p = (string)$_POST['p'];
$src = (string)$_POST['src'];
$custom2 = (string)$_POST['custom2'];

// if($name == '') {
//     $name = 'null';
// }
// if($phone == '') {
//     echo 'EMPTY PHONE OR NAME </br>';
//     echo '<button style="height:200px;width:200px" onclick="history.go(-1);"><b>Try Again</b></button>';
//     exit;
// }

echo "ИмЯ: $name. Телефон: $phone.";


// $curl = curl_init();

// //The JSON data.
// $jsonData = [
//     'goal_id' => '320',
//     'firstname' => $name,
//     'phone' => $phone,
//     'sub_id1' => $lp_url,
//     'sub_id2' => $pub_id,
//     'sub_id3' => $mediabuyer,
//     'sub_id4' => $pixel,
//     "aff_click_id" => $custom2
// ];
// $jsonDataEncoded = json_encode($jsonData);

// curl_setopt_array($curl, array(
//   CURLOPT_URL => 'https://tracking.affscalecpa.com/api/v2/affiliate/leads?api-key=8f0e5599984bbd97bb39506dd877afc32347e9ad',
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => '',
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 0,
//   CURLOPT_FOLLOWLOCATION => true,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => 'POST',
//   CURLOPT_POSTFIELDS => $jsonDataEncoded,
//   CURLOPT_HTTPHEADER => array(
//     'Content-Type: application/json'
//   ),
// ));

// $response = curl_exec($curl);
// curl_close($curl);

// header("Location:thanks.html?p=$p");

?>