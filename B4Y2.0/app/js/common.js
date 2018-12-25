$(document).ready(function(){
    initDatepicker();
    initMobileMenu();
    initSlickSliders();
    initFormPopup();
    initTrips();
    initPrice();
    initTicketNumberValidation();
    initAnchorsScroll();
    initAjaxSendForm();
    initAjaxOrderCall(); 
    initPhoneMask();
    initCountrySelect();
    initFullPhoneInput();
    initfeedbackSlick();
    initchangeCursorPosition();
    initOrderTrigger();
})

function initPrice(){
    var ticketNumber = Number($('#tickets-number').val());
    if($('#destination-from').val() == "Харьков"){
        var totalPrice = ticketNumber * 1000;
        $('.total-price').text(totalPrice);
        $('.currency').text('грн');
        $('#total').val(totalPrice + ' гривен');
    }
    if($('#destination-from').val() == "Москва"){
        var totalPrice = ticketNumber * 2500;
        $('.total-price').text(totalPrice);
        $('.currency').text('руб');
        $('#total').val(totalPrice + ' рублей');
    } 
}

function initTicketNumberValidation(){
    $('#tickets-number').on('change click', function(){
        initPrice();
    });
}


function initTrips(){
    var fromSelect = $('#destination-from');
    var toSelect = $('#destination-to');
    var timeSelect = $('#time');

    var timeFtomKharkovHTML = '<option value="18:00" selected>18:00</option>\n<option value="19:00">19:00</option>';
    var timeFtomMoscowHTML = '<option value="21:00" selected>21:00</option>\n<option value="22:00">22:00</option>';

    fromSelect.on('change', function(){
        // alert($(this).val());
        if($(this).val() == "Харьков"){
            timeSelect.html(timeFtomKharkovHTML); 
            toSelect.val('Москва');
            initPrice();
        }
        if($(this).val() == "Москва"){
            timeSelect.html(timeFtomMoscowHTML); 
            toSelect.val('Харьков');
            initPrice();
        }
    })

    toSelect.on('change', function(e){
        if($(this).val() == "Харьков"){
            fromSelect.val('Москва');
            timeSelect.html(timeFtomMoscowHTML); 
            initTrips();
            initPrice();
        }
        if($(this).val() == "Москва"){
            fromSelect.val('Харьков');
            timeSelect.html(timeFtomKharkovHTML); 
            initTrips();
            initPrice();
        }
    })  
}

function initAnchorsScroll(){
    $(".index-nav a, .btn-anchor").on("click", function (event) {
        if($(this).hasClass('non-anchor' === false)){
            event.preventDefault(); 
        }
        $('.hamburger').removeClass('is-active'); 
        $('.header-container').removeClass('is-open');  

        var id  = $(this).attr('href'),
            top = $(id).offset().top - 40;

        $('body,html').animate({scrollTop: top}, 1000);
    });
}

function initFormPopup(){
    var fullForm = $('#full-form');
    var callMeForm = $('#call-me-form') 
    $('.form-next').on('click', function(e){
        //_gaq.push(['_trackEvent', 'knopka1','form1']);return true;
        e.preventDefault();
        fullForm.addClass('display');
        setTimeout(function(){fullForm.addClass('opacity');},10);
        $('#shadow-bg').addClass('enable');
        $('body').addClass('scroll-off');
        //formFilling(); 
    });

    $('.order-call').on('click', function(e){
        // _gaq.push(['_trackEvent', 'knopka1','form1']);return true;
        e.preventDefault();
        callMeForm.addClass('display');
        setTimeout(function(){callMeForm.addClass('opacity');},10);
        $('#shadow-bg').addClass('enable');
        $('body').addClass('scroll-off');
        //formFilling();
    });

    $(document).mouseup(function (e) {
        var container = $(".popup-form");
        if (container.has(e.target).length === 0 && e.target.className !== 'popup-form enable'){
            $('.popup-form').removeClass('display');
            $('.popup-form').removeClass('opacity');
            $('#shadow-bg').removeClass('enable');
            $('body').removeClass('scroll-off');
        }
    });

    $('#shadow-bg').click(function(){
        $('.popup-form').removeClass('display');
        $('.popup-form').removeClass('opacity');
        $('#shadow-bg').removeClass('enable');
        $('body').removeClass('scroll-off');
    })
}

function initCountrySelect(){
    $('.select-country').on('click', 'a', function(e){
        $(this).parent().toggleClass('open');
        $(this).parent().find('a').removeClass('selected');
        $(this).addClass('selected');
        $('#country-code').val($(this).text());
        initFullPhoneInput();
    })   
}

function initFullPhoneInput(){
    $('#full-phone-number-order').val($('#full-phone-number-order').parents('.phone-row').find('.select-country .selected').text() + $('#full-phone-number-order').parent().parent().find('.masked-phone').val());
    $('#full-phone-number-call').val($('#full-phone-number-call').parents('.phone-row').find('.select-country .selected').text() + $('#full-phone-number-call').parent().parent().find('.masked-phone').val());
}

$('.masked-phone').on('change', function(){
    initFullPhoneInput();
})

function initPhoneMask(){
    $(".masked-phone").mask("(999) 999-99-99" );
    
    $(".masked-phone").on("blur", function() {
        var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );
    
        if( last.length == 7 ) {
            var move = $(this).val().substr( $(this).val().indexOf("-") + 1, 1 );
            var lastfour = last.substr(1,4);
            var first = $(this).val().substr( 0, 9 );
    
            $(this).val( first + move + '-' + lastfour );
        }
    });
}

function initOrderTrigger(){
    $('.call-order-trigger').on('click', function(e){
        e.preventDefault();
        $( ".order-call").trigger( "click" );
    })
}


function initchangeCursorPosition() {
	jQuery('.masked-phone').click(function(){
		if (!jQuery(this).val()) {
			jQuery(this).caretTo('(');	
		}
	});
}

function formFilling() {
    $('#full-form .row-hidden').html($('#order').html()); //add field from initial form to full form in popup
}


function initDatepicker() {
    var now = new Date();
    var today = now.format('dd.mm.yyyy');
    jQuery('.datepicker').datepicker({
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Aвгуст", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        firstDay: 1,
        minDate: today,
        dateFormat: 'dd.mm.yy',
        prevText: '<',
        nextText: '>',
    });

    jQuery('.datepicker').val(today);
}

function initMobileMenu(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active'); 
        $('.header-container').toggleClass('is-open');       
    });
}

function initSlickSliders(){
    if($(window).width() < 768){
        $('.mobile-slider').slick({
            autoplay: false,
            vertical: false,
            speed	: 1000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            draggable: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnClick: false,
            // prevArrow: $('.slick-prev'),
            // nextArrow: $('.slick-next'),
        })
    }
}

function initfeedbackSlick(){
    if($(window).width() < 768){
        $('.feedback-slider').slick({
            autoplay: false,
            vertical: false,
            speed	: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            draggable: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnClick: false,
        })
    }

    $('.feedback-slider').slick({
        autoplay: false,
        vertical: false,
        speed	: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        draggable: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnClick: false,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
    })
}


