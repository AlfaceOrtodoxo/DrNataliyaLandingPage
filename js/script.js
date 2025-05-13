const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
  
      const delay = entry.target.getAttribute('data-delay') || '0s';
      entry.target.style.animationDelay = delay;
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  
  // Inicia a observação em todos elementos com .fade-in
  document.querySelectorAll('.fade-in').forEach(el => revealObserver.observe(el));
  


window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              return;
          } else {
              entry.target.classList.add('show');
              appearOnScroll.unobserve(entry.target);
          }
      });
  }, appearOptions);

  faders.forEach(fader => {
      appearOnScroll.observe(fader);
  });
});


