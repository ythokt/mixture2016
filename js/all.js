//這是標題的事件
$(document).ready(function(){
	$('.button1').click(function(event){
		$('.text').fadeToggle(1400);
	});
	$('h3').click(function(event){
		$('.mur').toggleClass('active');
	});
	$('.button2').click(function(event) {
		$('.box1').slideUp(1000).slideDown(1000).fadeIn(1000).fadeOut(1000).slideUp(1000).slideDown(1000).fadeIn(1000);
	});
}); 