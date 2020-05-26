$(document).ready(function () {
    //if logged in
    $("#logIn").click(function(){
    $("header").addClass("logged-in");

    });
    //mobile-menu
    $('.btnNav').click(function(e){
        $(this).siblings('ul').slideToggle();
        e.preventDefault();
    })
    $('.voucher-carousel').owlCarousel({
        autoplay:true,
        loop: true,
    rtl:true,
    loop:true,
    margin:15,
    nav:true,
    navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
    $(this).scrollTop(0);
        /*Smooth Scroll*/
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});
