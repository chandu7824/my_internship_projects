document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });

      // Update active link
      document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
