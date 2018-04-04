$(document).ready(function(){
  $("#btn1").click(function(){
    window.location.href = "overview.html"
  });
  $("#btn2").click(function(){
    window.location.href = "project.html"
  });
  $("#btn3").click(function(){
    window.location.href = "member.html"
  });
  $("#btn4").click(function(){
    window.location.href = "aboutus.html"
  });

  $(".currentm").click(function(){
    $(".mcurrent").css("display", "block");
    $(".mprevious").css("display", "none");
  });
  $(".pastm").click(function(){
    $(".mcurrent").css("display", "none");
    $(".mprevious").css("display", "block");
  });

  $(".currentp").click(function(){
    $("#current").css("display", "block");
    $("#past").css("display", "none");
  });
  $(".pastp").click(function(){
    $("#current").css("display", "none");
    $("#past").css("display", "block");
  });

  $("#cplink1").click(function(){
    $(".cmodal1").css("display", "block");
  });
  $("#cplink2").click(function(){
    $(".cmodal2").css("display", "block");
  });
  $("#cplink3").click(function(){
    $(".cmodal3").css("display", "block");
  });
  $("#cplink4").click(function(){
    $(".cmodal4").css("display", "block");
  });
  $("#cplink9").click(function(){
    $(".cmodal5").css("display", "block");
  });
  $("#cplink11").click(function(){
    $(".cmodal6").css("display", "block");
  });

  $("#cpicon1").click(function(){
    $(".cmodal1").css("display", "none");
  });
  $("#cpicon2").click(function(){
    $(".cmodal2").css("display", "none");
  });
  $("#cpicon3").click(function(){
    $(".cmodal3").css("display", "none");
  });
  $("#cpicon4").click(function(){
    $(".cmodal4").css("display", "none");
  });
  $("#cpicon5").click(function(){
    $(".cmodal5").css("display", "none");
  });
  $("#cpicon6").click(function(){
    $(".cmodal6").css("display", "none");
  });

  $("#cplink5").click(function(){
    window.location.href = "reglove.html"
  });
  $("#cplink6").click(function(){
    window.location.href = "umams.html"
  });
  $("#cplink7").click(function(){
    window.location.href = "bipedrobot.html"
  });
  $("#cplink8").click(function(){
    window.location.href = "bitsecure.html"
  });
  $("#cplink10").click(function(){
    window.location.href = "humanarmrobot.html"
  });
  $("#cplink12").click(function(){
    window.location.href = "imitatorobotics.html"
  });

  $("#pplink1").click(function(){
    $(".ppmodal1").css("display", "block");
  });
  $("#pplink2").click(function(){
    $(".ppmodal2").css("display", "block");
  });
  $("#pplink3").click(function(){
    $(".ppmodal3").css("display", "block");
  });
  $("#pplink4").click(function(){
    $(".ppmodal4").css("display", "block");
  });
  $("#ppicon1").click(function(){
    $(".ppmodal1").css("display", "none");
  });
  $("#ppicon2").click(function(){
    $(".ppmodal2").css("display", "none");
  });
  $("#ppicon3").click(function(){
    $(".ppmodal3").css("display", "none");
  });
  $("#ppicon4").click(function(){
    $(".ppmodal4").css("display", "none");
  });


  $(".item1").hover(function(){
    $("#i2").css({"font-size":"17px","left":"97.7%","top":"271px"});
    },function(){
      $("#i2").css({"font-size":"9px","left":"97.9%","top":"275px"});
    });
  $(".item2").hover(function(){
    $("#i1").css({"font-size":"17px","left":"97.7%","top":"297px"});
    },function(){
      $("#i1").css({"font-size":"9px","left":"97.9%","top":"301px"});
    });
  $(".item3").hover(function(){
    $("#i3").css({"font-size":"17px","left":"97.7%","top":"324px"});
    },function(){
      $("#i3").css({"font-size":"9px","left":"97.9%","top":"327px"});
    });
  $(".item4").hover(function(){
    $("#i4").css({"font-size":"17px","left":"97.7%","top":"350px"});
    },function(){
      $("#i4").css({"font-size":"9px","left":"97.9%","top":"353px"});
    });

    $("#drop1").click(function(){
      window.location.href = "project.html"
    });
    $("#drop2").click(function(){
      window.location.href = "member.html"
    });
    $("#drop3").click(function(){
      window.location.href = "sbone.html"
    });
    $("#drop4").click(function(){
      window.location.href = "aboutus.html"
    });
//  $(".item1").focus(function() {
//        $(".carousel-caption1").css("z-index","-1");
//      });
//});
  /*$(".container").RSwiper();
  $(".container").RSwiper({
	  direction:'horizontal'
	});
  $(".container").RSwiper({
	  speed:3000
	});
  $(".container").RSwiper({
	  isPagination:true,
	  isArrows:true
	});*/
});
