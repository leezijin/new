$(function() {

	// 导航栏
	var as = $(".nav a");
	$(".nav a").hover(function(){
		var startVal = $(".back").css("left");  //获取快的初始位置
		var addW = 0; //用来累加几个快的宽
		var index = $(this).index();  //获取当前索引值
		var propVal = parseInt($(this).css("marginLeft"));  //获取margin-left
		for (var i = 0; i < index; i++) {
			addW +=  $(".nav a")[i].offsetWidth + propVal; //累加几个快的宽
		};
		$(".back").stop(true).animate({
			"width":  $(".nav a")[index].offsetWidth + "px",  //宽度等于对于的快宽度
			"left": addW + "px" //left的值
		}, 700, "easeInOutBack");
	}, function() {
		$(".back").stop(true).animate({
			"width":  $(".nav a")[0].offsetWidth + "px",  //宽度等于对于的快宽度
			"left": "0px" //left的值
		}, 700, "easeInOutBack");
	});

	// 侧边栏
	// 悬浮窗口
	$(".case_contact").hover(function() {
		$(".case_contact").stop(true).animate({
			"right" : "5px"
		}, 400);
		$(".contact_bar .contact_ercode").css('height', '200px');
	}, function() {
		$(".case_contact").stop(true).animate({
			"right" : "-127px"
		}, 400);
		$(".contact_bar .contact_ercode").css('height', '53px');
	});
	// 返回顶部
	$(".contact_top").click(function() {
		$("html,body").animate({
			'scrollTop': '0px'
		}, 300)
	});
})