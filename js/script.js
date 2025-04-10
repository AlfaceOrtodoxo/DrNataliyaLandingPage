const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Remove inline styles if needed (optional)
    entry.target.style.animationPlayState = "running";
    observer.unobserve(entry.target);
    });
}, { threshold: 0.1 });

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});