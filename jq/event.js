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
    
    
}); //end
















