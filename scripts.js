// Add class to trigger sliding animation as the user scrolls
window.addEventListener('scroll', function() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (cardPosition < screenPosition) {
      card.style.animationDelay = `${index * 0.2}s`;  // Stagger animation
      card.classList.add('visible');
    }
  });
});
