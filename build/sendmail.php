<?php
    /*ПОМЕЩАЕМ ДАННЫЕ ИЗ ПОЛЕЙ В ПЕРЕМЕННЫЕ*/
    $name = $_POST["name"];
    $tel = $_POST["tel"];
    $curr_lang = $_POST["curr_lang"];

    /*ЗДЕСЬ ПРОВЕРЯЕМ ЕСЛИ ХОТЯ БЫ ОДНО ИЗ ПОЛЕЙ НЕ ЗАПОЛНЕНО МЫ ВОЗВРАЩАЕМ СООБЩЕНИЕ*/
    if($name=="" or $tel==""){ 
        if ($curr_lang == "RU") {
        echo "Заполните все поля";
        }
        if ($curr_lang == "EN") {
            echo "Fill in all the fields";
        }
    }

    else{
        /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
        $to = "maksim_Popovcev@mail.ru, drpopovcev@yandex.ru"; /* Адрес, куда отправляем письма*/
        $subject = "Запрос консультации, клиника Поповцева"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <infot@wild-marketing.biz>\r\n";/*ОТ КОГО*/

        /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
        $message .= "Имя клиента: ".$name."\n";
        $message .= "Tel: ".$tel."\n";

        /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/

        $send = mail($to, $subject, $message, $headers);

        /*ЕСЛИ ПИСЬМО ОТПРАВЛЕНО УСПЕШНО ВЫВОДИМ СООБЩЕНИЕ*/
        if ($send == "true")
        {
            if ($curr_lang == "RU") {
            echo "Ваше сообщение отправлено. Ожидайте звонка нашего специалиста.\r\n";
            }
            if ($curr_lang == "EN") {
                echo "Your message has been sent. Expect a call from our specialist.\r\n";
                }
        }
        /*ЕСЛИ ПИСЬМО НЕ УДАЛОСЬ ОТПРАВИТЬ ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ*/
        else
        {
            if ($curr_lang == "RU") {
            echo "Не удалось отправить, попробуйте снова!";
            }
            if ($curr_lang == "EN") {
                echo "Couldn't send, try again!";
            }
        }
    }

?>