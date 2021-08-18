$(document).ready(function () {
    for (let n = 0; n < 10; n++) {
        $(".btn-fold"+n).click(function () {
            $(".list"+n).toggle();
            $(".btn-fold"+n).toggle();
            $(".btn-unfold"+n).show();
        });
        $(".btn-unfold"+n).click(function () {
            $(".list"+n).toggle();
            $(".btn-unfold"+n).toggle();
            $(".btn-fold"+n).show();
        });
    }
});