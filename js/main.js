$(function () {
	sliders();
	mobileEvents();
});

function sliders(){

	var reviewsSlider = $(".js-q-reviews-slider");

	reviewsSlider.slick({
		infinite: true,
		slidesToShow: 1,
		speed: 800,
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		prevArrow: "<span class=\"slick-arrow slick-prev\"></span>",
		nextArrow: "<span class=\"slick-arrow slick-next\"></span>",
		// responsive: [
		// 	{
		// 		breakpoint: 1161,
		// 		settings: {
		// 			slidesToShow: 3
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			slidesToShow: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 767,
		// 		settings: {
		// 			slidesToShow: 1
		// 		}
		// 	}
		// ]
	});
}

function mobileEvents() {
	$(".js-toggle-mobile-menu").click(function () {
		$("body").toggleClass("_opened-menu");
	});

	$(document).click(function (event) {
		$target = $(event.target);
		if (!$target.closest(".q-header-menu").length && !$target.hasClass("js-toggle-mobile-menu")) {
			$("body").removeClass("_opened-menu");
		}
	});

}