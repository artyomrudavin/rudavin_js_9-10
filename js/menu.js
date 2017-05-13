$(function() {

	$('.dropdown').hover(
		function(){
			$(this).children('.submenu').slideDown(200);
		},
		function(){
			$(this).children('.submenu').slideUp(200);
		}
		);
	
});


// $(function() {

// 	var $links = $('.menu a');

// 	$links.on('click', function(e) {
// 		var $submenu = $(this).siblings('.submenu');
// 		e.preventDefault();
// 		console.log($submenu);
//     // $submenu.show(); // тоже самое что и: $submenu.css('display', 'block')
//     // $submenu.toggle(); // display: none -> display: block
//     $submenu.slideToggle();


//   })
// });

