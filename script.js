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

function closing() {
  closeModal.style.display = 'none';
}

closing();

function errorMessage(elemId, requiredMessage) {
  document.getElementById(elemId).innerHTML = requiredMessage;
}

function validationForm() {
  const firstName = document.forms.desktopForm.firstName.value;
  const secondName = document.forms.desktopForm.lastName.value;
  const emailDesk = document.forms.desktopForm.desktopEmail.value;
  const desktopMess = document.forms.desktopForm.desktopMessage.value;

  let firstText = true;
  let secondText = true;
  let emailText = true;
  let messageText = true;

  if (firstName === '') {
    errorMessage('firstText', '*Please Enter Your First Name');
  } else {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (nameRegex.test(firstName) === false) {
      errorMessage('firstText', '*Please Enter A Valid  First Name');
    } else {
      errorMessage('firstText', '');
      firstText = false;
    }
  }

  if (secondName === '') {
    errorMessage('secondText', '*Please Enter Your Last Name');
  } else {
    const lastRegex = /^[a-zA-Z\s]+$/;
    if (lastRegex.test(secondName) === false) {
      errorMessage('secondText', '*Please Enter A Valid Last Name');
    } else {
      errorMessage('secondText', '');
      secondText = false;
    }
  }

  if (emailDesk === '') {
    errorMessage('emailText', '*Please enter your email address');
  } else {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (emailRegex.test(emailDesk) === false) {
      errorMessage('emailText', '*Please enter a valid email address');
    } else {
      errorMessage('emailText', '');
      emailText = false;
    }
  }

  if (desktopMess === '') {
    errorMessage('messageText', '*Please Enter Your Last Name');

  } else {
    const messRegex = /^[a-zA-Z\s]+$/;
    if (messRegex.test(desktopMess) === false) {
      errorMessage('messageText', '*Please Enter A Valid Last Name');
    } else {
      errorMessage('messageText', '');
      messageText = false;
    }
  }

  if ((firstText || secondText || emailText || messageText === true)) {
    return false;
  }
}

validationForm();

function errorMobileMessage (elemId, requiredMessage) {
  document.getElementById(elemId).innerHTML = requiredMessage;
}

function validationMobileForm() {
 const mobileName = document.forms.mobileForm.mobileName.value;
 const mobileEmail = document.forms.mobileForm.mobileEmail.value;
 const mobileMessage = document.forms.mobileForm.mobileMessage.value;

 let nameError  = true;
 let emailError = true;
 let messageError = true;

  if (mobileName == '') {
    errorMobileMessage('nameError', '*Please Enter Your First Name');
  }
  else {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if(nameRegex.test(mobileName) === false){
      errorMobileMessage('nameError', '*Please Enter A Valid  First Name');
    } else {
      errorMobileMessage('nameError', '');
     nameError = false;
    }
  }

  if (mobileEmail == '') {
    errorMobileMessage('emailError', "*Please enter your email address")
  } else {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (emailRegex.test(mobileEmail) === false){
    errorMobileMessage('emailText', "*Please enter a valid email address");
    } else {
      errorMobileMessage('emailError', '');
    emailError = false;
    }
  }

  if (mobileMessage == '') {
    errorMobileMessage('messageError', '*Please Enter Your Message');

  } else {
  const messRegex = /^[a-zA-Z\s]+$/;
  if(messRegex.test(mobileMessage) === false){
    errorMobileMessage('messageError', '*Please Enter A Valid Message');
  } else {
    errorMobileMessage('messageError', '');
    messageError = false;
  }
  }

  if ((nameError || emailError || messageError == true)) {

    return false;
  }

}

validationMobileForm();

function saveDesktop() {
  const storeFirst = document.getElementById('firstName').value;
  const storeLast = document.getElementById('secondName').value;
  const storeEmailDesk = document.getElementById('userEmail').value;
  const storeMessage = document.getElementById('desktopMessage').value;
  
  const FirstName = storeFirst
  const LastName = storeLast
  const UserDesktopEmail = storeEmailDesk
  const UserDesktopMessage = storeMessage
  
  const savedDeskObj = {FirstName, LastName, UserDesktopEmail, UserDesktopMessage};
  
  localStorage.setItem = JSON.stringify(savedDeskObj)
  }
  
  saveDesktop()
  
