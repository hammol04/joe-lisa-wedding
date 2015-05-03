(function(window, document, JSSlider) {

    function Slider() {
        this.init();
    }

    Slider.prototype.init = function() {
        this.slider = new JSSlider('index-gallery', this.options);
        this.calculateHeight();
        this.addListeners();
    };

    Slider.prototype.options = function() {
        return {
            $AutoPlay: true
        }
    };

    Slider.prototype.calculateHeight = function() {
        var height = this.slider.$Elmt.getBoundingClientRect().top,
            realHeight = window.innerHeight - height + "px",
            images = this.slider.$Elmt.querySelectorAll("div, img");

        this.slider.$Elmt.style.minHeight = realHeight;

        for (var i = 0; i < images.length; i++) {
            images[i].style.minHeight = realHeight;
        }
    };

    Slider.prototype.addListeners = function() {
        var _this = this;

        window.addEventListener("resize", function() {
            _this.calculateHeight();
        });
    };

    return new Slider();

})(window, document, $JssorSlider$);

