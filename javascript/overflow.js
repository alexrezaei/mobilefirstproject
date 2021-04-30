var overflowing = [];
jQuery(':not(script)').filter(function() {
    return jQuery(this).width() > jQuery(window).width();
}).each(function(){
    overflowing.push({
        'xpath'    : createXPathFromElement(jQuery(this).get(0)),
        'width'    : jQuery(this).width(),
        'overflow' : jQuery(this).width() - jQuery(window).width()
    });
});
console.table(overflowing);