$(window).on('load', function () {
    // preloader
    $('.preloader').fadeOut(5000);

    // Portfolio Filtering
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
        filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.portfolio-filter button').on('click', function () {
        $('.portfolio-filter button').removeClass('active');
        $(this).addClass('active');
    });
});