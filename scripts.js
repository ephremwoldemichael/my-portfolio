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


  document.addEventListener("DOMContentLoaded", function () {
    // Open modal
    document.querySelectorAll('.open-modal').forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.getElementById('descriptionModal');
        const desc = button.getAttribute('data-description');
        document.getElementById('modal-description').innerText = desc;
        modal.style.display = 'block';
      });
    });

    // Close modal
    document.getElementById('closeModalBtn').addEventListener('click', () => {
      document.getElementById('descriptionModal').style.display = 'none';
    });

    // Close modal by clicking outside
    window.addEventListener('click', (e) => {
      const modal = document.getElementById('descriptionModal');
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

