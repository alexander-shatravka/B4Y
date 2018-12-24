function initAjaxSendForm(e){
    $('#btn-order').click(function(e){
        e.preventDefault();
        if($(this).parent().find('#phone').val().length !=15){
            $(this).parent().find('#phone').addClass('has-error');
            return false;
        }
        var form_data = $('#order').serialize(); //собераем все данные из формы
        var popup_form_data = $('#full-form input').serialize();
            $.ajax({  //mail to admins 
                type: "POST", 
                url: "mail.php",
                data: popup_form_data + "&moredata=" + form_data,
                success: function() {
                    location = 'thankPage.html'
                },  
            });
            $.ajax({  //telegram to admins 
                type: "POST", 
                url: "telegram.php",
                data: popup_form_data + "&moredata=" + form_data,  
		    });
        return false;
    })
}

function initAjaxOrderCall(e){

    $('#btn-order-call').click(function(e){
        e.preventDefault();
        if($(this).parent().find('#phone').val().length != 15){
            $(this).parent().find('#phone').addClass('has-error');
            return false;
        }
        var form_data = $('#call-me-form').serialize(); //собераем все данные из формы
            $.ajax({  //mail to admins 
                type: "POST", 
                url: "call-order-tomail.php",
                data: form_data,
                success: function() {
                    location = 'thankPage.html'
                },  
            });
            $.ajax({  //telegram to admins 
                type: "POST", 
                url: "call-order-totelegram.php",
                data: form_data,  
		    });
        return false;
    })
}

function initPhoneValidate(){
    $('#phone').on('change', function(){
        if($('#phone').val().length == 15){
            $(this).removeClass('has-error');
        }
    })
}
initPhoneValidate();

