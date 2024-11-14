$(document).ready(function(){
    
    let main = $("#move_main").offset().top;
    let profile = $("#move_profile").offset().top+10;
    let skill = $("#move_skill").offset().top-100;
    let portfolio1 = $("#move_portfolio1").offset().top-100;
    let portfolio2 = $("#move_portfolio2").offset().top-100;
    let portfolio3 = $("#move_portfolio3").offset().top-100;
    let contact = $("#move_contact").offset().top-100;

    $(window).scroll(function(){
        let scrollTo = document.querySelector("#move_profile").scrollHeight;
        console.log(scrollTo);

        let scroll = $(this).scrollTop();
        $(".menu_title").removeClass("menu_on");
        $(".bar").removeClass("bar_on");
        $(".ball").removeClass("ball_on")
        if(scroll>=main && scroll<profile){
            $(".side_menu>li").eq(0).find(".menu_title").addClass("menu_on");
            $(".side_menu>li").eq(0).find(".bar").addClass("bar_on");
            $(".side_menu>li").eq(0).find(".ball").addClass("ball_on");

            $(".ticket_left").stop().animate({"left":"0%", "rotate":"0deg"}, 1500);
            $(".ticket_right").stop().animate({"right":"0%", "rotate":"0deg"}, 1500);
            $(".profile").stop().fadeOut();
            $(".scroll").stop().fadeOut();
        }
        else if(scroll>=profile && scroll<skill){
            $(".side_menu>li").eq(1).find(".menu_title").addClass("menu_on");
            $(".side_menu>li").eq(1).find(".bar").addClass("bar_on");
            $(".side_menu>li").eq(1).find(".ball").addClass("ball_on");

            $(".ticket_left").stop().animate({"left":"-100%", "rotate":"-5deg"}, 2000);
            $(".ticket_right").stop().animate({"right":"-100%", "rotate":"20deg"}, 2000);
            $(".profile").show();
            $(".photo").animate({"left":"5%", "opacity":"1"}, 1500);
            $(".deco").animate({"right":"53%", "opacity":"1"}, 1500);
            $(".box").animate({"opacity":"1"}, 500);
            $(".scroll").stop().fadeIn();
        }
        else if(scroll>=skill && scroll<portfolio1){
            $(".side_menu>li").eq(2).find(".menu_title").addClass("menu_on");
            $(".side_menu>li").eq(2).find(".bar").addClass("bar_on");
            $(".side_menu>li").eq(2).find(".ball").addClass("ball_on");
        }
        else if(scroll>=portfolio1 && scroll<portfolio2){
            $(".side_menu>li").eq(3).find(".menu_title").addClass("menu_on");
            $(".side_menu>li").eq(3).find(".bar").addClass("bar_on");
            $(".side_menu>li").eq(3).find(".ball").addClass("ball_on");
        }
        else if(scroll>=portfolio2 && scroll<portfolio3){
            $(".side_menu>li").eq(4).find(".menu_title").addClass("menu_on");
            $(".side_menu>li").eq(4).find(".bar").addClass("bar_on");
            $(".side_menu>li").eq(4).find(".ball").addClass("ball_on");
        }
        else if(scroll>=portfolio3 && scroll<contact){
            $(".side_menu>li").eq(5).find(".menu_title").addClass("menu_on");
            $(".side_menu>li").eq(5).find(".bar").addClass("bar_on");
            $(".side_menu>li").eq(5).find(".ball").addClass("ball_on");
        }
        else{
            $(".side_menu>li").eq(6).find(".menu_title").addClass("menu_on");
            $(".side_menu>li").eq(6).find(".bar").addClass("bar_on");
            $(".side_menu>li").eq(6).find(".ball").addClass("ball_on");
        }
    });
    $(".btn_profile").click(function(){
        $('html, body').animate({
        scrollTop: $('#move_profile').offset().top + 10});
    });


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

    $(".ticket>div").mouseenter(function(){
        $(".ticket_left").css({"filter":"brightness(90%)"});
        $(".ticket_right").css({"filter":"brightness(90%)"});
    });
    $(".ticket>div").mouseleave(function(){
        $(".ticket_left").css({"filter":"brightness(100%)"});
        $(".ticket_right").css({"filter":"brightness(100%)"});
    });
    $(".ticket>div").click(function(){
        $(".ticket_left").stop().animate({"left":"-100%", "rotate":"-5deg"}, 2000);
        $(".ticket_right").stop().animate({"right":"-100%", "rotate":"20deg"}, 2000);
        $(".photo").animate({"left":"5%", "opacity":"1"}, 1500);
        $(".deco").animate({"right":"53%", "opacity":"1"}, 1500);
        $(".box").animate({"opacity":"1"}, 500);
        $(".profile").show();
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
        $(".profile").show();
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
        $(".report_acco>li").find("a").removeClass("folder");
        $(".report_acco>li").find("a").eq(acc).addClass("folder");
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

// mob ver

    $(".ticket_mob>div").hover(function(){
        $(".cursor").toggle();
    });

    $(".ticket_mob").click(function(){
        $(".ticket_mob").stop().fadeOut();
        $(".image").stop().fadeIn();
    });
    $(".image").mouseenter(function(){
        $(".image_txt").css({"z-index":"10"})
    })
    $(".image").mouseleave(function(){
        $(".image_txt").css({"z-index":"-1"})
    })
});

