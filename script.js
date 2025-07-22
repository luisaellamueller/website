function toggleMode() {
  const body = document.body;
  const icon = document.getElementById('mode-icon');
  
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  sidebar.classList.toggle('visible');
  overlay.classList.toggle('visible');
}

function showModal(feature) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');
  
  // Customize message based on feature
  switch(feature) {
    case 'homelab':
      modalTitle.textContent = 'Homelab Dashboard';
      modalMessage.textContent = 'The homelab dashboard is currently under development. Check back soon to see real-time monitoring and management of my home infrastructure!';
      break;
    default:
      modalTitle.textContent = 'Not Yet Implemented';
      modalMessage.textContent = 'This feature is currently under development. Please check back later!';
  }
  
  modal.style.display = 'block';
}

function hideModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    hideModal();
  }
}
