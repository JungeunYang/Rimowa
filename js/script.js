$(function () {
  const $window = $(window);
  const $header = $('#header');

  $window.on('wheel', function (e) {
    e.originalEvent.wheelDelta > 0 ? $header.removeClass('hide') : $header.addClass('hide');
  });
});
