(function($){
    $.fn.nivoSlider = function(options) {

        var settings = $.extend({
            effect: 'fade',
            slices: 15,
            animSpeed: 500,
            pauseTime: 3000,
            startSlide: 0
        }, options);

        return this.each(function() {
            var $this = $(this);
            var slides = $this.find('img');
            var currentSlide = settings.startSlide;

            slides.hide().eq(currentSlide).show();

            setInterval(function() {
                slides.eq(currentSlide).fadeOut(settings.animSpeed);
                currentSlide = (currentSlide + 1) % slides.length;
                slides.eq(currentSlide).fadeIn(settings.animSpeed);
            }, settings.pauseTime);
        });
    };
})(jQuery);