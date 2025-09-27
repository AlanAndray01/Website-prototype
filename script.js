 // Select ALL elements you want to animate
  const faders = document.querySelectorAll(
    '.article1, .article1img, .article2, .article2img, .article3, .article3img'
  );

  // One observer handles all
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');   // fade in
      } else {
        entry.target.classList.remove('show'); // fade out
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% visible

  // Attach observer to each element
  faders.forEach(el => observer.observe(el));