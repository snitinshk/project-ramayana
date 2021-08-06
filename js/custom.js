$(document).ready(function() {
  $("html, .gallery-list, .event-list").niceScroll();
$('.venobox a, .videogal').venobox(); 

$(".toggle-nav").click(function(){
	$(".side-overlay").fadeIn();	
	$(".right-panel-design").animate({"right":"0"});
	$("body").css({"overflow":"hidden"});
});
$(".close-btn").click(function(){
	$(".side-overlay").fadeOut();	
	$(".right-panel-design").animate({"right":"-300px"});
	$("body").css({"overflow":"visible"});
});

});


$(window).scroll(function(){
	var vid = $("#bgvid");
      if ($(this).scrollTop() > 300) {
          vid.get(0).pause();
      } else {
           vid.get(0).play();
      }
  });

$(function() {
  $('a.dwn-arrow[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 1000);
        return false;
      }
    }
  });
});
  










