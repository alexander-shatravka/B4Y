<?php
    $service = 'Заказ билета';
    $name = $_POST['name'];
    $phone = $_POST['full-phone-number-order'];
    $email = $_POST['EM'] ? $_POST['EM'] : '---';
    $from = $_POST['destination-from'];
    $to = $_POST['destination-to'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $ticketsNumber = $_POST['tickets-number'];
    $price = $_POST['total'];

    $token = "739334807:AAGXeAVR35d3uXOD4ePn-W5lpWYkwy-UnWs";
    $chat_id = "-288164771";

    $arr = array(
        'Услуга: ' => $service,
        'Имя: ' => $name,
        'Телефон: ' => $phone,
        'Email: ' => $email,
        'Откуда: ' => $from,
        'Куда: ' => $to,
        'Дата: ' => $date,
        'Время: ' => $time,
        'Количество человек: ' => $ticketsNumber,
        'Общая стоимость: ' => $price,
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