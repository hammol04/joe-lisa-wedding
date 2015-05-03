(function(window, document, Slider) {

    function Wedding() {
        this.init();
    }

    Wedding.prototype.init = function() {
        this.slider = new Slider();
    };

    return new Wedding();

})(window, document, Slider);

