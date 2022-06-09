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
    
    
    $('.small-dot').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.dot-profile').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.thumbnail-wrap').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.profile-img').each(function(index){
        $(this).attr('data-index', index)
    });
    
    var a = 0;
    
    $('.small-dot').hover(function(){
        
        var i = $(this).attr('data-index');
        
        if (a == 0){
            
            $('.dot-profile[data-index!='+i+']').css({
                opacity: 0
            });
            $('.dot-profile[data-index='+i+']').css({
                opacity: 1
            });
            
            $('.thumbnail-wrap[data-index!='+i+']').css({
                marginLeft: 0
            });
            $('.thumbnail-wrap[data-index='+i+']').css({
                marginLeft: '15px'
            });
            
            $('.profile-img[data-index!='+i+']').css({
                marginLeft: '-15px'
            });
            $('.profile-img[data-index='+i+']').css({
                marginLeft: 0
            });
            
            a++;
            
        } else if (a == 1) {
            
            $('.dot-profile[data-index!='+i+']').css({
                opacity: 0
            });
            $('.dot-profile[data-index='+i+']').css({
                opacity: 0
            });
            
            a=0;
            
        }
        
    });
    
    
}); //end
















