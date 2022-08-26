// function showSection1(){
//     var secTitle = document.getElementById("cv1");
//     var secItem = document.getElementById("cvI1");

//     if (secItem.classList.contains('closed')){
//       secItem.classList.remove('closed');
//       secTitle.classList.add('openTitle');
//     } else {
//       secItem.classList.add('closed');
//       secTitle.classList.remove('openTitle');
//     }
// }

// function showSection2(){
//     var secTitle = document.getElementById("cv2");
//     var secItem = document.getElementById("cvI2");

//     if (secItem.classList.contains('closed')){
//       secItem.classList.remove('closed');
//       secTitle.classList.add('openTitle');
//     } else {
//       secItem.classList.add('closed');
//       secTitle.classList.remove('openTitle');
//     }
// }

// function showSection3(){
//     var secTitle = document.getElementById("cv3");
//     var secItem = document.getElementById("cvI3");

//     if (secItem.classList.contains('closed')){
//       secItem.classList.remove('closed');
//       secTitle.classList.add('openTitle');
//     } else {
//       secItem.classList.add('closed');
//       secTitle.classList.remove('openTitle');
//     }
// }

// function showSection4(){
//     var secTitle = document.getElementById("cv4");
//     var secItem = document.getElementById("cvI4");

//     if (secItem.classList.contains('closed')){
//       secItem.classList.remove('closed');
//       secTitle.classList.add('openTitle');
//     } else {
//       secItem.classList.add('closed');
//       secTitle.classList.remove('openTitle');
//     }
// }

// function showSection5(){
//     var secTitle = document.getElementById("cv5");
//     var secItem = document.getElementById("cvI5");

//     if (secItem.classList.contains('closed')){
//       secItem.classList.remove('closed');
//       secTitle.classList.add('openTitle');
//     } else {
//       secItem.classList.add('closed');
//       secTitle.classList.remove('openTitle');
//     }
// }

// $(function(){
//       $("#includedContent").load("Sugarcube/index.html"); 
//     });

// // grid
// var options = {
//   imgSrc : "img/Sugarcube.png",
//   containerName : "placeholder",
//   rows:5,
//   columns:10,
//   margin:0,
//   animTime: 0.3
// }

// function ImageGrid(defaults)
// {
//   var r = defaults.rows;
//   var c = defaults.columns;
//   var margin = defaults.margin;
    
//   var placeholder = document.getElementsByClassName(defaults.containerName)[0];
//   var container = document.createElement('div');
//   container.className = "gridContainer";
//   placeholder.appendChild(container); 
    
//   var gridTile;  

//   var w = (container.offsetWidth / c) -margin;
//   var h = (container.offsetHeight / r) -margin;
//   var arr = [];
    
//   for (var i=0, l=r*c; i < l; i++)
//   {    
//     gridTile = document.createElement('div');
//     gridTile.className = "gridTile";
//     gridTile.style.backgroundImage = "url("+defaults.imgSrc+")";
    
       
//     arr = [(w+margin)*(i%c), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), ((h+margin)*Math.floor(i/c) + h-margin), (w+margin)*(i%c), ((h+margin)*Math.floor(i/c) + h-margin)];
        
//    // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);  
    
        
//     TweenMax.set(gridTile, {webkitClipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)', clipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)'});
       
//     container.appendChild(gridTile);    
    
//     fixTilePosition(gridTile, i);
//   }
  
//   placeholder.addEventListener("mouseover", function(e){
//     var allTiles = e.currentTarget.querySelectorAll(".gridTile");
//     for (var t=0, le = allTiles.length; t < le; t++)
//       {
//         TweenMax.to(allTiles[t], defaults.animTime, {css:{backgroundPosition:"0px 0px"}, ease:Power1.easeOut});
//       }
//   })
                             
//   placeholder.addEventListener("mouseleave", function(e){
//     var allTiles = e.currentTarget.querySelectorAll(".gridTile");
//     for (var ti=0, len = allTiles.length; ti < len; ti++)
//       {
//         fixTilePosition(allTiles[ti], ti, defaults.animTime);
//       }
//   })
  
//   function fixTilePosition(tile, ind, time)
//   {
//     if(time==null)time=0;
//     var centr, centrCol, centrRow, offsetW, offsetH, left, top;
    
//     centr = Math.floor(c * r / 2);
//     centrCol = Math.ceil(centr/c);
//     centrRow = Math.ceil(centr/r);
        
//     offsetW = w/centrCol;
//     offsetH = h/centrRow;
    
//     left = (Math.round((ind % c - centrCol + 1) * offsetW));
//     top = (Math.round((Math.floor(ind/c) - centrRow + 1) * offsetH));
    
//     //console.log(left, top)
    
//     TweenMax.to(tile, time, {css:{backgroundPosition:left+"px "+top+"px"}, ease:Power1.easeOut});
//   }
// }

// ImageGrid(options);


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


// var sm2 = document.getElementById("something2");

// $(sm2).ready(function () 

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
  // methods.init();
  methods.init();
})(jQuery);


function hiderows(isOpen){
  var row = document.getElementsByClassName("row");
  var cvright = document.getElementById("cvright");
  var tester = 0;
  // myfunc();
  for (var i=0; i < row.length; i++){
    // tester = 0;
    if (row[i].classList.contains('closed'))
      tester++;
  }
  if (isOpen == 'open')
    for (var i=0; i < row.length; i++){
      row[i].classList.add('closed');
      // cvright.classList.remove('padleft');
    }
  if (isOpen == 'close')
    for (var i=0; i < row.length; i++){
      row[i].classList.remove('closed');
      // cvright.classList.add('padleft');
    }
  // if (tester == row.length){
  //   for (var i=0; i < row.length; i++){
  //     row[i].classList.remove('closed');
  //   }
  // } else if (tester == 0){
  //   for (var i=0; i < row.length; i++){
  //     row[i].classList.add('closed');
  //   }
  // }
}

function pageLoaded() {
      var hash = window.location.hash;
      if (hash == "#something"|| hash == "#something2" || hash == "#something3"|| hash == "#something4" || hash == "#something5") {
        hiderows('open');
      } 
      // else if (hash == "portfolio.html"){
      //   hiderows('open');
      // }
}