$(function(){
  slidr.create('slidr-div', {
    direction: 'vertical',
  }).start();


  var interval = setInterval( function() {
    var min = $('.timer_min').text()
    var sec = $('.timer_sec').text()
    if (sec == 00 | sec == 0) {
      min--
      $('.timer_min').text(min)
      $('.timer_sec').text(59)
    } else if ($('.timer_sec').text() <= 59 ) {
      var sec = $('.timer_sec').text()
      sec--
      $('.timer_sec').text(sec)
    }
  }, 1000)

  $('.name-input').focusin(function() {
    $(this).attr('placeholder', "Иванов Иван")
  })
    $('.name-input').focusout(function() {
    $(this).removeAttr('placeholder')
  })

  $('.tel-input').focusin(function() {
    $(this).attr('placeholder', "+78005553535")
  })
    $('.tel-input').focusout(function() {
    $(this).removeAttr('placeholder')
  })

  $('.tel-input').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});
})
