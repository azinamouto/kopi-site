// Progressive visual enhancements; ordering and data remain with existing clients.
document.addEventListener('DOMContentLoaded', () => {
  const motion = matchMedia('(prefers-reduced-motion: no-preference)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  document.querySelectorAll('.cart-card, .hero-art').forEach(surface => {
    let frame = 0;
    surface.addEventListener('pointermove', event => {
      if (!motion.matches || !pointer.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = surface.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - .5;
        const y = (event.clientY - box.top) / box.height - .5;
        surface.style.setProperty('--highlight-x', `${(x + .5) * 100}%`);
        surface.style.setProperty('--highlight-y', `${(y + .5) * 100}%`);
        surface.style.setProperty('--tilt-x', `${-y * 3}deg`);
        surface.style.setProperty('--tilt-y', `${x * 3}deg`);
        surface.style.setProperty('--parallax-x', `${x * 7}px`);
        surface.style.setProperty('--parallax-y', `${y * 7}px`);
      });
    }, {passive:true});
    surface.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      ['--tilt-x','--tilt-y','--parallax-x','--parallax-y','--highlight-x','--highlight-y'].forEach(key => surface.style.removeProperty(key));
    });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (motion.matches) entry.target.classList.add('reveal-in');
      observer.unobserve(entry.target);
    }), {threshold:.08});
    document.querySelectorAll('.home-picks>a,.cart-card').forEach((element, index) => {
      element.style.animationDelay = `${index % 3 * 65}ms`;
      observer.observe(element);
    });
  }
  // Existing filters own visibility; animate their newly visible results.
  document.querySelectorAll('.filter-chip, #resetMenu').forEach(control => control.addEventListener('click', () => {
    if (!motion.matches) return;
    document.querySelectorAll('.cart-card').forEach(card => {
      card.classList.remove('reveal-in');
      requestAnimationFrame(() => { if (card.style.display !== 'none') card.classList.add('reveal-in'); });
    });
  }));
});
