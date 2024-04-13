$('.slider__items').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  autoplay: 5000,
});

$('.play__screenshot_lable input[type=file]').on('change', function () {
  let file = this.files[0];
  $(this).closest('.play__screenshot_lable').find('.play__screenshot_name').html(file.name);
});

