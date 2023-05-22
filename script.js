$(window).scroll(function() {
    if ($(this).scrollTop()> 30) {
        $('.name').fadeOut();
     }
    else {
      $('.name').fadeIn();
     }
 });

 $(window).on( "load", function() {
    $('.symbol').hide();
  } );

 $(window).scroll(function() {
    if ($(this).scrollTop()> 20) {
        $('.symbol').fadeIn();
     }
    else {
      $('.symbol').fadeOut();
     }
 });