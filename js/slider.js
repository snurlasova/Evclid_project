
const swiper = new Swiper('.swiper', {
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable: true
  },

  autoplay: {
   delay: 3000,
 },

 // area-label
  a11y: {
    paginationBulletMessage: 'Перейти к следующему слайду {{index}}',
  }
});
