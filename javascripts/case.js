$(function(){
	//Tab切换，点击
	var tabSwitch = {};
	tabSwitch.clickSwitch = function(navClick, spanMove, conClick){
		$(navClick).click(function(){
		var navIndex = $(this).index() - 1;//获取索引值
		// 点击li滑块span滑向该li
		$(spanMove).stop(true, true).animate({
			"top" : (navIndex * 56) +"px"
			}, 500);
		// li对应的内容块添加change类名
		$(conClick).eq(navIndex).addClass("change").siblings().removeClass("change");
		});
	}
	tabSwitch.clickSwitch(".case_nav li", ".case_tit span",".case_list .item");
	//跳转页面
	var casepagesIndex = $(".pagenum").index();
	$(".case_pages .upages").on("click", function(){
		casepagesIndex++;
		if (casepagesIndex < 4) {
			$(".case_pages a").eq(casepagesIndex).addClass('changeone').siblings('a').removeClass('changeone');
		} else if (casepagesIndex >= 4	) {
			casepagesIndex = 1;
			$(".case_pages a").eq(casepagesIndex).addClass('changeone').siblings('a').removeClass('changeone');
		};	
	})
})