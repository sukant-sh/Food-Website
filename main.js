$(document).ready(function ($) {
    "use strict";

    var book_table = new Swiper(".book-table-img-slider", {
        sliderPerView : 1,
        spaceBetween : 20, 
        loop : true ,
        autoplay : {
            delay : 3000,
            disableOnInteraction : false,
        },
        speed : 2000,
        effect : "coverflow",
        coverflowEffect : {
            rotate : 3,
            stretch : 2,
            dept : 100, 
            modifier : 5,
            sliderShadow : false,
        },
        loopAdditionSlides : true,
        navigation : {
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
        },
        pagination : {
            el : ".swiper-pagination", 
            clickable : true,
        },
    });


    var team_slider = new Swiper(".team-slider", {
        sliderPerView : 3,
        spaceBetween : 30, 
        loop : true ,
        autoplay : {
            delay : 3000,
            disableOnInteraction : false,
        },
        speed : 2000,
       
        navigation : {
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
        },
        pagination : {
            el : ".swiper-pagination", 
            clickable : true,
        },
        breakpoints : {
            0:{
                sliderPerView : 1.2, 
            },
            768 : {
                sliderPerView : 2,
            },
            992:{
                sliderPerView: 3,
            },
            1200 : {
                sliderPerView : 3,
            },
        },
    });


    jQuery(".menu-toggle").click(function(){
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });



    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger : "body",
        start : "30px top",
        end : "bottom bottom",

        onEnter : () => myFunction(),
        onLeaveBack : () => myFunction(),
    });

    function myFunction(){
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new parallax(scene);

});

jQuery(window).on('load', function(){
    $('body').removeClass('body-fixed');


    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;


    for (let i = 0; i< targets.length; i++){
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    gsap.set(".filter-active", {
        x:targets[0].offsetLeft,
        width : targets[0].offsetWidth
    });
    
    function moveBar(){
        if(this.index != activeTab){
            if(animation && animation.isActive()){
                animation.progress(1);
            }

            animation = gsap.timeline({
                defaults : {
                        duration : 0.4
                    }
                });
                old = activeTab;
                activeTab = this.index;
                animation.to(".filter-active", {
                    x : targets[activeTab].offsetLeft,
                    width : targets[activeTab].offsetWidth
                });

                animation.to(targets[old], {
                    color : "#0d0d25",
                    ease : "none"
                }, 0);
                animation.to(targets[activeTab], {
                    color : "#fff",
                    ease : "none"
                }, 0);

            }
        }

});