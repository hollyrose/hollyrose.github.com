$(document).ready(function() {
	$('#birds').on('click', function (event) {
		event.preventDefault();
		$('#birdList').toggle("slow");
	});
		$('#dogs').on('click', function (event) {
		event.preventDefault();
		$('#doggies').toggle("slow");
	});
});