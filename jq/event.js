$(document).ready(function(){
    
    
    $('.sc1-num').click(function(){
        
        click = $(this).index();
        
        $('.banner').fadeOut(300); $('.banner').eq(click).fadeIn(300);
        
        $('.sc1-num').removeClass('num-color');
        $('.sc1-num').eq(click).addClass('num-color');
        
    });
    
    click = 0;
    setInterval(function(){
        
        click++;
        if (click > 2) {
            click = 0;
        }
        
        $('.banner').fadeOut(300); $('.banner').eq(click).fadeIn(300);
        
        $('.sc1-num').removeClass('num-color');
        $('.sc1-num').eq(click).addClass('num-color');
        
    }, 4500);
    
    //banner end
    
    
    $('.sc2-box').each(function(index){
        $(this).attr('data-index', index);
    });
    
    $('.sc2-inbox').each(function(index){
        $(this).attr('data-index', index);
    });

    $('.sc2-click').each(function(index){
        $(this).attr('data-index', index);
    });

    $('.sc2-all-wrap').each(function(index){
        $(this).attr('data-index', index);
    });

    $('.arrow-wrap').each(function(index){
        $(this).attr('data-index', index);
    });

    $('.sc2-box').click(function(){

        var i = $(this).attr('data-index');

        $('.sc2-inbox').removeClass('sc2-inbox-click');
        $('.sc2-inbox').eq(i).addClass('sc2-inbox-click');

        $('.sc2-click[data-index!='+i+']').css({
            display: 'none'
        });
        $('.sc2-click[data-index='+i+']').css({
            display: 'block'
        });

        $('.sc2-all-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.sc2-all-wrap[data-index='+i+']').css({
            display: 'block'
        });

        $('.arrow-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.arrow-wrap[data-index='+i+']').css({
            display: 'block'
        });

    });
    
    //sc2 icon end
    
    
    var click_arrow = 0;
    var img_width=$('.img-wrap').width();
    
    $('#right-1').click(function(){

        click_arrow++

        if(click_arrow > 2) {
            click_arrow = 0;
        }

        $('#sc2-teafood-wrap').animate({
            left : -img_width*click_arrow,
        });
        
    });

    $('#left-1').click(function(){

        click_arrow--;

        if(click_arrow < 0) {
            click_arrow = 2;
        }

        $('#sc2-teafood-wrap').animate({
            left : -img_width*click_arrow,
        });

    });
    
    $('#right-2').click(function(){

        click_arrow++

        if(click_arrow > 3) {
            click_arrow = 0;
        }

        $('#sc2-tea-wrap').animate({
            left : -img_width*click_arrow,
        });

    });

    $('#left-2').click(function(){

        click_arrow--;

        if(click_arrow < 0) {
            click_arrow = 3;
        }

        $('#sc2-tea-wrap').animate({
            left : -img_width*click_arrow,
        });

    });
    
    $('#right-3').click(function(){

        click_arrow++

        if(click_arrow > 1) {
            click_arrow = 0;
        }

        $('#sc2-gift-wrap').animate({
            left : -img_width*click_arrow,
        });

    });

    $('#left-3').click(function(){

        click_arrow--;

        if(click_arrow < 0) {
            click_arrow = 1;
        }

        $('#sc2-gift-wrap').animate({
            left : -img_width*click_arrow,
        });

    });
    
    /*$(window).resize(function(){
            var img_width=$('.img-wrap').width();
    });*/
    
    /*$(window).resize(function(){
         img_width=$('.img-wrap').width();
        $('.section-2-all-wrap').css({
            left : 0,
        });
    });*/
    
    //sc2 end
    
    
    $(window).scroll(function(){
        
        var st = $(window).scrollTop();
        console.log(st);
        
        if (st > 1400) {
            $('#sc3-txt-top').animate({
                right: '0',
                opacity: 1
            }, 500);
        }
        
        if (st > 1950) {
            $('#sc3-txt-under').animate({
                left: '0',
                opacity: 1
            }, 500);
        }
        
    });
    
    //
    
    
    $('#top-btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
    $(window).scroll(function(){
        
    var st = $(window).scrollTop();
    var ht = $('header').height();

    if(st > ht) {
        $('#top-btn').css({
            opacity: 1,
            right: '25px'
        });
    } else if (st < ht) {
        $('#top-btn').css({
            opacity: 0,
            right: '-35px'
        });
    }
    });
    
    //top btn end
    
    
    var m = 0;
    
    $('#ham-btn').click(function(){
        
        if (m == 0) {
            
            $('#mo-menu-mask').css({
                display: 'block',
            });
            
            $('#mo-menu-wrap').animate({
                right: '0px',
            });
            
            $('#wrap').css({
                position: 'fixed',
            });
            
            $('#menu-btn-1').css({
                width: '90%',
                transform: 'rotate(45deg)',
                marginTop: '10px',
            });
            $('#menu-btn-2').css({
                width: '0%'
            });
            $('#menu-btn-3').css({
                width: '90%',
                transform: 'rotate(-45deg)',
                marginTop: '-16px',
                marginLeft: '1px'
            });
            
            m++;
            
        } else if (m == 1) {
            
            $('#mo-menu-mask').css({
                display: 'none',
            });
            
            $('#mo-menu-wrap').animate({
                right: '-400px',
            });
            
            
            $('#wrap').css({
                position: 'absolute'
            });
            
            $('#menu-btn-1').css({
                width: '100%',
                transform: 'rotate(0deg)',
                marginTop: 0,
            });
            $('#menu-btn-2').css({
                width: '100%'
            });
            $('#menu-btn-3').css({
                width: '100%',
                transform: 'rotate(-0deg)',
                marginTop: 0,
                marginLeft: 0
            });
            
            m=0;
            
        }
        
        
    });
    
    
    $(".mo-menu-title").click(function() {
        $(this).next(".mo-sub-menu").stop().slideToggle(300); $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".mo-sub-menu").siblings(".mo-sub-menu").slideUp(300);
    });
    
    
    
}); //end




