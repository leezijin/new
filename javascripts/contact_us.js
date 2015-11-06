$(function() {
	$(".about_contact").mouseover(function() {
		$(".about_ac_left").addClass("fanL");
		$(".ac_cardright").addClass("fanR");
	})
	$(".ac_card").hover(function() {
		$(".ac_way img").addClass("ltr");
	}, function() {
		$(".ac_way img").removeClass("ltr");
	})
})