var adjustMobileContainer = function() {
  if ($('meta').length) {
    console.log('works');
    $('#my-container').toggleClass('has-pop-sharing-links');
  }
};

$(document).on('pop-initialized', function(){
  adjustMobileContainer();
  $(window).on('resize', adjustMobileContainer);
});