<?php
$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$token = "1137134607:AAEeEw5GMRAhlWlruwLcslSSiiPbXeHcrao";
$chatId = "-499716502";
$arr = array(
  'Имя пользователя: ' => $userName,
  'Телефон: ' => $userPhone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chatId}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>