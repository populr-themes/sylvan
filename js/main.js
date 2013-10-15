var adjustMobileContainer = function() {
  if ($('#meta').length) {
    $('#my-container').addClass('has-pop-sharing-links');
  } else {
    $('#my-container').removeClass('has-pop-sharing-links');
  }
};

$(document).on('pop-initialized', function(){
  adjustMobileContainer();
  $(window).on('resize', adjustMobileContainer);
});