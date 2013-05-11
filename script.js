$(document).ready(function() {
	$('#birds').on('click', function (event) {
		event.stopPropagation();
		$('#birdList').toggle();
	});
		$('#dogs').on('click', function (event) {
		event.stopPropagation();
		$('#doggies').toggle();
	});
});