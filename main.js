const hamburger = document.querySelector('.menu');
const links = document.querySelectorAll('.mobile-menu a');
hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    document.querySelector('.mobile-menu').style.display = 'none';
  } else {
    hamburger.classList.add('active');
    document.querySelector('.mobile-menu').style.display = 'block';
  }
});
links.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.remove('active');
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});
