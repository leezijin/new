/*
 * margin值 设置li margintop值                
 * 作者 李自进
 *
 * 获取对象，匹配标签样式 
 *
 */
$(function() {
	// 改变头部字体颜色
	$(".filters li").click(function() {
		var _this = $(this).index();
		$(this).css({
			"color" : "#d51737"
		}).siblings().css({
			"color" : "#000"
		});
	});
	document.getElementsByClassName = function(className, tag, elm) {   
		var testClass = new RegExp("(^|\s)" + className + "(\s|$)");   
		var tag = tag || "*";   
		var elm = elm || document;   
		var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);   
		var returnElements = [];   
		var current;   
		var length = elements.length; 

		for (var i=0; i < length; i++){   
	 			current = elements[i];   
	  		if (testClass.test(current.className)){   
	      		returnElements.push(current);   
	      	}   
	  	}   
	  	return returnElements;   
	}
			   
	var margin = 36;   // 元素margintop值
	var boxes = document.getElementsByClassName('img_show');
	var con = document.getElementsByClassName('containers');
	var boxWidth = boxes[0].offsetWidth + margin;

	// 内容元素 布局
	function show () {
		var columnHeight = [];
		var bodyWidth = document.body.offsetWidth;
		var n = parseInt(bodyWidth/boxWidth);  
		var columnNum = n == 0?1:n;   //  可显示的内容块
		var bodyLeft = bodyWidth >= boxWidth?bodyWidth - columnNum * boxWidth:0; //body left值

	    con[0].style.left = parseInt(bodyLeft/2) - margin/2 + 'px';    // 内容块的left等于 body/2 -自定义margin值 /2  + 单位
		for (var i = 0,l = boxes.length; i < l ; i++) {
			if (i < columnNum) { 
				columnHeight[i] = boxes[i].offsetHeight + margin;
				boxes[i].style.top = 0;
				boxes[i].style.left = i * boxWidth + margin + 'px';
			} else {
				var innsertColumn = min(columnHeight),
				    imgHeight = boxes[i].offsetHeight + margin;  //内容块高度设置

				boxes[i].style.top = columnHeight[innsertColumn] + 'px';
				boxes[i].style.left = innsertColumn * boxWidth + margin + 'px';
				columnHeight[innsertColumn] += imgHeight; 
			};

		};
	};
	//  在内容页面最小的显示快熟，初始值  1,  也就是内容显示区域最低显示1个内容元素 最多根据内容显示区域的宽度自判断 
	function  min(heightAarry) {
		var minColumn = 0;
		var minHeight = heightAarry[minColumn];
		for (var i = 1,len=heightAarry.length; i < len; i++) { 
			var temp = heightAarry[i];
			if (temp < minHeight) {
				minColumn = i;
				minHeight = temp;
			};
		};
		return minColumn;
	}
	window.onload = function(){show();};
	window.onresize = function(){show();};
})