$(function(){
	$('.thanks-block .popup__closedbutt_oth').click(function() {
		$('.thanks-block').fadeOut();
	});

	$("#phone").mask("+7(999) 999-9999");
});