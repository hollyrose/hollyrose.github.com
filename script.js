$(document).ready(function() {
	$('#birds').on('click', function (event) {
		event.preventDefault();
		$('#birdList').toggle("slow");
	});
});