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
const hiddenElementsFast = document.querySelectorAll('.hidden-fast');
const hiddenElementsSlow = document.querySelectorAll('.hidden-slow');
hiddenElementsFast.forEach((el) => observer.observe(el));
hiddenElementsSlow.forEach((el) => observer.observe(el));