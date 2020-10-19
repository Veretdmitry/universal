<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$file = $_FILES['myfile'];
$message = $_POST['message'];

// Формирование самого письма
$title_subscribe = "Новый пользователь на Universal!!!";
$body_subscribe = "
<h2>Добро пожаловать на Universal!!!</h2>
<p>Рады видеть Вас на нашей платформе!</p>
";
// текст письмф с отзывом
$title_message = "Пользовательно оставил отзыв";
$body_message = "
<h2>Отзыв на сайте:</h2>
<p>$message</p>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'dveretcompany@gmail.com'; // Логин на почте
    $mail->Password   = 'sd456245823164589'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('dveretcompany@gmail.com', 'Дмитрий Веретельников'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('digrod777@gmail.com');
    if(isset($email)) {
        $mail->addAddress($email);
    };
    

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }   
}
// Отправка сообщения
$mail->isHTML(true);
if(isset($email)){
    $mail->Subject = $title_subscribe;
    $mail->Body = $body_subscribe; 
}
else {
    $mail->Subject = $title_message;
    $mail->Body = $body_message;
}
   

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// Отображение результата
header('Location: ../thankyou.html');
