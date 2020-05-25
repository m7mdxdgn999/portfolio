
$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    },1000);
   
    e.preventDefault();
   });

   //parallax
   $(window).scroll (function () {
    var wscroll=$(this).scrollTop ();
    
    $('.jumbotron img').css ({
        'transform' : 'translate(0px,'+wscroll+'%S)'

    });
    
    
   }); 