$(document).ready(function () { /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
    $('.form').submit(function (e) {
        e.preventDefault();
        let user_name = $(this).find('.form__name').val();
        let user_tel = $(this).find('.form__tel').val();
        var curr_lang = $("html").attr("lang");
        if (curr_lang == null) { curr_lang = "RU"; }
        var thisForm = this;
        // Определяем путь к файлу в зависимости от директории языка
        var langSelect = document.querySelector(".language1");
        var langSelect2 = document.querySelector(".language2");
        var lang = langSelect.options[langSelect.selectedIndex].value;
        var lang2 = langSelect2.options[langSelect.selectedIndex].value;
        if (lang == "/" || lang2 == "/") {
            var connect_url = "sendmail.php";
        }
        else {
            var connect_url = "../sendmail.php";
        }
        $.ajax({
            url: connect_url, // куда отправляем
            type: "post", // метод передачи
            data: { // что отправляем
                "name": user_name,
                "tel": user_tel,
                "curr_lang": curr_lang
            },
            error: function () {
                $(thisForm).find(".input-error").addClass('error').html("Произошла ошибка!");
            },
            /* если произойдет ошибка в элементе с id erconts выведится сообщение*/
            beforeSend: function () {
                $(thisForm).find(".input-error").addClass('active').html("Отправляем данные...");
            },
            success: function (result) { /* В случае удачной обработки и отправки выполнится следующий код*/
                $(thisForm).find('.input-error').addClass('active').html(result);
                console.log("OK");
            }
        })

    })

});