const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('#menu');

btnOpen.addEventListener('click', function () {
  btnClose.classList.remove('hidden');
  btnOpen.classList.add('hidden');
  btnClose.classList.add('block');
  menu.classList.remove('hidden');
  menu.classList.add('flex');
});

btnClose.addEventListener('click', function () {
  btnClose.classList.add('hidden');
  btnOpen.classList.remove('hidden');
  btnClose.classList.remove('block');
  menu.classList.add('hidden');
  menu.classList.remove('flex');
});

menu.addEventListener('click', function () {
  btnClose.classList.add('hidden');
  btnOpen.classList.remove('hidden');
  btnClose.classList.remove('block');
  menu.classList.add('hidden');
  menu.classList.remove('flex');
});
