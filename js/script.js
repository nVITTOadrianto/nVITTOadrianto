const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
        link.classList.add('active');
        }
    });
    }
});
}, {
rootMargin: '-40% 0px -55% 0px',
threshold: 0
});

sections.forEach((section) => observer.observe(section));