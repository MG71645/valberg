function popup(id, trigger) {
    $('popup input[name="trigger"]').val(trigger);
    $('fade').removeClass('hidden');
    $(id).removeClass('hidden');
    $(id).css('background', '(url("../img/gallery/'+trigger+'.jpg');
    setTimeout( function() {
        $('fade').addClass('show');
        $(id).addClass('show');
        $('popup input[name="name"]').focus();
    }, 1 );
}

function popdown() {
    $('fade').addClass('hidden').removeClass('show');
    $('popup').each( function() {
        $(this).addClass('hidden').removeClass('show');
    });
}

$('fade').click( function() {
    popdown();
});


function scrollTo(element) {
    if (document.getElementById(element)) {
        var destination = jQuery('#'+element).offset().top-0;
        jQuery('html,body').animate({scrollTop: destination}, 500);
    }
}


function AjaxPopupFormSend(formMain,url) {
    if ( $('#send_phone').hasClass('used') ) {
        popdown();
    } else {
        if ( $('#popup_main_form input[type="tel"]').hasClass('valid') ) {
            $('#popup_main_cta').prop('disabled', true);
            $('#popup_main_cta').prop('value', 'Отправка');
            jQuery.ajax({
                url: url,
                type: 'POST',
                dataType: 'html',
                data: jQuery('#'+formMain).serialize(),
                success: function(response) {
                    //document.getElementById(result_id).innerHTML = response;
                    //window.location.href = "http://rusdoors.kz";
                    setTimeout( function() {
                        $('#slide-01').addClass('previous');
                        $('#slide-02').removeClass('next');
                    }, 2000 );
                },
                error: function(response) {
                    //document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
                    $('#popup_main_cta').prop('value', 'Ошибка');
                    setTimeout( function() {
                        $('#popup_main_cta').prop('disabled', false);
                        $('#popup_main_cta').prop('value', 'Отправить');
                    }, 2000 );
                }
            });
        }
    }
}

function AjaxEmailSend(formMain,url) {
    if ( $('#send_phone').hasClass('used') ) {
        popdown();
    } else {
        if ( $('#popup_email_form input[type="email"]').hasClass('valid') ) {
            $('#popup_email_cta').prop('disabled', true);
            $('#popup_email_cta').prop('value', 'Отправка');
            jQuery.ajax({
                url: url,
                type: 'POST',
                dataType: 'html',
                data: jQuery('#'+formMain).serialize(),
                success: function(response) {
                    //document.getElementById(result_id).innerHTML = response;
                    //window.location.href = "http://rusdoors.kz";
                    setTimeout( function() {
                        $('#slide-11').addClass('previous');
                        $('#slide-12').removeClass('next');
                    }, 2000 );
                },
                error: function(response) {
                    //document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
                    $('#popup_main_cta').prop('value', 'Ошибка');
                    setTimeout( function() {
                        $('#popup_email_cta').prop('disabled', false);
                        $('#popup_email_cta').prop('value', 'Отправить');
                    }, 2000 );
                }
            });
        }
    }
}

function AjaxFormSend(formMain,url,buttonId) {
    console.log($('#'+formMain+' input[type="tel"]'));
    if ( $('#'+formMain+' input[type="tel"]').hasClass('valid') ) {
        var button = document.getElementById(buttonId);
        button.disabled = true;
        button.value = 'Отправка';
        jQuery.ajax({
            url: url,
            type: 'POST',
            dataType: 'html',
            data: jQuery('#'+formMain).serialize(),
            success: function(response) {
                //document.getElementById(result_id).innerHTML = response;
                //window.location.href = "http://rusdoors.kz";
                setTimeout( function() {
                    button.value = 'Готово!';
                }, 1000 );
            },
            error: function(response) {
                //document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
                setTimeout( function() {
                    button.value = 'Ошибка';
                }, 1000 );
            }
        });
    }
}