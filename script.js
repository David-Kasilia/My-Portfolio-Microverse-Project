const menu = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const openMobileModal = document.querySelectorAll('[data-modal-target]');
const overlay = document.querySelector('#overlay');

const mobileModalContent = [{
  title: 'Multi-post stories',
  descriptionMobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  imageMobile: './images/modal-mobile.png',
  closeImage: './images/close-icon.png',
  languagesMobile: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
}];

const desktopModalContent = [{
  title: 'Multi-post stories',
  descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  imageDesktop: './images/modal-desktop.png',
  closeImage: './images/close-icon.png',
  languagesDesk: ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'],
}];

const modalDataSet = document.getElementById('modal-mobile');

desktopModalContent.title = 'Multi-post stories';
desktopModalContent.descriptionDesktop = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.';
desktopModalContent.imageDesktop = './images/modal-desktop.png';
desktopModalContent.closeImage = './images/close-icon.png';
desktopModalContent.languagesDesk = ['|', 'html', '|', 'Ruby on rails', '|', 'css', '|', 'Github'];
mobileModalContent.descriptionMobile = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.';
mobileModalContent.imageMobile = './images/modal-mobile.png';
mobileModalContent.languagesMobile = ['|', 'html', '|', 'Ruby on rails', '|', 'css'];

const langArray = mobileModalContent.languagesMobile.join('  ');

modalDataSet.innerHTML = `<h2 class="mobile-modal-title">${desktopModalContent.title}</h2>
  <span> <a onclick="closePopupModal()" href="" class="close-popup"><img class="close-image" src="${desktopModalContent.closeImage}" alt="Close icon Mobile modal" /></a></span>
  <img class="desktop-modal-image" src="${desktopModalContent.imageDesktop}" alt="Project Image on desktop device">
  <p class="desktop-modal-text">${desktopModalContent.descriptionDesktop}</p>
  <ul class="mobile-modal-lang">${langArray}</ul>
  <img class="mobile-modal-image" src="${mobileModalContent.imageMobile}" alt="Project Image on mobile device">
  <p class="mobile-modal-text">${mobileModalContent.descriptionMobile}</p>
  <button class="live-button" type="button">See Live <img class="live-icon" src="./images/Icon.png"></button>
  <button class="src-button" type="button">See Source <img class="src-icon" src="./images/Vector(1).png"></button>
`;

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

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

openMobileModal.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.mobile-modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

const closed = () => {
  closeModal.style.display = 'none';
}
