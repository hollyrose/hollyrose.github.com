$(document).ready(function() {
	/*
	$('#birds').on('click', function (event) {
		event.stopPropagation();
		$('#birdList').toggle();
	});
		$('#dogs').on('click', function (event) {
		event.stopPropagation();
		$('#doggies').toggle();
	});
	*/
	
	$('.sideButton').on('click', function(event) {
		//get the data-target
		var targetId = $(this).data('target')
		//.hide() everything with the class .mainbit
		$('.mainBit').hide()
		//.show() the element with the id that matches data-target
		$('#' + targetId).show()
		
		//ALTERNATIVE
		$('.mainBit').removeClass('active')
		$('#' + targetId).addClass('active')
	})
	
	
});