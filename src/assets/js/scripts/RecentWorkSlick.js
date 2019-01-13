(function() {
    $('.recent-work-group').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        mobileFirst: true,
        centerMode: true,
        centerPadding: '20px',
        arrows: false,
        dots: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: true,
                    centerPadding: '40px'
                }
            }
        ]
    })
})();