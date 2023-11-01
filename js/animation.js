// Add animation to the page
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.8s';
            if (entry.target.classList.contains('hidden-slow')) {
                entry.target.style.transitionDelay = '0.1s';
            }
        } else if (entry.boundingClientRect.top >= entry.rootBounds.top) {
            entry.target.style.transform = 'translateY(15%)';
            entry.target.style.opacity = '0';
        }
    });
}, {threshold: 0.1});
const hiddenElementsFast = document.querySelectorAll('.hidden-fast');
const hiddenElementsSlow = document.querySelectorAll('.hidden-slow');

hiddenElementsFast.forEach((el) => {
    observer.observe(el);
    el.style.transform = 'translateY(15%)';
    el.style.opacity = '0';
});

hiddenElementsSlow.forEach((el) => {
    observer.observe(el);
    el.style.transform = 'translateY(15%)';
    el.style.opacity = '0';
});