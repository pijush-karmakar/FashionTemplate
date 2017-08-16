

(function ($) {
	"use strict";

    jQuery(document).ready(function($){

/// -----------------  OWL carousel Option for slider 01  -----------------  ///    

 $(".sliders").owlCarousel({

           items:1,
           loop:true,
           autoplay:5000,
           dots:false,
           nav:true,
           mouseDrag:false,
           touchDrag:false,
           animateOut: 'slideOutRight',
           animateIn: 'zoomIn',
           navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]       

  });   

/// -----------------  OWL carousel Option for slider 02  -----------------  /// 

 $(".product-promo").owlCarousel({

           items:1,
           loop:true,
           autoplay:4000,
           dots:true,
           nav:false,
           autoplay:3000

  }); 

/// -----------------  Off Canvus Menu  -----------------  ///    
$(".menu-trigger").on("click",function(){
  $(".off-canvus-menu,.off-canvus-overlay").addClass("active");
  return false;
});

$(".menu-close,.off-canvus-overlay").on("click",function(){
  $(".off-canvus-menu,.off-canvus-overlay").removeClass("active");
});


/// -----------------  Search  Form  -----------------  ///    

    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
/// -----------------  Masonary  Grid  -----------------  /// 

  $('.product-list').masonry();

/// -----------------  Animation  For Sliders Using Owl Carousel  -----------------  ///    

$(".owl-carousel").on("translated.owl.carousel", function(){
   $(".single-slide .para-1").addClass('animated slideInLeft').css('opacity','1');
   $(".single-slide .para-2").addClass('animated slideInRight').css('opacity','1');
   $(".single-slide .para-3").addClass('animated fadeInDown').css('opacity','1');
});

$(".owl-carousel").on("translate.owl.carousel", function(){
  $(".single-slide .para-1").removeClass('animated slideInLeft').css('opacity','0');
  $(".single-slide .para-2").removeClass('animated slideInRight').css('opacity','0');
  $(".single-slide .para-3").removeClass('animated fadeInDown').css('opacity','0');
});





    });


jQuery(window).load(function(){

        
});


}(jQuery)); 