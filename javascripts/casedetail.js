$(function(){
	//Tab切换，点击
	var tabSwitch = {};
	tabSwitch.clickSwitch = function(navClick, spanMove, conClick){
		$(navClick).click(function(){
			var index = $(this).index() - 1;//获取索引值
			// 点击li滑块span滑向该li
			$(spanMove).stop(true, true).animate({
				"top" : (index * 56) +"px"
				},500);
			// li对应的内容块添加change类名
			// $(conClick).eq(index).addClass("change").siblings().removeClass("change");
		});
	}
	tabSwitch.clickSwitch(".casedetail_nav li", ".casedetail_tit span");
})