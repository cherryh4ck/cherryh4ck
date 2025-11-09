const logos = document.getElementById('footer');
const barra = document.querySelector('.barra-footer');

logos.addEventListener('mouseenter', () => barra.classList.add('barra-footer-hover'));
logos.addEventListener('mouseleave', () => barra.classList.remove('barra-footer-hover'));