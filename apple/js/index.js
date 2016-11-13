$(function(){
    var screenW = $(window).width();
    var screenH = $(window).height();
    $(".menus").click(function(){
        $(".son").css({
            width:screenW,
            height:screenH
        });
        $(".son").toggle(300);
        $(".header1").toggle(100);
        $(".shop").toggle(100);
    });
    $(window).resize(function(){
        screenW = $(window).width();
        screenH = $(window).height();
        $(".son").css({
            width:screenW,
            height:screenH
        });
    })

    //左右箭头
    $(".left").hover(function(){
        $(".left .left-btn").stop();
        $(".left .left-btn").fadeIn();
    },function(){
        $(".left .left-btn").stop();
        $(".left .left-btn").fadeOut();
    })

    $(".right").hover(function(){
        $(".right .right-btn").stop();
        $(".right .right-btn").fadeIn();
    },function(){
        $(".right .right-btn").stop();
        $(".right .right-btn").fadeOut();
    })


    var t1 = setInterval(move1,3000);
    var t2 = setInterval(move2,50);
    var next=0;
    var now=0;
    var num=50;
    var nextp=0;
    var falg = false;  //标记  是否循环一次
    var falg2 = false;//标记  是否循环一周
    function move1(){
        next++;
        if(next>=3){
            next=0;
        }
        $(".img>a").eq(now).css("zIndex",0).animate({
            width:'80%',
            height:'80%'
        });
        $(".img>a").eq(next).animate({
            left:'0%'
        },function(){
            $(".img>a").eq(now).css({
                left:"100%",
                width:'100%',
                height:'100%',
                zIndex:0
            });
            nextp = next;
            now = next;
            falg = true;
            if(next==0){
                falg2=true;
            }
        }).css({
            zIndex:1
        });
    }

    function move2(){
        var jindu = num/3000;
        if(jindu>=1){
            jindu = 1;
        }
        if(falg){
            num=0;
            falg = false;
            jindu = 0;
        }
        if(falg2){
            $(".progress").css({width:0});
            falg2=false;
            jindu = 0;
            num = 0;
        }
        $(".progress").eq(nextp).css({width:jindu*100+"%"});
        num+=50;
    }

    $(".right-btn").click(function(){
        shop1();
        move1();
        $(".progress").css({
            width:0
        }).eq(next).css({
            width:"100%"
        })
    });
    $(".left-btn").click(function(){
        shop1();
        move3();
    })
    function shop1(){
        //清除事件
        clearInterval(t1);
        clearInterval(t2);
        $(".progress").css("width",0);
    }

    function move3(){
        next--;
        if(next<=-1){
            next=2;
        }
        $(".progress").css({
            width:0
        }).eq(next).css({
            width:"100%"
        })
        $(".img>a").eq(next).css({
            zIndex:0,
            width:'80%',
            height:'80%',
            left:"0%"
        }).animate({
            width:'100%',
            height:"100%",
            zIndex:1
        })
        $(".img>a").eq(now).animate({
            left:"100%"
        },function(){
            now = next;
        });
    }


    $('.btns>div').click(function(){
        shop1();
        var num = $(this).index();
        if(num>now){
//滚动条
            $(".progress").css({
                width:0
            }).eq(num).css({
                width:"100%"
            })

           $(".img>a").eq(now).animate({
               width:"80%",height:"80%"
           }).css({zIndex:0})
            $(".img>a").eq(num).animate({
                left:"0%",zIndex:0
            },function(){
                $(".img>a").eq(now).css({
                    width:"100%",height:"100%",left:"100%"
                })
                now = num;
                next = num;
            })
        }else if(num<now){
            $(".progress").css({
                width:0
            }).eq(num).css({
                width:"100%"
            })
           $(".img a").eq(num).css({
               width:"80%",height:"80%",left:"0%"
           }).animate({
               width:"100%",height:"100%"
           })
            $(".img a").eq(now).animate({
                left:"100%"
            },function(){
                $(".img a").eq(num).css({
                    zIndex:1
                })
                now = num;
                next = num;
            }).css({
                zIndex:0
            })
        }else{
            $(".progress").css({
                width:0
            }).eq(num).css({
                width:"100%"
            })
        }

    })

    $(".footer .list2 p").click(function(){
        $(this).next().slideToggle(200);
    })
});
