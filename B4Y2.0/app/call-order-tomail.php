<?
    $to = 'bus4youticket@gmail'; 
    $subject = 'Обратный звонок'; 
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['full-phone-number-call'].'</p>        
                </body>
            </html>'; 
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: Новый клиент (тест)<nikkot08@gmail.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>