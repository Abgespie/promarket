// course throwing-list

$(".course-bullets-el-button").on("click", function () {
    let oncl = document.querySelectorAll(".course-bullets-el-button:hover");
    let listItem = $(".course-bullets-el-button:hover");
    let onclnum = $( ".course-bullets-el-button" ).index( listItem ) + 1;

    if (!$(oncl).hasClass("course-bullets-el-button--onclick")) {
        $(oncl).addClass("course-bullets-el-button--onclick");
        $(".course-bullets-el-descs--" + onclnum).show("1000");
    }
    else {
        $(oncl).removeClass("course-bullets-el-button--onclick");
        $(".course-bullets-el-descs--" + onclnum).hide("1000");
    }
});

// reviews-slider

$('.reviews-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<div class="reviews-slider__arrowPrev"><img src="img/reviews/arrow-left.svg" alt="" class="reviews-slider__arrowPrev--img"></div>',
    nextArrow: '<div class="reviews-slider__arrowNext"><img src="img/reviews/arrow-right.svg" alt="" class="reviews-slider__arrowNext--img"></div>',
    dotsClass: 'reviews-slider__dots'
});

// rewiews-slider arrow and dots normalize

$('.reviews-slider__dots').on('click', function() {
    let thisLi = $('.slick-active');
    if ($(thisLi).attr('id') == 'slick-slide05') {
        $('.reviews-slider__dots').addClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide03') {
        $('.reviews-slider__dots').addClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide04') {
        $('.reviews-slider__dots').addClass("reviews-slider--up4");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up4");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up4");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
    }
    else {
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
});
$('.reviews-slider__arrowPrev').on('click', function() {
    let thisLi = $('.slick-active');
    if ($(thisLi).attr('id') == 'slick-slide05') {
        $('.reviews-slider__dots').addClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

            $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
        }
    }
    else if ($(thisLi).attr('id') == 'slick-slide03') {
        $('.reviews-slider__dots').addClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up3");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

            $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up3");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
        }
    }
    else if ($(thisLi).attr('id') == 'slick-slide04') {
        $('.reviews-slider__dots').addClass("reviews-slider--up4");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up4");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");

            $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up4");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        }
    }
    else {
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
        }
    }
});
$('.reviews-slider__arrowNext').on('click', function() {
    let thisLi = $('.slick-active');
    if ($(thisLi).attr('id') == 'slick-slide05') {
        $('.reviews-slider__dots').addClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

            $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
        }
    }
    else if ($(thisLi).attr('id') == 'slick-slide03') {
        $('.reviews-slider__dots').addClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up3");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

            $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up3");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
        }
    }
    else if ($(thisLi).attr('id') == 'slick-slide04') {
        $('.reviews-slider__dots').addClass("reviews-slider--up4");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up4");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");

            $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up4");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        }
    }
    else {
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        let arrw = window.innerWidth;
        if (arrw > 991) {
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
            $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
            $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
        }
    }
});

// questions throwing-list

$(".questions-bullets-el-title__button").on("click", function () {
    let oncl = document.querySelectorAll(".questions-bullets-el-title__button:hover");
    let listItem = $(".questions-bullets-el-title__button:hover");
    let onclnum = $( ".questions-bullets-el-title__button" ).index( listItem ) + 1;

    if (!$(oncl).hasClass("questions-bullets-el-title__button--onclick")) {
        $(oncl).addClass("questions-bullets-el-title__button--onclick");
        $(".questions-bullets-el-desc--" + onclnum).show("1000");
    }
    else {
        $(oncl).removeClass("questions-bullets-el-title__button--onclick");
        $(".questions-bullets-el-desc--" + onclnum).hide("1000");
    }
});

// invest scroll

$('.header-main__button').on('click', function() {
    $("html, body").animate({
        scrollTop: 10550
    }, "slow");
});
$('.whois-button').on('click', function() {
    $("html, body").animate({
        scrollTop: 10550
    }, "slow");
});
$('.game-button').on('click', function() {
    $("html, body").animate({
        scrollTop: 10550
    }, "slow");
});
$('.questions-card-content-button').on('click', function() {
    $("html, body").animate({
        scrollTop: 10550
    }, "slow");
});

// call

$(".header-top-right__order").on("click", function() {
    $('body').addClass("body--nonscroll");
    $('.call').removeClass("call--hidden");
    });
$(".call-close").on("click", function() {
    $('body').removeClass("body--nonscroll");
    $('.call').addClass("call--hidden");
    });

$(".call-box-policy__check").on("click", function() {
    $('.call-box-policy__check--img').toggleClass('call-box-policy__check--img--nonvisible');
    $('.call-box-policy__check--img--checked').toggleClass('call-box-policy__check--img--nonvisible');
    $('call-box-policy__check').toggleClass('policy-is-accepted');

});

$(".call-box-choises--variant").on("click", function(e) {
    let oncl = e.target.id;
    if(oncl != "variant-11" && e.target.id != "variant-22" && e.target.id != "variant-33") {
        let chid = document.getElementsByClassName("call-box-choises--chosen")[0].id;
        switch (chid) {
            case "variant-11":
                $("#variant-11").toggleClass("call-box-choises--hidden");
                $("#variant-11").toggleClass("call-box-choises--chosen");
                $("#variant-01").toggleClass("call-box-choises--hidden");
                break;
            case "variant-22":
                $("#variant-22").toggleClass("call-box-choises--hidden");
                $("#variant-22").toggleClass("call-box-choises--chosen");
                $("#variant-02").toggleClass("call-box-choises--hidden");
                break;
            case "variant-33":
                $("#variant-33").toggleClass("call-box-choises--hidden");
                $("#variant-33").toggleClass("call-box-choises--chosen");
                $("#variant-03").toggleClass("call-box-choises--hidden");
                break;
        }
        switch (oncl) {
            case "variant-01":
                $(oncl).toggleClass("call-box-choises--hidden");
                $("#variant-01").toggleClass("call-box-choises--hidden");
                $("#variant-11").toggleClass("call-box-choises--hidden");
                $("#variant-11").toggleClass("call-box-choises--chosen");
                break;
            case "variant-02":
                $(oncl).toggleClass("call-box-choises--hidden");
                $("#variant-02").toggleClass("call-box-choises--hidden");
                $("#variant-22").toggleClass("call-box-choises--hidden");
                $("#variant-22").toggleClass("call-box-choises--chosen");
                break;
            case "variant-03":
                $(oncl).toggleClass("call-box-choises--hidden");
                $("#variant-03").toggleClass("call-box-choises--hidden");
                $("#variant-33").toggleClass("call-box-choises--hidden");
                $("#variant-33").toggleClass("call-box-choises--chosen");
                break;
        }
    }
});