$(document).ready(function () {
  $("#loading").delay(8000).fadeOut(2000);
  $(".ham").click(function () { 
    $(".side").fadeIn();
    $(".ham").hide();
  });
  $(".side .x").click(function () { 
    $(".side").fadeOut();
    $(".ham").toggle();
  });
  $(".btn-x").click(function () { 
    $(".rank-wrap").hide();
  });
  $(".d-start").hover(function () {
    $(".tooltip-top").css({
      borderColor: "transparent transparent #204267 transparent"
    });
  }, function(){
      $(".tooltip-top").css({
        borderColor: "transparent transparent #fff transparent"
      });
    }
  );
  $(".nav2").hover(function () {
    $(".nav2 .drop1").fadeIn();
  }, function(){
    $(".nav2 .drop1").stop(true,true).fadeOut();
  }
);
  $(".nav3").hover(function () {
      $(".nav3 .drop2").fadeIn();
    }, function(){
      $(".nav3 .drop2").stop(true,true).fadeOut();
    }
  );
    $(".sub1").click(function () { 
        $(".sub1").css({
            backgroundColor: "#fff"
        })
        $(".sub2").css({
            backgroundColor: "#d6f1fa"
        })
        $(".sub3").css({
          backgroundColor: "#d6f1fa"
        })
        $(".sub1 .sub-triangle").show();
        $(".sub2 .sub-triangle").hide();
        $(".sub3 .sub-triangle").hide();
        $("#area1").show();
        $("#area2").hide();
        $("#area3").hide();
    });
    $(".sub2").click(function () {
        $(".sub2").css({
            backgroundColor: "#fff"
        })
        $(".sub1").css({
            backgroundColor: "#d6f1fa"
        })
        $(".sub3").css({
          backgroundColor: "#d6f1fa"
        })
        $(".sub2 .sub-triangle").show();
        $(".sub1 .sub-triangle").hide();
        $(".sub3 .sub-triangle").hide();
        $("#area2").show();
        $("#area1").hide();
        $("#area3").hide();
    });
    $(".sub3").click(function () {
      $(".sub3").css({
          backgroundColor: "#fff"
      })
      $(".sub1").css({
          backgroundColor: "#d6f1fa"
      })
      $(".sub2").css({
        backgroundColor: "#d6f1fa"
    })
      $(".sub3 .sub-triangle").show();
      $(".sub1 .sub-triangle").hide();
      $(".sub2 .sub-triangle").hide();
      $("#area3").show();
      $("#area1").hide();
      $("#area2").hide();
    });
    // change();
    upfile();
    forget();
});
function change() {
  var clicked = false;
    $(".note__wrap").click(function () {
    var triangle = $(this).after();
      clicked = !clicked;
      if (clicked) {
          // $(this).addClass("act");
          // triangle.css({
          //   transform: "rotate(180deg)"
          // })
          $(".act .note")
      }
      else{
        triangle.css({
          transform: "rotate(0deg)"
        })
        $(this).removeClass("act");
      }
  });
}
function upfile() {
  $(".form__upfile").on("change",function (e) {
      var e = e || window.event;
      //獲取 檔案 個數 取消的時候使用
      var files = e.target.files;
      if(files.length>0){
          // 獲取檔名 並顯示檔名
          var fileName = files[0].name;
          $(".form__file").val(fileName);
      }else{
          //清空檔名
          $(".form__file").val("");
      }
    });
}

function forget() {
  $(".forget").click(function() { 
    $(".send").fadeIn();
  });
  $(".send .btn-close").click(function() { 
    $(".send").fadeOut();
  });
}