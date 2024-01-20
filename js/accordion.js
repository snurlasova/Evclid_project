document.addEventListener('DOMContentLoaded', () => {
  const  accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');
      self.classList.toggle('open');
      //если открыт аккордеон

      if (self.classList.contains('open')){
        control.setAttribute('aria-expended', true);
        control.setAttribute('aria-hidden', false);
      } else{
        control.setAttribute('aria-expended', false);
        control.setAttribute('aria-hidden', true);
      }
    });
});

});










// document.querySelectorAll('.ac-trigger').forEach((el) => {
//   el.addEventListener('click', () => {
//     let content = el.nextElementSibling
//     if (content.style.maxHeight){
//       document.querySelectorAll('.question__text').forEach((el) => el.style.maxHeight = null)
//     }
//     else {
//       document.querySelectorAll('.question__text').forEach((el) => el.style.maxHeight = null)
//       content.style.maxHeight = content.scrollHeight + 'px'
//     }
//   })
// })
