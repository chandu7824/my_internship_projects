document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });