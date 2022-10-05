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
            height: '2870px'
        });
        $('.project-wrap').css({
            height: '2900px'
        });
    });
    
    $('#title-name-3d').click(function(){
        $('section').css({
            height: '1390px'
        });
        $('.project-wrap').css({
            height: '1060px'
        });
    });
    
    /// pc1
    
    
    $('.title-name-pc2').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-dot-pc2').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.project-wrap').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-name-pc2').click(function(){
        
        
        var i = $(this).attr('data-index');
        
        $('.title-name-pc2').removeClass('title-name-this-pc2');
        $('.title-name-pc2').eq(i).addClass('title-name-this-pc2');
        
        $('.title-dot-pc2').removeClass('title-dot-this-pc2');
        $('.title-dot-pc2').eq(i).addClass('title-dot-this-pc2');
        
        $('.project-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.project-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
    });
    
    
    $('#title-name-2d-pc2').click(function(){
        $('section').css({
            height: '2490px'
        });
        $('.project-wrap').css({
            height: '2550px'
        });
    });
    
    $('#title-name-3d-pc2').click(function(){
        $('section').css({
            height: '1210px'
        });
        $('.project-wrap').css({
            height: '710px'
        });
    });
    
    /// pc2
    
    
    $('.title-name-tab').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-dot-tab').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.project-wrap').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-name-tab').click(function(){
        
        
        var i = $(this).attr('data-index');
        
        $('.title-name-tab').removeClass('title-name-this-tab');
        $('.title-name-tab').eq(i).addClass('title-name-this-tab');
        
        $('.title-dot-tab').removeClass('title-dot-this-tab');
        $('.title-dot-tab').eq(i).addClass('title-dot-this-tab');
        
        $('.project-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.project-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
    });
    
    
    $('#title-name-2d-tab').click(function(){
        $('section').css({
            height: '3465px'
        });
        $('.project-wrap').css({
            height: '2550px'
        });
    });
    
    $('#title-name-3d-tab').click(function(){
        $('section').css({
            height: '1865px'
        });
        $('.project-wrap').css({
            height: '710px'
        });
    });
    
    /// tab
    
    
    $('.title-name-mo').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-dot-mo').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.project-wrap').each(function(index){
        $(this).attr('data-index', index)
    });
    
    $('.title-name-mo').click(function(){
        
        
        var i = $(this).attr('data-index');
        
        $('.title-name-mo').removeClass('title-name-this-mo');
        $('.title-name-mo').eq(i).addClass('title-name-this-mo');
        
        $('.title-dot-mo').removeClass('title-dot-this-mo');
        $('.title-dot-mo').eq(i).addClass('title-dot-this-mo');
        
        $('.project-wrap[data-index!='+i+']').css({
            display: 'none'
        });
        $('.project-wrap[data-index='+i+']').css({
            display: 'block'
        });
        
    });
    
    
    $('#title-name-2d-mo').click(function(){
        $('section').css({
            height: '6230px'
        });
        $('.project-wrap').css({
            height: '2550px'
        });
    });
    
    $('#title-name-3d-mo').click(function(){
        $('section').css({
            height: '2930px'
        });
        $('.project-wrap').css({
            height: '710px'
        });
    });
    
    /// tab
    
    
    ///// project - end
    
    
}); //end
















