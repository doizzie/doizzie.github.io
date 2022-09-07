$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

$('.pageContact').each(function(i,e){
  $(this).click(function(event){
    var x = event.pageX;
    var y = event.pageY;
    
    var nextItem = i + 1;
    if (nextItem >= $('.pageContact').length){
      nextItem = 0;
    }
    
    $('.pageContact:eq('+ nextItem +')').css('z-index', parseInt($(this).css('z-index')) + 1);
    $('.pageContact:eq('+ nextItem +')').css('clip-path', 'circle(0% at '+ x +'px '+ y +'px)');
    
    anime({
      targets: $('.pageContact')[nextItem],
      update: function(anim) {
        $('.pageContact:eq('+ nextItem +')').css('clip-path', 'circle('+ (anim.progress*2) +'% at '+ x +'px '+ y +'px)');
      }
    });
  });
});


(function myfunc(){
  "use strict";

  var $bars = $(".bar"),
    methods = {
      init: function () {
        // Bind events
        methods.bindEvents();
      },
      bindEvents: function () {
        // Loop through each of the bars...
        $bars.each(function () {
          var $bar = $(this),
            $pct = $bar.find(".pct"),
            data = $bar.data("bar");

          setTimeout(function () {
            $bar.css("background-color", data.color).animate(
              {
                width: $pct.html()
              },
              data.speed || 3000,
              function () {
                $pct.css({
                  color: data.color,
                  opacity: 1
                });
              }
            );
          }, data.delay || 0);
        });
      }
    };

  // Initialize on page load
  methods.init();
})(jQuery);


function hiderows(isOpen){
  var row = document.getElementsByClassName("row");
  var cvright = document.getElementById("cvright");
  var tester = 0;
  for (var i=0; i < row.length; i++){
    if (row[i].classList.contains('closed'))
      tester++;
  }
  if (isOpen == 'open')
    for (var i=0; i < row.length; i++){
      row[i].classList.add('closed');
    }
  if (isOpen == 'close')
    for (var i=0; i < row.length; i++){
      row[i].classList.remove('closed');
    }
}

function pageLoaded() {
      var hash = window.location.hash;
      if (hash == "#something"|| hash == "#something2" || hash == "#something3"|| hash == "#something4" || hash == "#something5") {
        hiderows('open');
      } 
}