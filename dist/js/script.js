$(document).ready(function () {
	$(".slider-projects").slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					dots: false,
				},
			},
		],
	});
	$(".slider-fantasies").slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		autoplay: false,
		adaptiveHeight: false,
		centerMode: true,
		centerPadding: "0px",
	});
});
