let timer = null;
let goTop = function () {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            scrollTo(0, oTop - 100);
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
}