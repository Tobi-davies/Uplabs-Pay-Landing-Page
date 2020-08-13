const bullet = document.querySelector('.bullet');
const navs = document.querySelector('.links-container');


bullet.addEventListener('click', (e) => {
  navs.classList.toggle('show-links');
  bullet.classList.toggle('toggle');
});