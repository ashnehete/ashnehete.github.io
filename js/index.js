document.addEventListener("mousemove", function(e) {
    if(!isMobile.any()) {
        block.style.transform = compute(e,15);
        desc.style.transform = compute(e,5);
    }
});

function compute(e,p) {
    var style = getComputedStyle(document.documentElement);
    var w = style.width.slice(0, -2),
    h = style.height.slice(0,-2);
    x = (2 * e.pageX / w - 1) * p * 2;
    y = (2 * e.pageY / h - 1) * p;
    return "translateX(" + x + "px) translateY(" + y + "px)";
}

var isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
