'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const registerbutton = document.querySelector('#signup');
const signupContent = document.querySelector('.container');
const signupForm = document.querySelector('.signup-form');
const signupImageLink = document.querySelector(".signup-image-link");
const signinLink = document.querySelector('.signin-link');
const email = document.querySelector('#email');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

registerbutton.addEventListener("click", (e) => {
  if (
    email.value.match(validRegex)
    ) {
    //  valid
    e.preventDefault();
    // create our own html element
    const welcomeHead = document.createElement("h1");
    welcomeHead.className = "welcome";
    const node = document.createTextNode("Thank You! Registered successfully!");
   
    welcomeHead.appendChild(node);
    signupContent.appendChild(welcomeHead);
    signupContent.classList.add("success-register");
    signupForm.classList.add("deactive");
    signupImageLink.classList.add("deactive");
    signinLink.classList.remove("deactive");

  } else {
    //    invalid
    email.focus();
  }
});