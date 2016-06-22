
// Smooth Scroll - add this back in later
$(document).ready(function(){
  // $('a[href^="#"]').on('click',function (e) {
  //     e.preventDefault();

  //     var target = this.hash;
  //     var $target = $(target);

  //     $('html, body').stop().animate({
  //         'scrollTop': $target.offset().top
  //     }, 900, 'swing', function () {
  //         window.location.hash = target;
  //     });
  // });
// });



// Sticky Nav
	// Even when the window is resized, run this code.
  	// $(window).resize(function(){
    
    // Variables
    // var windowHeight = $(window).height();
    
    // Find the value of 90% of the viewport height
    // var ninetypercent = .9 * windowHeight;

    // $(document).scroll(function(){
      
      // Store the document scroll function in a variable
      //var y = $(this).scrollTop();
      
      // If the document is scrolled 90%
      // if( y > ninetypercent) {
        
        // Add the "sticky" class
        // $('.mk-wrapper').addClass('sticky');
      // } else {
        // Else remove it.
        // $('.mk-wrapper').removeClass('sticky');
      // }
    // });

  // Call it on resize.
  // }).resize();

// this is one responsive menu
  // $('.hamburger').on('click', function() {
    // $('.menu-container').slideToggle();
    // changed .menu to #main
    // $('.hero-content').css('top', '80%');
// });

// this is another responsive menu
  $('.hamburger').on('click', function() {
    $('.menu-list').toggleClass('mobile-menu');
    return false;
  })

});