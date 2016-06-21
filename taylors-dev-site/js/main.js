// Smooth Scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
// });

// Sticky Nav
// $(document).ready(function() {
	// var stickyNavTop = $('.mk-wrapper').offset().top;
 
	// 	var stickyNav = function(){
	// 		var scrollTop = $(window).scrollTop();
      
	// 		if (scrollTop > stickyNavTop) { 
 //    			$('.mk-wrapper').addClass('sticky');
	// 		} else {
 //    			$('.mk-wrapper').removeClass('sticky'); 
	// 		}
	// 	};
 
	// stickyNav();
 
	// $(window).scroll(function() {
 //    	stickyNav();
	// });

	// Even when the window is resized, run this code.
  	$(window).resize(function(){
    
    // Variables
    var windowHeight = $(window).height();
    
    // Find the value of 90% of the viewport height
    var ninetypercent = .9 * windowHeight;
    
    // When the document is scrolled ninety percent, toggle the classes
    // Does not work in iOS 7 or below
    // Hasn't been tested in iOS 8
    $(document).scroll(function(){
      
      // Store the document scroll function in a variable
      var y = $(this).scrollTop();
      
      // If the document is scrolled 90%
      if( y > ninetypercent) {
        
        // Add the "sticky" class
        $('.mk-wrapper').addClass('sticky');
      } else {
        // Else remove it.
        $('.mk-wrapper').removeClass('sticky');
      }
    });

    // var z = $('#contact-section').scrollTop();

    // if {z > 1 - ninetypercent } {
    // 	$('.mk-wrapper').removeClass('sticky');
    // }

  // Call it on resize.
  }).resize();


});