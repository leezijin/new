$(function() {
// 服务流程图
	function workShow(dot, dotSon, heightNum, marginNum){
		// 鼠标移动到流程球上高度和外边距颜色变化
		$(dot).stop(true).on("mouseover", function(){
			$(this).animate({
				"height" : heightNum,
				"marginTop" : marginNum,
				"background-color" : "#d51737"
			},250)
			$(dotSon).slideDown(250);
		})
		// 鼠标从流程球上移开高度和外边距颜色变化
		$(dot).on("mouseleave", function(){
			$(this).stop(true).animate({
				"height" : "128px",
				"marginTop" : "0px",
				"background-color" : "#ccc",
				"opacity" : "0.8"
			},500)
			$(dotSon).stop(true).slideUp(500);
		})	
	}
	// 各个流程球调用
	workShow(".dotone",".dotone .hide_ypk","260px","-40px");
	workShow(".dottwo_ypk",".dottwo_ypk .hide_ypk","300px","-120px");
	workShow(".dotthree_ypk",".dotthree_ypk .hide_ypk","390px","-40px");
	workShow(".dotfour_ypk",".dotfour_ypk .hide_ypk","280px","-120px");
	workShow(".dotfive_ypk",".dotfive_ypk .hide_ypk","300px","-40px");
	workShow(".dotsix_ypk",".dotsix_ypk .hide_ypk","280px","-120px");
	workShow(".dotseven_ypk",".dotseven_ypk .hide_ypk","260px","-40px");
	workShow(".doteight_ypk",".doteight_ypk .hide_ypk","280px","-120px");


	//服务项目背景图移动
	/* 
	* @Author: anchen
	* @Date:   2015-10-23 09:34:09
	* @Last Modified by:   余培焜
	* @Last Modified time: 2015-10-23 09:34:09
	*/
	$(function  () {
		$(".index_column dl dt").hover(function (){
			$(this).children("a").stop(true).animate({
				"background-position-x": "15px"
			}, 600);
		}, function() {
			$(this).children("a").stop(true).animate({
				"background-position-x": "0px"
			}, 600);
		})
	})
})