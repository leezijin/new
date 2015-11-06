/* 作者：李自进
 * 首页banner动画效果
 * @function endFun函数为当前视图的动画效果
 * @function startFun函数为当前视图动画效果执行前的效果
 * ---
 * @param i为当前分页数
 * @param c为分页总数
 * @param s相当与Jquery(".indexBanner")
 * @param t相当于titCell
 * @param m相当于mainCell
 * @param previ 为前一个分页值
 * @param nexti 为下一个分页值
 * ---
 * @animate startFun中的previ的动画效果为切换到当前分页的前一个视图隐藏动画
 * @animate startFun中的nexti的动画效果为切换到当前分页的下一个视图隐藏动画
 * ---
 * @css startFun中的css为当前视图图片的初始位置
 */

$(function() {
    jQuery(".indexBanner").slide({
        mainCell: ".bd ul",
        titCell: ".hd ul",
        autoPage: "<li></li>",
        autoPlay: true,
        effect: "fold",
        interTime: 5000,
        delayTime: 1500,
        easing: "easeInSine",
        mouseOverStop: false,
        startFun: function(i, c, s, t, m) {
            var previ = (i + 1 <= c && i + 1 > 1) ? i - 1 : c - 1,
                nexti = (i + 1 < c) ? i + 1 : 0,
                oLi = m.find("li");
            if (i === 0) {
                oLi.eq(nexti).find(".picone").stop(true, true).animate({
                    "marginLeft": "-705px",
                    "top": "-50px",
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "marginLeft": "150px",
                    "opacity": 0
                }, 800);

                oLi.eq(previ).find(".picone").stop(true, true).animate({
                    "marginLeft": "-685px",
                    "top": "80px",
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "marginLeft": "75px",
                    "opacity": 0
                }, 800);

                oLi.eq(i).find(".picone").css({
                    "marginLeft": "-755px",
                    "top": "-50px",
                    "opacity": 0
                }).next(".pictwo").css({
                    "top": "-50px",
                    "opacity": 0
                });
            }

            if (i == 1) {
                oLi.eq(previ).find(".picone").stop(true, true).animate({
                    "marginLeft": "-585px",
                    "top": "-50px",
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "marginLeft": "200px",
                    "top": "-20px",
                    "opacity": 0
                }, 800);

                oLi.eq(nexti).find(".picone").stop(true, true).animate({
                    "marginLeft": "-585px",
                    "top" : "150px",
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "marginLeft": "200px",
                    "top": "-20px",
                    "opacity": 0
                }, 800);

                oLi.eq(i).find(".picone").css({
                    "opacity": 0
                }).next(".pictwo").css({
                    "marginLeft": "200px",
                    "top" : "-100px",
                    "opacity": 0
                });
            }

            if (i == 2) {
                oLi.eq(previ).find(".picone").stop(true, true).animate({
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "marginLeft": "200px",
                    "top" : "-100px",
                    "opacity": 0
                }, 800);

                oLi.eq(nexti).find(".picone").stop(true, true).animate({
                    "bottom": "-470px",
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "top": "-50px",
                    "opacity": 0
                }, 800);

                oLi.eq(i).find(".picone").css({
                    "marginLeft": "-600px",
                    "opacity": 0
                }).next(".pictwo").css({
                    "marginLeft": "200px",
                    "top": "50px",
                    "opacity": 0
                });
            }

            if (i == 3) {
                oLi.eq(previ).find(".picone").stop(true, true).animate({
                    "marginLeft": "-755px",
                    "bottom": "50px",
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "marginLeft": "200px",
                    "top": "120px",
                    "opacity": 0
                }, 800);

                oLi.eq(nexti).find(".picone").stop(true, true).animate({
                    "marginLeft": "-700px",
                    "bottom": "50px",
                    "opacity": 0
                }, 600)
                .next(".pictwo").delay(500).animate({
                    "marginLeft": "150px",
                    "opacity": 0
                }, 800);

                oLi.eq(i).find(".picone").css({
                    "bottom": "50px",
                    "marginLeft": "-705px",
                    "opacity": 0
                }).next(".pictwo").css({
                    "top": 0,
                    "opacity": 0
                });
            }
        },
        endFun: function(i, c, s, t, m) {
            var oLi = m.find("li");
            if (i === 0) {
                oLi.eq(0).find(".picone").stop(true, true).animate({
                    "marginLeft": "-585px",
                    "top": "-50px",
                    "opacity": 1
                }, 800);
                oLi.eq(0).find(".pictwo").stop(true, true).animate({
                    "top": "140px",
                    "opacity": 1
                }, 800);
            }

            if (i === 1) {
                oLi.eq(i).find(".picone").stop(true, true).animate({
                    "marginLeft": "-505px",
                    "top": "130px",
                    "opacity": 1
                }, 800);
                oLi.eq(i).find(".pictwo").stop(true, true).animate({
                    "marginLeft": "75px",
                    "top": "-30px",
                    "opacity": 1
                }, 800);
            }

            if (i === 2) {
                oLi.eq(i).find(".picone").stop(true, true).animate({
                    "marginLeft": "-537px",
                    "opacity": 1
                }, 800);
                oLi.eq(i).find(".pictwo").stop(true, true).animate({
                    "marginLeft": "-53px",
                    "top": "8px",
                    "opacity": 1
                }, 800);
            }

            if (i === 3) {
                oLi.eq(i).find(".picone").stop(true, true).animate({
                    "top": "0px",
                    "marginLeft": "-585px",
                    "opacity": 1
                }, 800);
                oLi.eq(i).find(".pictwo").stop(true, true).animate({
                    "top": "150px",
                    "opacity": 1
                }, 800);
            }
        }
    });    
})
