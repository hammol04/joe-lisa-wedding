(function(window, document, JSSlider) {

    function Slider() {
        this.init();
    }

    Slider.prototype.init = function() {
        this.slider = new JSSlider('index-gallery', this.options());
    };

    Slider.prototype.options = function() {
        return {
            $AutoPlay: true
        }
    };

    return new Slider();

})(window, document, $JssorSlider$);

