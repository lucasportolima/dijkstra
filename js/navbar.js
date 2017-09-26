//Transiçao Transparencia

$(window).on('scroll', function() {
    var $win = $(window);
    var winH = $win.height();
    if ($(".navbar").offset().top+100 > winH) {
        $(".navbar").addClass("navbar-black");
        $(".nav-logo").removeClass("hidden");
    } else {
        $(".navbar").removeClass("navbar-black");
        $(".nav-logo").addClass("hidden");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
