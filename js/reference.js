$(document).ready(function(){
    
    console.log("reference loaded");
    
    function toggle(itemClass){
        console.log("toggle")
        var items = $(itemClass);
        console.log(items)
        items.each(function(index,value){
            if($(this).hasClass('showing')){
                $(this).removeClass('showing').addClass('hiding');
            }else{
                $(this).removeClass('hiding').addClass('showing');
            }
            
        })
    }
    $('.financial').click(function(e){
       toggle('.financial-item');
        
    })
    
    $('.budget').click(function(e){
        toggle('.budget-item');
    })
    
    $('.housing').click(function(e){
        toggle('.housing-item');
    })
    $('.signin').click(function(e){
        toggle('.signin-item');
    })
    
})