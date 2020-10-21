'use strict';
{
    var h = document.documentElement.scrollHeight;
    for (var i = 1; i < Math.floor(h / 100); i++) {
        var el_scale = "<div class=\"ruler__scale\"><span>" + i + "00</span></div>";
        var ruler = document.getElementById('ruler');
        ruler.insertAdjacentHTML('beforeend', el_scale);
    }
}
