(function($) {
	$(function() {
		$(".parallax").parallax();
	}); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$('.tabs').tabs();
	swipeable : true
	responsiveThreshold : 1920
	if ($('#tabs_swipe').length) {
		$('#tabs_swipe').tabs({ 'swipeable': true });
	  }
  });
        