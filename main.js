$(window).on("load", function() {
    $('#logout').on('click', function(e) {
        e.preventDefault();
        $('.popup').addClass('popup-show');
    });

    $('.popup').on('click', function() {
        $('.popup').removeClass('popup-show');
    });

    $('#login').on('click', function(e) {
        e.preventDefault();
        $('.message-block').addClass('message-block--show');
    });
    
    $('#close').on('click', function(e) {
        e.preventDefault();
        $('.message-block').removeClass('message-block--show');
    });
});