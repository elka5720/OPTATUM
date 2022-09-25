$(document).ready(function(){
    
    
    var b = 0;
    
    $('#menu-btn').click(function(){
        
        if (b == 0) {
            $('#menu-wrap').animate({
                top: 0,
            });
            
            $('#wrap').css({
                position: 'fixed'
            });
            
            $('#menu-btn-1').css({
                width: '90%',
                transform: 'rotate(45deg)',
                marginTop: '13px',
            });
            $('#menu-btn-2').css({
                width: '0%'
            });
            $('#menu-btn-3').css({
                width: '90%',
                transform: 'rotate(-45deg)',
                marginTop: '-20px',
                marginLeft: '5px'
            });
            
            b++;
            
        } else if (b == 1) {
            $('#menu-wrap').animate({
                top: '-1100px',
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
            
            b=0;
            
        }
        
        
    });
    
    ///// menu - end
    
    
    
    $('.title-name').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-dot').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.project-wrap').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-name').click(function(){
        
        
        var i = $(this).attr('data-index');
        
        $('.title-name').removeClass('title-name-this');
        $('.title-name').eq(i).addClass('title-name-this');
        
        $('.title-dot').removeClass('title-dot-this');
        $('.title-dot').eq(i).addClass('title-dot-this');
        
        $('.project-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.project-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
    });
    
    
    
    $('#title-name-2d').click(function(){
        $('section').css({
            height: '3240px'
        });
        $('.project-wrap').css({
            height: '2900px'
        });
    });
    
    $('#title-name-3d').click(function(){
        $('section').css({
            height: '1400px'
        });
        $('.project-wrap').css({
            height: '1060px'
        });
    });
    
    ///// project - end
    
    
}); //end
















