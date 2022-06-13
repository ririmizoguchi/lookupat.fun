$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  $(".fadein").each(function () {
    var targetPosition = $(this).offset().top;
    if (scroll > targetPosition - windowHeight + 100) {
      $(this).css('opacity', '1');
      $(this).css('transform', 'translateY(0)');

    }

  })
  if ($('#borderAnimeTarget').hasClass('borderAnimeTarget')) {
    var borderAnimeTarget = $('.borderAnimeTarget').offset().top;
  }
  if (scroll > borderAnimeTarget - windowHeight + 100) {
    $(".borderAnimeTarget").addClass('current');
  }

});

$(function () {
  $('#toggle').on('click', function () {
    $('body').toggleClass('is-open');
  });
});