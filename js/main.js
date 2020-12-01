$(window).scroll(function() {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (d - c)) * 100;
    var position = Math.floor(scrollPercent) + '%';

    $(".progress-bar").css('width', position);

});