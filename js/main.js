var adjustMobileContainer = function() {
  if ($('#meta').children().length > 0) {
    $('#my-container').addClass('has-pop-sharing-links');
  } else {
    $('#my-container').removeClass('has-pop-sharing-links');
  }
};

$(document).on('pop-initialized', function(){
  adjustMobileContainer();
  $(window).on('resize', adjustMobileContainer);
});