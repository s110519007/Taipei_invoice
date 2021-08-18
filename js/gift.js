$(document).ready(function () {
    window.onresize = function(){
      page();
    }
    count();
    var donate = false;
    $(".drop-wrap").click(function () { 
        donate = !donate;
        if (donate) {
          $(".triangle").css({
            transform: "rotate(180deg)"
          });
          $(".drop-wrap select").on('change', function () {
            var text=$(".drop-wrap select :selected").text();
            document.getElementById("drop-title").innerHTML=text;
            $(".triangle").css({
              transform: "rotate(0deg)"
            });
          });
        }
        else{
          $(".triangle").css({
            transform: "rotate(0deg)"
          });
        }
    });    
    var all = false;
      $(".page .all").click(function() {
          all = !all
        if(all) {
          $("input[class='form__checkboxBody']").each(function() {
              $(this).prop("checked", true);
          });
        } else {
          $("input[class='form__checkboxBody']").each(function() {
              $(this).prop("checked", false);
          });           
        }
     });
     $(".page .donate").click(function(){
         alert("捐贈成功");
     })
});
function count() {
  if($(window).width() >= 1650){
    $(".btn-count").click(function () { 
      $(".count").toggle();
    });
  }
  else{
      $(".btn-count").click(function () { 
          $(".count").toggle();
      });
  }
}

function page() {
  if($(window).width()<575){
    $(".page-item").removeClass("page-num");
    $(".previous").addClass("xs-previous");
    $(".data-show").addClass("xs-page-num");
    $(".next").addClass("xs-next");
  }
  else{
    $(".page-item").addClass("page-num");
    $(".previous").removeClass("xs-previous");
    $(".data-show").removeClass("xs-page-num");
    $(".next").removeClass("xs-next");
    $(".first").removeClass("page-num");
    $(".previous").removeClass("page-num");
    $(".next").removeClass("page-num");
    $(".last").removeClass("page-num");
  }
}