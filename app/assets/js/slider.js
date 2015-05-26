(function(window, document, JSSlider) {

    function Slider() {
        this.init();
    }

    Slider.prototype.init = function() {
        if (window.innerWidth < 799) {
            document.querySelector("#index-gallery").style.width = window.innerWidth + "px";
            document.querySelector("#index-gallery .gallery").style.width = window.innerWidth + "px";

            var height = (window.innerWidth / 1000) * 747;

            document.querySelector("#index-gallery").style.height = height + "px";
            document.querySelector("#index-gallery .gallery").style.height = height + "px";

            this.slider = new JSSlider('index-gallery', this.options());
        } else {
            this.slider = new JSSlider('index-gallery', this.options());
        }
    };

    Slider.prototype.options = function() {
        return {
            $AutoPlay: true
        }
    };

    return new Slider();

})(window, document, $JssorSlider$);

