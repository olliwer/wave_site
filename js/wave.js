$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
            $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 40
         }, 700, 'swing', function () {
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-92162399-1', 'auto');
ga('send', 'pageview');

var nyan_audio = new Audio('nyan_cut.mp3');
nyan_audio.muted = true; 

function setSound() {
  if (nyan_audio.muted) {
      nyan_audio.muted = false;
      document.getElementById("audio_button").src = "img/sounds.png"  
  } else {
      nyan_audio.muted = true;
      document.getElementById("audio_button").src = "img/muted.png"  
  }
}

function launchNyan() {
    document.getElementById("nyan_launch").style.display = "inline";
    document.getElementById("nyan_launch").style.position = "absolute";
    var height = $('#nyan_static').height();
    document.getElementById("nyan_static").src = "img/nyan_loop.gif"   
    document.getElementById("nyan_static").style.height = height + "px";

    nyan_audio.play();

    var width = $(window).width();

    var elem = document.getElementById('nyan_launch'), pos = 0,
        timer = setInterval(function() {
            pos+=7;
            elem.style.left = pos+"px";
            if( pos > (width/2)) {
              pos = -(width/2);
            }
            if (pos > -10 && pos < 0) {
              pos = 2500;
              clearInterval(timer);
              drawStatic();
            }
        },1);
}

function drawStatic() {
  document.getElementById("nyan_launch").style.display = "none";
  document.getElementById("nyan_static").style.visibility = "visible";
  document.getElementById("nyan_static").src = "img/nyan.gif-c200"  
}

function openNav() {
    document.getElementById("nav_container").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav_container").style.width = "0%";
}

function openInfo_blok() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container_blok").style.width = "100%";
    document.getElementById("close_container").style.width = "0%";
  } else {
    document.getElementById("info_container_blok").style.width = "45%";
    document.getElementById("close_container").style.width = "55%";
  }
}

function openInfo_carbo() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container_carbo").style.width = "100%";
    document.getElementById("close_container").style.width = "0%";
  } else {
    document.getElementById("info_container_carbo").style.width = "45%";
    document.getElementById("close_container").style.width = "55%";
  }
}

function openInfo_surgify() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container_surgify").style.width = "100%";
    document.getElementById("close_container").style.width = "0%";
  } else {
    document.getElementById("info_container_surgify").style.width = "45%";
    document.getElementById("close_container").style.width = "55%";
  }
}

function openInfo_quicksave() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container_quicksave").style.width = "100%";
    document.getElementById("close_container").style.width = "0%";
  } else {
    document.getElementById("info_container_quicksave").style.width = "45%";
    document.getElementById("close_container").style.width = "55%";
  }
}

function openInfo_portyr() {
  if (/Mobi/.test(navigator.userAgent)) {
    document.getElementById("info_container_portyr").style.width = "100%";
    document.getElementById("close_container").style.width = "0%";
  } else {
    document.getElementById("info_container_portyr").style.width = "45%";
    document.getElementById("close_container").style.width = "55%";
  }
}


function closeInfo() {
  document.getElementById("info_container_blok").style.width = "0%"; 
  document.getElementById("info_container_carbo").style.width = "0%";  
  document.getElementById("info_container_surgify").style.width = "0%";  
  document.getElementById("info_container_quicksave").style.width = "0%";  
  document.getElementById("info_container_portyr").style.width = "0%"; 
  document.getElementById("close_container").style.width = "0%";
}
