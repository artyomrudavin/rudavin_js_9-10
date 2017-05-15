$(function() {

	$('.dropdown').hover(
		function(){
			$(this).children('.submenu')
			.slideDown(200)
			.animate({
				backgroundColor: 'rgb(225, 75, 75)'
			}, 200);
		},
		function(){
			$(this).children('.submenu')
			.slideUp(200)
			.animate({
				backgroundColor: 'rgb(255, 100, 100)'
			}, 200);
		}
		);

	$('.menu a').on('click', function(e) {
		e.preventDefault()
	});

	$('.menu a')
	.mousedown(function() {
		$(this).css('color', 'rgb(255, 255, 50)');
	})
	.mouseup(function() {
		$(this).css('color', 'rgb(0, 0, 0)');
	});

});
