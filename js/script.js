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
  