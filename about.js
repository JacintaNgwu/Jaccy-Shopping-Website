// mobile screen//
const mobile = document.querySelector('.mobile');
const header3 = document.querySelector('.header3');
const xBtn = document.querySelector('.x-btn');
const navBar3 = document.querySelector('#navbar3');

mobile.addEventListener('click', () => {
  header3.classList.toggle('active');
  xBtn.classList.toggle('show');
});

navBar3.addEventListener('click', () => {
  header3.classList.toggle('active');
  xBtn.classList.toggle('show');
});