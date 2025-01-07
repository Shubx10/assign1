let currentSlide = 0;
const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.project-slide');

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.slider-icon.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

document.querySelector('.slider-icon.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    this.reset();
});