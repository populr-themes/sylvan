

$(document).on('pop-initialized', function(){
    
    $(".asset-inner").each(function(){
        if($(this).children(".asset-title")){
            //
        }
        else{
            $(this).append('<hr class="cool-hr-tag">');
        }
    });
    
});
