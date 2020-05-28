$(document).ready(function () {


    //Minus and Plus Counter
    $('.cart-sec .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.cart-sec  .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    //Edit Btn
    $('#editBtn').click(function(){
        $(this).siblings('input').removeAttr('disabled');
    })
    //image upload
    function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
    }
$("#imageUpload").change(function() {
    readURL(this);
});
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
