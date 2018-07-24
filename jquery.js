$(document).ready(function(){

	$(".items p").mouseenter(function(){

		$(this).css("background-color","red")
	});
	$(".items p").mouseleave(function(){

		$(this).css("background-color","green")
	});
	
})