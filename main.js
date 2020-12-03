// メニュー
class MobileMenu{
    constructor (){
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.btn.container = document.querySelector('#global-container');
        this.eventType= this._getEventType();
        this._addEvent();
    }

    _getEventType(){
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle()  {
        this.DOM.btn.container.classList.toggle('menu-open');
    }  
    _addEvent(){
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

new MobileMenu ();

// ここからスライダー
document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();
});


class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            },
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 3500,
            disableOnInteraction: false
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}