$(function() {
	var mySwiper1 = new Swiper('.swiper-container1',{
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		pagination :'.swiper-pagination',
		autoplay:5000,
		loop:true
	});
	var mySwiper2 = new Swiper('.swiper-container2',{
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		pagination :'.swiper-pagination',
		autoplay:5000,
		loop:true
	});
	$(".card-link").find("img").click(function(){
		$(this).next(".img-desc").css('bottom','0');
	})
});
