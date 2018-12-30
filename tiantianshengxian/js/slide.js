$(function(){
    var len = $('.slide_pics li').length;
    var $li = $('.slide_pics li');
    var nowpic = 0;
    var prevpic = 0;
    var timer = null;
    $li.not(':first').css({left:760});

    $li.each(function(index){
       var $sli = $('<li>');
       if(index==0){
           $sli.addClass('active');
       }
       $('.points').append($sli);

    })
    var point = $('.points li');

    point.click(function(){
        nowpic=$(this).index();
        move();
        $(this).addClass('active').siblings().removeClass('active');

    })

    // 点击向左箭头时
    $('.arrowl').click(function(){
        nowpic--;
        move();
        point.eq(nowpic).addClass('active').siblings().removeClass('active');

    })
    // 点击右侧箭头时
    $('.arrowr').click(function(){
        nowpic++;
        move();
        point.eq(nowpic).addClass('active').siblings().removeClass('active');

    })
    // 鼠标进入时幻灯片暂停
    $('.slide').mouseenter(function(){
        clearInterval(timer)
    })
    // 鼠标离开继续
    $('.slide').mouseleave(function(){
        timer = setInterval(move,4)

    })
    // 利用定时器自动播放

    timer = setInterval(autoplay,4000)   


    function autoplay(){
        nowpic++;
        move();
        point.eq(nowpic).addClass('active').siblings().removeClass('active');
    }


    function move(){
        if(nowpic==prevpic){
            return;
        }
        if(nowpic>prevpic){
            $li.eq(nowpic).css({left:760})
            $li.eq(prevpic).stop().animate({left:-760})
            $li.eq(nowpic).stop().animate({left:0});
            prevpic = nowpic

        }
        if(nowpic<prevpic){
            $li.eq(nowpic).css({left:-760})
            $li.eq(prevpic).stop().animate({left:760})
            $li.eq(nowpic).stop().animate({left:0})
            prevpic = nowpic
        } 
        if(nowpic<0){
            nowpic=len-1;
            prevpic=0;
            $li.eq(nowpic).css({left:-760})
            $li.eq(prevpic).stop().animate({left:760})
            $li.eq(nowpic).stop().animate({left:0})
            prevpic = nowpic
        }
        if(nowpic>len-1){
            nowpic=0;
            prevpic=len-1;
            $li.eq(prevpic).stop().animate({left:-760})
            $li.eq(nowpic).css({left:760})
            $li.eq(nowpic).stop().animate({left:0})
            prevpic = nowpic
        }
    }


















































})