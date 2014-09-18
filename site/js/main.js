$("#menuBar>.nav").click(
	function(evt) {
		// ### 1. change menu
		var selector = $(this).attr("href");
		$("#menuBar>a").removeClass("active");
		$(this).addClass("active");
		// ### 2. change content
		// content collapse
		$("#content").addClass("hide");
		// article disapear
		$("article").removeClass("active");
		// call draw on selected article in 500ms
		setTimeout(draw,500,selector);
		// cancel event (click on 'a')
		evt.preventDefault();
	});

function draw(selector) {
	// add display:none to every article (remove box)
	$("article").addClass("hide");
	// remove for selected article
	$(selector).removeClass("hide");
	// content expand
	$("#content").removeClass("hide");
	// need a timer (removing display:none prevents animation from playing)
	setTimeout(function() {
		// selected article appear
		$(selector).addClass("active");
	},100);
}
/*
// onDomReady :
$(function() {
	// show home
	draw("#home");
});
*/