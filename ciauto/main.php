<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "1137134607:AAEeEw5GMRAhlWlruwLcslSSiiPbXeHcrao";
$chat_id = "-499716502";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>