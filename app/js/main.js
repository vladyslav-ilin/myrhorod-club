'use strict';

new Swiper('.gallery__slider', {
   navigation: {
      nextEl: '.gallery__btn--right',
      prevEl: '.gallery__btn--left'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   slidesPerView: 3,
   loop: true,
   spaceBetween: 25
});

(function($){
	$(document).ready(function() {
		// Code

      // $('.menu__burger').on('click', function () {
      //    $(this).toggleClass('menu__burger--open');
      //    $('.menu__list').toggleClass('menu__list--open');
      //    $('.menu__content').toggleClass('menu__content--open');
      // })
		
	});
})(jQuery);

