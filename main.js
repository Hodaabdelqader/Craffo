const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-hidden');
});
//---------------------Swipper--------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                document.querySelectorAll('.slide-content').forEach(function (content) {
                    content.classList.remove('show');
                });
            },
            slideChangeTransitionEnd: function () {
                const currentSlide = this.slides[this.activeIndex];
                const content = currentSlide.querySelector('.slide-content');
                setTimeout(() => {
                    content.classList.add('show');
                }, 300); 
            },
        },
    });
});












