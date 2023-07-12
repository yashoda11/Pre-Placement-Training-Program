const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', function () {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', function () {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});
