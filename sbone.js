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
    window.location.href = "collaboration.html"
  });
  $("#btn5").click(function(){
    window.location.href = "aboutus.html"
  });

  $(".currentm").click(function(){
    $(".mcurrent").slideDown(1000);
    $(".mprevious").slideUp(1);
  });
  $(".pastm").click(function(){
    $(".mcurrent").slideUp(1);
    $(".mprevious").slideDown(1000);
  });

  $(".currentp").click(function(){
    $("#current").slideDown(1000);
    $("#past").slideUp(1);
  });
  $(".pastp").click(function(){
    $("#current").slideUp(1);
    $("#past").slideDown(1000);
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


  $("#img1").hover(function(){
    $("#i2").css({"font-size":"17px","left":"97.7%","top":"271px"});
    },function(){
      $("#i2").css({"font-size":"9px","left":"97.9%","top":"275px"});
    });
  $("#img2").hover(function(){
    $("#i1").css({"font-size":"17px","left":"97.7%","top":"297px"});
    },function(){
      $("#i1").css({"font-size":"9px","left":"97.9%","top":"301px"});
    });
  $("#img3").hover(function(){
    $("#i3").css({"font-size":"17px","left":"97.7%","top":"324px"});
    },function(){
      $("#i3").css({"font-size":"9px","left":"97.9%","top":"327px"});
    });
  $("#img4").hover(function(){
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
      window.location.href = "collaboration.html"
    });
    $("#drop5").click(function(){
      window.location.href = "aboutus.html"
    });

    $(".accordion1").click(function(){
      $(".panel1").slideToggle("slow");
      $(".panel2").slideUp("slow");
      $(".panel3").slideUp("slow");
      $(".panel4").slideUp("slow");
      $(".panel5").slideUp("slow");
      $(".panel6").slideUp("slow");
    });
    $(".accordion2").click(function(){
      $(".panel1").slideUp("slow");
      $(".panel2").slideToggle("slow");
      $(".panel3").slideUp("slow");
      $(".panel4").slideUp("slow");
      $(".panel5").slideUp("slow");
      $(".panel6").slideUp("slow");
    });
    $(".accordion3").click(function(){
      $(".panel1").slideUp("slow");
      $(".panel2").slideUp("slow");
      $(".panel3").slideToggle("slow");
      $(".panel4").slideUp("slow");
      $(".panel5").slideUp("slow");
      $(".panel6").slideUp("slow");
    });
    $(".accordion4").click(function(){
      $(".panel1").slideUp("slow");
      $(".panel2").slideUp("slow");
      $(".panel3").slideUp("slow");
      $(".panel4").slideToggle("slow");
      $(".panel5").slideUp("slow");
      $(".panel6").slideUp("slow");
    });
    $(".accordion5").click(function(){
      $(".panel1").slideUp("slow");
      $(".panel2").slideUp("slow");
      $(".panel3").slideUp("slow");
      $(".panel4").slideUp("slow");
      $(".panel5").slideToggle("slow");
      $(".panel6").slideUp("slow");
    });
    $(".accordion6").click(function(){
      $(".panel1").slideUp("slow");
      $(".panel2").slideUp("slow");
      $(".panel3").slideUp("slow");
      $(".panel4").slideUp("slow");
      $(".panel5").slideUp("slow");
      $(".panel6").slideToggle("slow");
    });
});

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

$(document).ready(function(){
  $('#fullpage').fullpage({
    navigation: true
  });
});
