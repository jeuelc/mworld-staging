/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-ancient.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundbh.pause(); bgsoundbh.currentTime = 0; 
});

$('.menubtnac').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnac').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtnac').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnac').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnac').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnac').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnac').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnac').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnac').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnac').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnac').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnac').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnac').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnac').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bac').position();
  if (botsposition.left == 1024) {
    $('.bac').css({'opacity':1});
    $('.plac').css({'opacity':1});
    $('.fac').css({'opacity':1});
    $('.bac').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plac').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fac').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bac').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bac').css({'left':'1024px'}); });
    $('.plac').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plac').css({'left':'1024px'}); });
    $('.fac').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fac').css({'left':'1024px'}); });
  }
});

$('.rwac').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwac').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsac').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsac').css('background-position-y', '-73px');
    }, 300);
});

$('.fwac').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwac').css('background-position-y', '-73px');
    }, 300);
});