const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('#menu');
const hero = document.querySelector('#hero');

btnOpen.addEventListener('click', function () {
  btnClose.classList.remove('hidden');
  btnOpen.classList.add('hidden');
  menu.classList.remove('hidden');
  menu.classList.add('flex');
  hero.classList.add('hidden');
});

btnClose.addEventListener('click', function () {
  btnClose.classList.add('hidden');
  btnOpen.classList.remove('hidden');
  menu.classList.add('hidden');
  menu.classList.remove('flex');
  hero.classList.remove('hidden');
});

menu.addEventListener('click', function () {
  btnClose.classList.add('hidden');
  btnOpen.classList.remove('hidden');
  menu.classList.add('hidden');
  menu.classList.remove('flex');
  hero.classList.remove('hidden');
});
