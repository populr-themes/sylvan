

$(document).on('pop-initialized', function(){
    $(".asset-inner").each(function(){
        if($(this).children(".asset-title").html() === undefined){
              $(this).append('<hr class="cool-hr-tag">');
        }
     });
});
