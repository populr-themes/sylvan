

$(document).on('pop-initialized', function(){
    $(".asset-inner").each(function(){
        if($(this).children(".asset-title")=== undefined){
              alert("what the hack");
              $(this).append('<hr class="cool-hr-tag">');
        }
        else{
            //
        }
    });
});
