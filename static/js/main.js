$(function () {
    var div = $('div.sc_menu'),
        ul = $('ul.sc_menu'),
        ulPadding = 15;
    var divWidth = div.width();
    div.css({ overflow: 'hidden' });
    var lastLi = ul.find('li:last-child');
    if (lastLi[0]) {
        div.mousemove(function (e) {
            var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;

            var left = (e.pageX - div.offset().left) * (ulWidth - divWidth) / divWidth;
            div.scrollLeft(left);
        });
    }

});