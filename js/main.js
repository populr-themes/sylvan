

$(document).on('pop-initialized', function(){
    $(".asset-inner").each(function(){
        if($(this).children(".asset-title")){
            alert($(this).children(".asset-title").html());
        }
        else{
            $(this).append('<hr class="cool-hr-tag">');
            alert('else');
        }
    });
    
});
