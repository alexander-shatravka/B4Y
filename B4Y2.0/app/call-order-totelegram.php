<?php
    $service = 'Заказ звонка';
    $name = $_POST['name'];
    $phone = $_POST['full-phone-number-call'];

    $token = "739334807:AAGXeAVR35d3uXOD4ePn-W5lpWYkwy-UnWs";
    $chat_id = "-288164771";

    $arr = array(
        'Услуга: ' => $service,
        'Имя: ' => $name,
        'Телефон: ' => $phone,
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        header('Location: thankPage.html');
    } else {
        echo "Error";
    }
?>