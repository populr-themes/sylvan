

$(document).on('pop-initialized', function(){
    $(".asset-inner").each(function(){
        
        alert($(this).children(".asset-title").html());
        
        if($(this).children(".asset-title").html() === undefined){
              alert("what the hack");
              $(this).append('<hr class="cool-hr-tag">');
        }
        else{
            alert("not working");
        }
    });
});
