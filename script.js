'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden'); // dots are only pertaining to the selector
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //.key being a property of the event object. e.key = "Escape"
    //aka when the key pressed is Escape THEN call closeModal
    closeModal();
  }
});
//keydown is as soon as button is pressed, keypressed is rapid fire / doesn't stop, keyup is after button has been pressed
//e = event as an argument
//using the classList property of the modal object, we can change properties of the classes in the html code. example using .add('hidden'). In this case we are checking to see when it does NOT contain the 'hidden' class, then do something
//if not contain hidden then call the closeModal function when esc key is pressed
