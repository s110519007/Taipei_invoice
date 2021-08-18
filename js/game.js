$(document).ready(function () {
    $(".sure").click(function () { 
        $(".alert-wrap").fadeOut();
    });
    $(".btn-prize").click(function () { 
        $(".prize").toggle();
    });
});