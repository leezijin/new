$(function(){
	// $(".img img").css({
	// 	"filter": "alpha(opacity = 100)"
	// });
	// 第一部分
	// 图片
	$(".brand .woman").delay(500).animate({
		"right": "370px",
		"opacity": "1"
	}, 1000);
	$(".brand .tv").delay(500).animate({
		"opacity": "1"
	}, 700);

	// 文字  fixed
	$(".brand .word_box .fixed").delay(500).animate({
		"marginLeft": "0",
		"opacity": "1"
	}, 700);
	$(".brand .word_box .fixed b").delay(500).animate({
		"-webkit-opacity": "1",
		"opacity": "1"
	}, 700);
	$(".brand .word_box .fixed em").delay(500).animate({
		"-webkit-opacity": "1",
		"opacity": "1"
	}, 700);
	$(".brand .word_box .fixed span").delay(500).animate({
		"-webkit-opacity": "1",
		"opacity": "1"
	}, 700);

	// 文字p
	$(".brand .word_box p").delay(1000).animate({
		"marginLeft": "0",
		"opacity": "1"
	}, 700);

	$(".brand .more").delay(1500).animate({
		"opacity": "1",
		"marginLeft": "0"
	}, 700);
	$(window).on("scroll", function(){
		var scrollVal = $(window).scrollTop();


		// 第二部分
		if(scrollVal >= 525) {

			//大图
			$(".portal .tv").animate({
				"top": "97px",
				"opacity": "1"
			}, 1000, "easeOutBounce");

			//文字
			$(".portal .word_box_second").delay(100).animate({
				"height": "227px"
			}, 1000, "easeInOutQuart");

			// 旋转按钮
			$("#wsportal .go_next").addClass("up");
		}


		// 第三部分
		if (scrollVal >= 1125) {

			//大图
			$(".market .img img").animate({
				"width": "894px",
				"height": "471px",
				"opacity": "1"
			}, 700, "easeInBounce");

			// 文字
			// $(".market .word_box").delay(500).animate({
			// 	"width": "370px",
			// 	"height": "250px",
			// 	"opacity": "1"
			// }, 1900, "easeOutQuint");
			$(".market .word_box").delay(500).fadeIn(1900);

			// 旋转按钮
			$("#wsmarket .go_next").addClass("up");
		};


		// 第四部分
		if (scrollVal >= 1825) {

			// 大图
			$(".ec .img .ec_room").show(500);

			//气球
			$(".ec .img .balloon").delay(600).animate({
				"opacity": "1"
			}, 700);

			//文字
			// $(".ec .word_box_fourth").delay(500).animate({
			// 	"height": "227px"
			// }, 1000, "easeInOutQuart");
			$(".ec .word_box_fourth").delay(500).show(1000);

			// 旋转按钮
			$("#wsec .go_next").addClass("up");
		}


		// 第五部分
		if(scrollVal >= 2338) {
			// 给最后一个图片添加类名
			// $("#wsinfopor").addClass("end");
			$(".buildCon .infopor .img").animate({
				"left": "600px",
				"top": "65px",			
				"opacity": "1"
			}, 1200, "easeInOutQuart");
			// 文字
			// $(".infopor .word_box").delay(1000).animate({
			// 	"height": "300px"
			// }, 1000);
			$(".infopor .word_box").delay(500).show(1000);
			// 旋转按钮
			$("#wsinfopor .go_next").addClass("up");
		};
	})

	// 点击按钮
	$(".portal .go_next").click(function() {
		$('body, html').animate({
			"scrollTop": "0"
		}, 1000);
	})
	$(".market .go_next").click(function() {
		$('body, html').animate({
			"scrollTop": "585"
		}, 1000);
	})
	$(".ec .go_next").click(function() {
		$('body, html').animate({
			"scrollTop": "1225"
		}, 1000);
	})
	$(".infopor .go_next").click(function() {
		$('body, html').animate({
			"scrollTop": "1825"
		}, 1000);
	})

})