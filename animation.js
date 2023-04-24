// Add animation to the page
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else if (entry.boundingClientRect.top >= entry.rootBounds.top) {
            entry.target.classList.remove('show');
        }
    });
}, {threshold: 0.1});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));