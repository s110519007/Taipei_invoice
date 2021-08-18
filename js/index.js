$(document).ready(function () {
    // window.onresize = function(){
    //     window.location.reload();
    // }
    $(".btn-x").click(function () { 
        $(".nav").css({top: "0"});
        $(".rank-wrap").hide();
        $(".ham").css({top: "25px"});
    });
});
