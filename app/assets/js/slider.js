(function(window, document, JSSlider) {

    function Slider() {
        this.init();
    }

    Slider.prototype.init = function() {
        this.slider = new JSSlider('index-gallery', this.options());
        this.calculateHeight();
        this.addListeners();
        var _this = this;

        this.slider.$On($JssorSlider$.$EVT_PARK, function(){
            _this.calculateHeight();
        });
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

        var correctWidth = document.querySelector("#index-wrap").clientWidth;

        for (var i = 0; i < images.length; i++) {
            images[i].style.minHeight = realHeight;
            images[i].style.width = "100%";
            images[i].style.height = "auto";

            var left = parseFloat(images[i].style.left);

            if (left < 0) {
                images[i].style.left = "-" + correctWidth + "px";
            } else if (left > 0) {
                images[i].style.left = correctWidth + "px";
            }
        }

        document.querySelector("#index-gallery").style.width = correctWidth + "px";
    };

    Slider.prototype.addListeners = function() {
        var _this = this;

        window.addEventListener("resize", function() {
            _this.calculateHeight();
        });
    };

    return new Slider();

})(window, document, $JssorSlider$);

