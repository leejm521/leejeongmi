$(document).ready(function(){
    let i = 0

    $(".ticket>div").hover(function(){
        $(".cursor").toggle();
    });

    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX; // document의 x좌표값
        let mouseY = e.pageY; // document의 y좌표값
    
        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    $(".side_menu>li").hover(function(){
        $(".cursor").toggle();
    });

    $(".ticket>div").click(function(){
        $(".ticket_left").stop().animate({"left":"-100%", "rotate":"-5deg"}, 2000);
        $(".ticket_right").stop().animate({"right":"-100%", "rotate":"20deg"}, 2000);
        $(".photo").animate({"left":"5%", "opacity":"1"}, 1500);
        $(".deco").animate({"right":"53%", "opacity":"1"}, 1500);
        $(".box").animate({"opacity":"1"}, 500);
        $(".profile").stop().show();
        $(".scroll").stop().fadeIn();
        $(".menu_title").removeClass("menu_on");
        $(".bar").removeClass("bar_on");
        $(".ball").removeClass("ball_on");
        $(".active").addClass("menu_on");
        $(".active2").addClass("bar_on");
        $(".active3").addClass("ball_on");
    });

    $(".menu_profile").click(function(){
        $(".ticket_left").stop().animate({"left":"-100%", "rotate":"-5deg"}, 2000);
        $(".ticket_right").stop().animate({"right":"-100%", "rotate":"20deg"}, 2000);
        $(".photo").animate({"left":"5%", "opacity":"1"}, 1500);
        $(".deco").animate({"right":"53%", "opacity":"1"}, 1500);
        $(".box").animate({"opacity":"1"}, 500);
        $(".profile").stop().show();
        $(".scroll").stop().fadeIn();
        $(".menu_title").removeClass("menu_on");
    });
    $(".menu_main").click(function(){
        $(".ticket_left").stop().animate({"left":"0%", "rotate":"0deg"}, 1500);
        $(".ticket_right").stop().animate({"right":"0%", "rotate":"0deg"}, 1500);
        $(".photo").animate({"left":"-10%", "opacity":"0"}, 1500);
        $(".deco").animate({"right":"0%", "opacity":"0"}, 1500);
        $(".box").animate({"opacity":"0"}, 1500);
        $(".scroll").stop().fadeOut();
        $(".menu_title").removeClass("menu_on");
    });
    
    $(".side_menu>li").click(function(){
        let ii = $(this).index(); 

        $(".bar").removeClass("bar_on");
        $(".bar").eq(ii).addClass("bar_on");
        $(".ball").removeClass("ball_on");
        $(".ball").eq(ii).addClass("ball_on");
        $(".menu_title").removeClass("menu_on");
        $(".menu_title").eq(ii).addClass("menu_on");
    });

    $(".report_acco>li").hover(function(){
        $(".cursor").toggle();
    });
    $(".report_acco>li").click(function(){
        let acc = $(this).index();
        
        $(".report_acco>li").removeClass("acco_on");
        $(".report_acco>li").eq(acc).addClass("acco_on");

        
    });

    $(".btn_1>li").click(function(){
        let choice = $(this).index();

        $(".site_box>div").stop().fadeOut();
        $(".site_box>div").eq(choice).stop().fadeIn();
        $(".btn_1>li").removeClass("btn_on");
        $(".btn_1>li").eq(choice).addClass("btn_on");
        $(".site_txt1>div").removeClass("txt_on");
        $(".site_txt1>div").eq(choice).addClass("txt_on");
    });

    $(".btn_2>li").click(function(){
        let choice = $(this).index();

        $(".site_box2>div").stop().fadeOut();
        $(".site_box2>div").eq(choice).stop().fadeIn();
        $(".btn_2>li").removeClass("btn_on");
        $(".btn_2>li").eq(choice).addClass("btn_on");
        $(".site_txt2>div").removeClass("txt_on");
        $(".site_txt2>div").eq(choice).addClass("txt_on");
    });
    $(".btn_3>li").click(function(){
        let choice = $(this).index();

        $(".site_box3>div").stop().fadeOut();
        $(".site_box3>div").eq(choice).stop().fadeIn();
        $(".btn_3>li").removeClass("btn_on");
        $(".btn_3>li").eq(choice).addClass("btn_on");
        $(".site_txt3>div").removeClass("txt_on");
        $(".site_txt3>div").eq(choice).addClass("txt_on");
    });

    $(".gr_btn>li").hover(function(){
        $(".cursor").toggle();
    });
    $(".gr_btn>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn>li").removeClass("bn_on");
        $(".gr_bn>li").eq(btn).addClass("bn_on");
        $(".gr_btn>li").removeClass("cover");
        $(".gr_btn>li").eq(btn).addClass("cover");
    });
    $(".gr_btn2>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn2>li").removeClass("bn_on");
        $(".gr_bn2>li").eq(btn).addClass("bn_on");
        $(".gr_btn2>li").removeClass("cover");
        $(".gr_btn2>li").eq(btn).addClass("cover");
    });
    $(".gr_btn3>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn3>li").removeClass("bn_on");
        $(".gr_bn3>li").eq(btn).addClass("bn_on");
        $(".gr_btn3>li").removeClass("cover");
        $(".gr_btn3>li").eq(btn).addClass("cover");
    });
    $(".gr_btn4>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn4>li").removeClass("bn_on");
        $(".gr_bn4>li").eq(btn).addClass("bn_on");
        $(".gr_btn4>li").removeClass("cover");
        $(".gr_btn4>li").eq(btn).addClass("cover");
    });
    $(".gr_btn5>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn5>li").removeClass("bn_on");
        $(".gr_bn5>li").eq(btn).addClass("bn_on");
        $(".gr_btn5>li").removeClass("cover");
        $(".gr_btn5>li").eq(btn).addClass("cover");
    });
    $(".gr_btn6>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn6>li").removeClass("bn_on");
        $(".gr_bn6>li").eq(btn).addClass("bn_on");
        $(".gr_btn6>li").removeClass("cover");
        $(".gr_btn6>li").eq(btn).addClass("cover");
    });
    $(".gr_btn7>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn7>li").removeClass("bn_on");
        $(".gr_bn7>li").eq(btn).addClass("bn_on");
        $(".gr_btn7>li").removeClass("cover");
        $(".gr_btn7>li").eq(btn).addClass("cover");
    });
    $(".gr_btn8>li").click(function(){
        let btn = $(this).index();
        $(".gr_bn8>li").removeClass("bn_on");
        $(".gr_bn8>li").eq(btn).addClass("bn_on");
        $(".gr_btn8>li").removeClass("cover");
        $(".gr_btn8>li").eq(btn).addClass("cover");
    });

    $(".website").hover(function(){
        $(".cursor").toggle();
    });
    $(".contact_box").hover(function(){
        $(".cursor").toggle();
    });

    $(".contact_gr").click(function(){
        $(".contact_box").stop().toggleClass("cont_hide");
        $(".contact_behind").stop().toggleClass("cont_show");
        $(".contact_shadow").stop().toggleClass("cont_shadow");
    });

});