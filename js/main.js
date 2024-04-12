window.addEventListener('load', function() {
    var aloitaLink = document.querySelector('.aloitanappi');
    aloitaLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the link
        var targetId = this.getAttribute('href'); // Get the target ID from the href attribute
        var targetElement = document.querySelector(targetId); // Find the target element
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target element
    });
}); 






  var videoPlayer = document.getElementById('videoPlayer');
  var videoPreview = document.getElementById('videoPreview');
  var videoPlayed = false;

  function playVideo() {
    if (!videoPlayed) {
      videoPlayer.style.display = 'block';
      videoPlayer.play();
      videoPreview.style.display = 'none';
      videoPlayed = true;

      // Pause the video when it ends
      videoPlayer.onended = function() {
        videoPlayer.pause();
        videoPlayer.style.display = 'none'; // Hide the video element
      };
    }
  }

  // Function to check if the user is on a mobile device
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }



  // For devices that don't support scrolling events, such as desktops and mobiles (via click)
  window.addEventListener('click', function() {

    playVideo();
  });




$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


    $('.active-exprience-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true
    })
    $('.next-trigger').click(function() {
        $(".active-exprience-carousel").trigger('next.owl.carousel');
    })
        // Go to the previous item
    $('.prev-trigger').click(function() {
        $(".active-exprience-carousel").trigger('prev.owl.carousel');
    });
    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
 });
