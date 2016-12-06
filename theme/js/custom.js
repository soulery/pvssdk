$(document).ready(function(){
	$(".expli").click(function(){
	var ul = $(this).siblings("ul");
	if ( ul.css('display') == 'none' ){
		$(this).children('.fa').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
		ul.show(300);
	}
	else{
		$(this).children('.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
		ul.hide(300);
	}
	});
	
	$(".expcli").click(function(){
	var ul = $(this).parent().next();
	if ( ul.css('display') == 'none' ){
		$(this).children('.fa').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
		ul.show(300);
	}
	else{	
		$(this).children('.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
		ul.hide(300);
	}
	})
});