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
    
    $('.img-wrap').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-name').click(function(){
        
        
        var i = $(this).attr('data-index');
        
        $('.title-name').removeClass('title-name-this');
        $('.title-name').eq(i).addClass('title-name-this');
        
        $('.img-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.img-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
    });
    
    $('#title-name-1').click(function(){
        $('section').css({
            height: '3950px'
        });
    });
    
    $('#title-name-2').click(function(){
        $('section').css({
            height: '5400px'
        });
    });
    
    // pc tab
    
    
    $('.title-name-mo').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.img-wrap-mo').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-name-mo').click(function(){
        
        
        var i = $(this).attr('data-index');
        
        $('.title-name-mo').removeClass('title-name-this-mo');
        $('.title-name-mo').eq(i).addClass('title-name-this-mo');
        
        $('.img-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.img-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
    });
    
    $('#title-name-1-mo').click(function(){
        $('section').css({
            height: '6460px'
        });
    });
    
    $('#title-name-2-mo').click(function(){
        $('section').css({
            height: '8950px'
        });
    });
    
    // mo
    
    
    
    
    
}); //end
















