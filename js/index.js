/// <reference types="../@types/jquery" />

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});


$('input').on('focus', function () {
    $(this).siblings('.label-line').css('right', '0')
    $(this).siblings('.form-label').find('.label-span').addClass('label-transition')
})

$('input').on('blur', function () {
    if ($(this).val().trim() == '') {
        $(this).siblings('.label-line').css('right', '100%')
        $(this).siblings('.form-label').find('.label-span').removeClass('label-transition')
    }
})

$('input').on('input', function () {
    if ($(this).val().trim() !== '') {
        $(this).siblings('.label-line').css('right', '0')
        $(this).siblings('.form-label').find('.label-span').addClass('label-transition')
    } else if (!$(this).is(':focus')) {
        $(this).siblings('.label-line').css('right', '100%')
        $(this).siblings('.form-label').find('.label-span').removeClass('label-transition')
    }
})

$("#message").on("input", function () {
    $(this).css("height", $(this).val() ? "100px" : "30px");
    if ($(this).val().trim() !== '') {
        $('.textarea-span').fadeOut(100)
    } else { $('.textarea-span').fadeIn(200) }
});

$('#message').on('focus', function () {
    $(this).siblings('.label-line').css('right', '0')
    $(this).siblings('.form-label').find('.label-span').addClass('label-transition')
})

$('#message').on('blur', function () {
    if ($(this).val().trim() == '') {
        $(this).siblings('.label-line').css('right', '100%')
        $(this).siblings('.form-label').find('.label-span').removeClass('label-transition')
    }
})

$('.user-input').on('focus', function () {
    $('#contactText').css('color', '#4b4b4b')
})

$('.user-input').on('blur', function () {
    if ($('.user-input').val().trim() !== '') {
        $('#contactText').css('color', '#4b4b4b')
    } else {
        $('#contactText').css('color', '#fff')
    }
})


const aboutSectionAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutContent",
        start: ".header 30%",
        end: "#aboutContent 30%",
        toggleActions: "restart none reverse none",
    },
});

aboutSectionAnimation.from(".center-line", {
    opacity: 0,
    y: -200,
    duration: 0.5,
    ease: "power3.out",
})
    .from(".about-header", {
        opacity: 0,
        x: 200,
        duration: 0.5,
        ease: "power3.out",
    }, "+=0.1")

    .from(".about-text", {
        opacity: 0,
        x: -200,
        duration: 0.5,
        ease: "power3.out",
    }, "-=0.5");


$('.navbar-toggler').on('click', function () {
    $('.mobile-collapse').toggleClass('mobile-nav')
    $('.fa-bars').toggleClass('fa-close')
})

const portolioSectionAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: "#portfolioContent",
        start: "#aboutContent center",
        end: "#aboutContent 80%",
        toggleActions: "restart none reverse none",
    },
});

portolioSectionAnimation.from(".portfolio-line", {
    opacity: 0,
    y: -200,
    duration: 0.8,
    ease: "power3.out",
})
    .from(".portfolio-header", {
        opacity: 0,
        x: 200,
        duration: 0.8,
        ease: "power3.out",
    }, "+=0.0.8")

    .from(".slider", {
        opacity: 0,
        x: -200,
        duration: 0.8,
        ease: "power3.out",
    }, "-=0.8");


const contactSectionAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: "#contactContent",
        start: "#portfolioContent center",
        end: "#portfolioContent 90%",
        toggleActions: "restart none reverse none",
    },
});

contactSectionAnimation.from(".contact-line", {
    opacity: 0,
    y: -200,
    duration: 0.8,
    ease: "power3.out",
})
    .from(".contact-header", {
        opacity: 0,
        x: 200,
        duration: 0.8,
        ease: "power3.out",
    }, "+=0.0.8")

    .from(".form-container", {
        opacity: 0,
        x: -200,
        duration: 0.8,
        ease: "power3.out",
    }, "-=0.8");