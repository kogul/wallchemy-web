$(document).ready(setHeights);
$(document).ready(rightMost);
$(window).resize(setHeights);
$(window).resize(rightMost);

function setHeights(){
	var pinkInner = $(".pink-border");
	var pinkOuter = $(".pink-border-outer");
	for (var i = pinkInner.length - 1; i >= 0; i--) {
		$(pinkOuter[i]).height(($(pinkInner[i]).height()+50));
		$(pinkOuter[i]).width(($(pinkInner[i]).width()+50));
	}
}
function rightMost(){
	var bubblePosBox = $("#right-most");
	var bubble = $("#bubble");
	console.log(bubblePosBox);
	bubble.position().right = bubblePosBox.position();
}
$(window).on('load',function(){
  $('.loader').fadeOut();
  AOS.init();
});
