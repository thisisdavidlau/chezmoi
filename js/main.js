//MAIN
// add padding or margin when element is affixed
$("#navbar").on("affix.bs.affix", function() {
  return $("#main").addClass("padded");
});

// remove it when unaffixed
$("#navbar").on("affix-top.bs.affix", function() {
  return $("#main").removeClass("padded");
});


//SERVICES
// add padding or margin when element is affixed
$("#navbar").on("affix.bs.affix", function() {
  return $(".services").addClass("padded");
});

// remove it when unaffixed
$("#navbar").on("affix-top.bs.affix", function() {
  return $(".services").removeClass("padded");
});


//STYLIST
// add padding or margin when element is affixed
$("#navbar").on("affix.bs.affix", function() {
  return $("#stylist").addClass("padded");
});

// remove it when unaffixed
$("#navbar").on("affix-top.bs.affix", function() {
  return $("#stylist").removeClass("padded");
});



$(window).ready(function(){
$('#thumb1').mouseenter(function(){
    $('#p1').addClass("unset");
	})
$('#thumb1').mouseleave(function(){
    $('#p1').removeClass("unset");
	})
});

$(document).ready(function(){
$('#thumb2').mouseenter(function(){
    $('#p2').addClass("unset");
  })
$('#thumb2').mouseleave(function(){
    $('#p2').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb3').mouseenter(function(){
    $('#p3').addClass("unset");
  })
$('#thumb3').mouseleave(function(){
    $('#p3').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb4').mouseenter(function(){
    $('#p4').addClass("unset");
  })
$('#thumb4').mouseleave(function(){
    $('#p4').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb5').mouseenter(function(){
    $('#p5').addClass("unset");
  })
$('#thumb5').mouseleave(function(){
    $('#p5').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb6').mouseenter(function(){
    $('#p6').addClass("unset");
  })
$('#thumb6').mouseleave(function(){
    $('#p6').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb7').mouseenter(function(){
    $('#p7').addClass("unset");
  })
$('#thumb7').mouseleave(function(){
    $('#p7').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb8').mouseenter(function(){
    $('#p8').addClass("unset");
  })
$('#thumb8').mouseleave(function(){
    $('#p8').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb9').mouseenter(function(){
    $('#p9').addClass("unset");
  })
$('#thumb9').mouseleave(function(){
    $('#p9').removeClass("unset");
  })
});

$(document).ready(function(){
$('#thumb10').mouseenter(function(){
    $('#p10').addClass("unset");
  })
$('#thumb10').mouseleave(function(){
    $('#p10').removeClass("unset");
  })
});