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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtc1N1Ym1pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7IC8q0J/QoNCe0JLQldCg0K/QldCcINCd0JDQltCQ0KLQkCDQm9CYINCa0J3QntCf0JrQkCDQntCi0J/QoNCQ0JLQmtCYKi9cbiAgICAkKCcuZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB1c2VyX25hbWUgPSAkKHRoaXMpLmZpbmQoJy5mb3JtX19uYW1lJykudmFsKCk7XG4gICAgICAgIGxldCB1c2VyX3RlbCA9ICQodGhpcykuZmluZCgnLmZvcm1fX3RlbCcpLnZhbCgpO1xuICAgICAgICB2YXIgY3Vycl9sYW5nID0gJChcImh0bWxcIikuYXR0cihcImxhbmdcIik7XG4gICAgICAgIGlmIChjdXJyX2xhbmcgPT0gbnVsbCkgeyBjdXJyX2xhbmcgPSBcIlJVXCI7IH1cbiAgICAgICAgdmFyIHRoaXNGb3JtID0gdGhpcztcbiAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvRj9C10Lwg0L/Rg9GC0Ywg0Log0YTQsNC50LvRgyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LTQuNGA0LXQutGC0L7RgNC40Lgg0Y/Qt9GL0LrQsFxuICAgICAgICB2YXIgbGFuZ1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZ3VhZ2UxXCIpO1xuICAgICAgICB2YXIgbGFuZ1NlbGVjdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmd1YWdlMlwiKTtcbiAgICAgICAgdmFyIGxhbmcgPSBsYW5nU2VsZWN0Lm9wdGlvbnNbbGFuZ1NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgdmFyIGxhbmcyID0gbGFuZ1NlbGVjdDIub3B0aW9uc1tsYW5nU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICBpZiAobGFuZyA9PSBcIi9cIiB8fCBsYW5nMiA9PSBcIi9cIikge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3RfdXJsID0gXCJzZW5kbWFpbC5waHBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0X3VybCA9IFwiLi4vc2VuZG1haWwucGhwXCI7XG4gICAgICAgIH1cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogY29ubmVjdF91cmwsIC8vINC60YPQtNCwINC+0YLQv9GA0LDQstC70Y/QtdC8XG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIiwgLy8g0LzQtdGC0L7QtCDQv9C10YDQtdC00LDRh9C4XG4gICAgICAgICAgICBkYXRhOiB7IC8vINGH0YLQviDQvtGC0L/RgNCw0LLQu9GP0LXQvFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB1c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgXCJ0ZWxcIjogdXNlcl90ZWwsXG4gICAgICAgICAgICAgICAgXCJjdXJyX2xhbmdcIjogY3Vycl9sYW5nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXNGb3JtKS5maW5kKFwiLmlucHV0LWVycm9yXCIpLmFkZENsYXNzKCdlcnJvcicpLmh0bWwoXCLQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwIVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKiDQtdGB0LvQuCDQv9GA0L7QuNC30L7QudC00LXRgiDQvtGI0LjQsdC60LAg0LIg0Y3Qu9C10LzQtdC90YLQtSDRgSBpZCBlcmNvbnRzINCy0YvQstC10LTQuNGC0YHRjyDRgdC+0L7QsdGJ0LXQvdC40LUqL1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpc0Zvcm0pLmZpbmQoXCIuaW5wdXQtZXJyb3JcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpLmh0bWwoXCLQntGC0L/RgNCw0LLQu9GP0LXQvCDQtNCw0L3QvdGL0LUuLi5cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkgeyAvKiDQkiDRgdC70YPRh9Cw0LUg0YPQtNCw0YfQvdC+0Lkg0L7QsdGA0LDQsdC+0YLQutC4INC4INC+0YLQv9GA0LDQstC60Lgg0LLRi9C/0L7Qu9C90LjRgtGB0Y8g0YHQu9C10LTRg9GO0YnQuNC5INC60L7QtCovXG4gICAgICAgICAgICAgICAgJCh0aGlzRm9ybSkuZmluZCgnLmlucHV0LWVycm9yJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLmh0bWwocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9LXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSlcblxufSk7Il0sImZpbGUiOiJmb3Jtc1N1Ym1pdC5qcyJ9
