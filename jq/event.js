$(document).ready(function(){
    
    
    $('.sc2-menu').each(function(index){
        $(this).attr('data-index', index);
    });

    $('.sc2-con-wrap').each(function(index){
        $(this).attr('data-index', index);
    });
    
    $('.sc2-arrow-wrap').each(function(index){
        $(this).attr('data-index', index);
    });

    $('.sc2-menu').click(function(){

        var i = $(this).attr('data-index');

        $('.sc2-menu').removeClass('sc2-add');
        $('.sc2-menu').eq(i).addClass('sc2-add');
        
        $('.sc2-line-ea').removeClass('sc2-line-add');
        $('.sc2-line-ea').eq(i).addClass('sc2-line-add');

        $('.sc2-con-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.sc2-con-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
        $('.sc2-arrow-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.sc2-arrow-wrap[data-index='+i+']').css({
            display: 'block'
        });

    });
    
    var click_arrow = 0;
    var img_width = $('.sc2-con').width();
    var numSlides = 4;

    function updateButtonOpacity() {
        if (click_arrow === 0) {
            $('.sc2-arrow-left').css('opacity', 0.5);
        } else {
            $('.sc2-arrow-left').css('opacity', 1);
        }

        if (click_arrow === numSlides - 1) {
            $('.sc2-arrow-right').css('opacity', 0.5);
        } else {
            $('.sc2-arrow-right').css('opacity', 1);
        }
    }

    $('.sc2-arrow-right').click(function(){
        if (click_arrow < numSlides - 1) {
            click_arrow++;
            $('.sc2-con-wrap').animate({
                left: -img_width * click_arrow,
            });
        }
        updateButtonOpacity();
    });

    $('.sc2-arrow-left').click(function(){
        if (click_arrow > 0) {
            click_arrow--;
            $('.sc2-con-wrap').animate({
                left: -img_width * click_arrow,
            });
        }
        updateButtonOpacity();
    });

    updateButtonOpacity();
    
    //sc2 end
    
    
    var slideCount = 3;
    var currentSlide = 0;

    function showSlide(slideIndex) {
        $('.sc3-right-img').fadeOut(300);
        $('.sc3-right-img').eq(slideIndex).fadeIn(300);

        $('.sc3-right-num').removeClass('sc3-right-num-add');
        $('.sc3-right-num').eq(slideIndex).addClass('sc3-right-num-add');
    }

    $('.sc3-right-num').click(function(){
        var click = $(this).index();
        showSlide(click);
    });

    setInterval(function(){
        
        currentSlide++;
        
        if (currentSlide >= slideCount) {
            currentSlide = 0;
        }
        
        showSlide(currentSlide);
        
    }, 4500);
    
    //sc3 end
    
    
    var swiper;

    function initSwiper() {
        var screenWidth = $(window).width();
        var spaceBetweenValue = (screenWidth > 860) ? 30 : 20;

        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: spaceBetweenValue,
            grabCursor: true,
        });
    }

    // 페이지 로드시 초기화
    $(document).ready(function() {
        initSwiper();
    });

    // 윈도우 리사이즈 이벤트 발생시 스와이퍼 재설정
    $(window).on('resize', function() {
        if (swiper) {
            swiper.destroy();
        }
        initSwiper();
    });
    
    //sc4 end
    
    
    $(window).scroll(function(){
        
        if ($(window).width() > 1400) {
            
            var st = $(window).scrollTop();
            console.log(st);

            if (st > 2300) {
                $('#sec4-title-txt-wrap').animate({
                    left: '0',
                    opacity: 1
                }, 500);
            }

            if (st > 4000) {
                $('#sec6-title-txt-wrap .sec-title').animate({
                    left: '0',
                    opacity: 1
                }, 500);
            }

            if (st > 4000) {
                $('#sec6-title-txt-wrap .sec-sub-txt').animate({
                    left: '0',
                    opacity: 1
                }, 500);
            }

            if (st > 4480) {
                $('#sc6-txt').animate({
                    marginRight: '0',
                    opacity: 1
                }, 500);
            }

            if (st > 4990) {
                $('#sec7-title-txt-wrap').animate({
                    marginLeft: '0',
                    opacity: 1
                }, 500);
            }

            if (st > 4990) {
                $('#sc7-btn-wrap').animate({
                    marginLeft: '0',
                    opacity: 1
                }, 500);
            }
        }
        
    });
    
    //scroll event end
    
    
    var m = 0;
    
    $('#header-menu-btn').click(function(){
        
        if (m == 0) {
            
            $('#menu-mask').css({
                opacity: '1',
                zIndex: '10'
            });
            
            $('#menu-wrap').animate({
                left: '0px',
            });
            
            $('#wrap').css({
                position: 'fixed',
            });
            
            $('#menu-btn-1').css({
                width: '90%',
                transform: 'rotate(45deg)',
                marginTop: '10px',
                backgroundColor: '#000',
            });
            $('#menu-btn-2').css({
                opacity: '0'
            });
            $('#menu-btn-3').css({
                width: '90%',
                transform: 'rotate(-45deg)',
                marginTop: '-16px',
                marginLeft: '1px',
                backgroundColor: '#000',
            });
            
            m++;
            
        } else if (m == 1) {
            
            $('#menu-mask').css({
                opacity: '0',
                zIndex: '-1'
            });
            
            $('#menu-wrap').animate({
                left: '-500px',
            });
            
            $('#wrap').css({
                position: 'absolute'
            });
            
            $('#menu-btn-1').css({
                width: '100%',
                transform: 'rotate(0deg)',
                marginTop: 0,
                backgroundColor: '#fff',
            });
            $('#menu-btn-2').css({
                opacity: '1'
            });
            $('#menu-btn-3').css({
                width: '100%',
                transform: 'rotate(-0deg)',
                marginTop: 0,
                marginLeft: 0,
                backgroundColor: '#fff',
            });
            
            m=0;
            
        }
        
    });
    
    $(".menu-title").click(function() {
        $(this).next(".sub-menu").stop().slideToggle(300); $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".sub-menu").siblings(".sub-menu").slideUp(300);
    });
    
    //menu end
    
    
    
    
    
    
    
    
    
    
    
    
}); //end