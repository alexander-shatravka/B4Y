<?
    $to = 'bus4youticket@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Заказ билетов'; //Загаловок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['full-phone-number-order'].'</p>
                    <p>Почта: '.$_POST['EM'].'</p>
                    <p>Откуда: '.$_POST['destination-from'].'</p>  
                    <p>Куда: '.$_POST['destination-to'].'</p>   
                    <p>Дата: '.$_POST['date'].'</p> 
                    <p>На время: '.$_POST['time'].'</p>  
                    <p>Количество человек: '.$_POST['tickets-number'].'</p> 
                    <p>Карта клиента: '.$_POST['tickets-number'].'</p> 
                    <p>Общая стоимость: '.$_POST['total'].'грн</p>           
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Новый клиент (тест)<nikkot08@gmail.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>