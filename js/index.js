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

$('.navbar-toggler').on('click', function () {
    $('.mobile-collapse').toggleClass('mobile-nav')
    $('.fa-bars').toggleClass('fa-close')
})

$('.nav-link').on('click', function () {
    if ($('.mobile-collapse').hasClass('mobile-nav')) {
        $('.mobile-collapse').removeClass('mobile-nav')
        $('.fa-bars').removeClass('fa-close')
    }
})

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, TimelineMax);

let showAbout = gsap.timeline();
showAbout.fromTo(".about__separator line", 0.4, {
    attr: {
        y2: "0"
    }
}, {
    attr: {
        y2: "100"
    }
})
    .fromTo(".about-header", 0.4, {
        x: "30",
        opacity: "0"
    }, {
        x: "0",
        opacity: "1"
    }, "+=.4").to(CSSRulePlugin.getRule(".about-text h2::after"), 0.4, {
        cssRule: {
            width: "100%",
        }
    }, .8).to(".about-text h2 span", 0, {
        opacity: "1"
    }).to(CSSRulePlugin.getRule(".about-text h2::after"), .4, {
        cssRule: {
            left: "100%",
            width: "0%"
        }
    });

let showPortfolio = gsap.timeline();
showPortfolio.fromTo(".portfolio__separator line", 0.4, {
    attr: {
        y2: "0"
    }
}, {
    attr: {
        y2: "100"
    }
})
    .fromTo(".portfolio-header", {
        x: "30",
        opacity: "0"
    }, {
        x: "0",
        opacity: "1"
    }, "+=.1").fromTo(".slider", {
        x: "0",
        opacity: "0"
    }, {
        x: "20",
        opacity: "1"
    }, "+=.1")


let showContact = gsap.timeline();

showContact.fromTo(".contact__separator line", 0.4, {
    attr: {
        y2: "0"
    }
}, {
    attr: {
        y2: "100"
    }
})
    .fromTo(".contact-header", 0.4, {
        x: "30",
        opacity: "0"
    }, {
        x: "0",
        opacity: "1"
    }, "+=.4").to(CSSRulePlugin.getRule(".contact-text h2::after"), 0.4, {
        cssRule: {
            width: "100%",
        }
    }, .8).to(".contact-text h2 span", 0, {
        opacity: "1"
    }).to(CSSRulePlugin.getRule(".contact-text h2::after"), .4, {
        cssRule: {
            left: "100%",
            width: "0%"
        }
    }).to(CSSRulePlugin.getRule(".input-container:after"), .4, {
        cssRule: {
            width: "100%"
        }
    }, .8).to(".user-input", 0, {
        opacity: "1"
    }, 1.2).to(".textarea-label", 0, {
        opacity: "1"
    }, 1.2).to(".form-label", 0, {
        opacity: "1"
    }, 1.2).to(CSSRulePlugin.getRule(".input-container:after"), .4, {
        cssRule: {
            left: "100%",
            width: "0%"
        }
    }, 1.2).to(CSSRulePlugin.getRule(".form-submit:after"), .4, {
        cssRule: {
            width: "100%"
        }
    }, .8).to(".send-btn", 0, {
        opacity: "1"
    }, 1.2).to(CSSRulePlugin.getRule(".form-submit:after"), .4, {
        cssRule: {
            left: "100%",
            width: "0%"
        }
    }, 1.2);



const controller = new ScrollMagic.Controller;
new ScrollMagic.Scene({
    triggerElement: ".about-content"
}).setTween(showAbout).addTo(controller),
    new ScrollMagic.Scene({
        triggerElement: ".portfolio-content"
    }).setTween(showPortfolio).addTo(controller),
    new ScrollMagic.Scene({
        triggerElement: ".contact-content"
    }).setTween(showContact).addTo(controller);


let animation = gsap.timeline({
    repeat: -1
});
animation.to("#ec", 5, {
    attr: {
        d: "M691.992 225C691.992 375.138 577.991 526.5 413.491 523C256.277 523 47.9919 498 29.4906 384C13.4919 239 127.992 39.6599 290.491 36C374.991 36.0002 691.992 57.6109 691.992 225Z"
    },
    ease: Sine.easeInOut
}).to("#ec", 5, {
    attr: {
        d: "M692.977 288.5C692.977 438.638 498.477 545.5 335.477 533.5C178.263 533.5 46.4766 467.5 26.9772 343C10.4763 200 206.263 27 363.477 27C502.235 34.2254 692.977 121.5 692.977 288.5Z"
    },
    ease: Sine.easeInOut
}).to("#ec", 5, {
    attr: {
        d: "M691.975 305.069C691.975 453.616 472.023 523.232 316.107 523.232C160.192 523.232 29 469.446 29 320.9C29 172.353 264.82 37 420.736 37C558.347 44.1488 673.921 162.967 691.975 305.069Z"
    },
    ease: Sine.easeInOut
});


let scrollAnimation = gsap.timeline({
    repeat: -1,
    delay: 6,
    repeatDelay: 2
});

function myFunction() {
    var e = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    document.querySelector(".progress-bar").style.height = e + "%"
}

scrollAnimation.to("#bottom", 0, {
    opacity: "0"
}).to("#middle", 0, {
    opacity: "0"
}).to("#wheel", 0, {
    opacity: "0"
}).fromTo("#top", .5, {
    opacity: "0",
    scale: ".6",
    x: "20%"
}, {
    opacity: "1",
    scale: "1",
    x: "0%",
    ease: Sine.easeOut
}).to("#wheel", .2, {
    opacity: "1"
}, "-=.2").add("wheelAppear", scrollAnimation.duration()).to("#middle", 0, {
    opacity: "1"
}).to("#bottom", 0, {
    opacity: "1"
}).add("topMove", scrollAnimation.duration()).to("#middle", 1, {
    scaleY: "0",
    y: "100%",
    ease: Sine.easeOut
}).to("#middle", 0, {
    opacity: "0"
}).to("#top", 1, {
    y: "100%",
    ease: Sine.easeOut
}, "topMove").to("#wheel", .5, {
    attr: {
        x2: "90",
        y2: "268"
    },
    ease: Sine.easeOut
}, "wheelAppear").to("#wheel", .3, {
    attr: {
        x1: "90",
        y1: "268"
    },
    ease: Sine.easeOut
}, "-=.7").to("#bottom", 0, {
    opacity: "0"
}).to("#top", .1, {
    opacity: "0",
    x: "45%",
    y: "150%",
    scale: ".1",
    ease: Sine.easeOut
}).to("#wheel", .1, {
    scale: "0",
    y: "115%"
}, "-=.5")

window.onscroll = function () {
    myFunction()
}

let loading = gsap.timeline({
    delay: .5
});

loading.to(".loader", 0, {
    display: 'block'
})
    .to(".loader-svg", 2.8, {
        opacity: "1"
    })
    .to(".wrapper", 0, {
        opacity: "1"
    })
    .to(".loader", .8, {
        yPercent: 100,
        ease: Power4.easeOut
    })

    .to(".loader", 0, {
        display: "none"
    })

    .fromTo(".intro-about", 1, {
        opacity: "0",
        y: "-50"
    }, {
        opacity: "1",
        y: "0"
    }, "-=.5").fromTo("#ec_l", .5, {
        scale: "0",
        x: "50%",
        y: "50%"
    }, {
        scale: "1",
        x: "0%",
        y: "0%",
        ease: Back.easeOut.config(1.1)
    }).to(".intro-about", 0, {
        boxSizing: "border-box"
    }, "+=2.5");