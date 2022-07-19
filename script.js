const menu = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const openMobileModal = document.querySelectorAll('[data-modal-target]');
const closeMobileModal = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('#overlay');

function mobileMenu() {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('show-menu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', mobileMenu);

menuItems.forEach(
  (menuItem) => menuItem.addEventListener('click', mobileMenu),
);

openMobileModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.mobile-modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

closeMobileModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.mobile-modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
