$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
            $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 40
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });

$(window).scroll(function() {
  $(".bg-img").css({
    'opacity': 1 - (($(this).scrollTop()-200) / 600)
  });

  if($(this).scrollTop() > 500){
    $(".logo").fadeIn("slow");
  }

  if($(this).scrollTop() < 500){
    $(".logo").fadeOut("fast");
  }

});

/*

var $elem = $('#container');
$(window).on('load', function () {
    var in_view = new Waypoint.Inview({
        element: $('#container')[0],
        enter: function() {
            $('#bg_img').addClass('start');
        },
        exit: function() {  // optionally
            $('#bg_img').removeClass('start');
        }
    });
});

*/

$(function() { // DOM ready

  $("[data-words]").attr("data-words", function(i, d){
    var $self  = $(this),
        $words = d.split("|"),
        tot    = $words.length,
        c      = 0; 

    // CREATE SPANS INSIDE SPAN
    for(var i=0; i<tot; i++) $self.append($('<span/>',{text:$words[i]}));

    // COLLECT WORDS AND HIDE
    $words = $self.find("span").hide();

    // ANIMATE AND LOOP
    (function loop(){
      $self.animate({ width: $words.eq( c ).width() });
      $words.stop().fadeOut().eq(c).fadeIn().delay(2000).show(0, loop);
      c = ++c % tot;
    }());
    
  });

});

$(function() {
    $("body").click(function(e) {
        if (e.target.id == "close_container"){
          closeInfo();
        }
    });
});




function openNav() {
    document.getElementById("nav_container").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav_container").style.width = "0%";
}

function openInfo1() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container1").style.width = "100%";
    document.getElementById("close_container").style.width = "100%";
  } else {
    document.getElementById("info_container1").style.width = "35%";
    document.getElementById("close_container").style.width = "35%";
  }
}

function openInfo2() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container2").style.width = "100%";
    document.getElementById("close_container").style.width = "100%";
  } else {
    document.getElementById("info_container2").style.width = "35%";
    document.getElementById("close_container").style.width = "35%";
  }
}

function openInfo3() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container3").style.width = "100%";
    document.getElementById("close_container").style.width = "100%";
  } else {
    document.getElementById("info_container3").style.width = "35%";
    document.getElementById("close_container").style.width = "35%";
  }
}

function closeInfo() {
  document.getElementById("info_container1").style.width = "0%";
  document.getElementById("info_container2").style.width = "0%";
  document.getElementById("info_container3").style.width = "0%";  
  document.getElementById("close_container").style.width = "0%";
}
