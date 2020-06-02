const content = document.querySelector('.content');
const formElement = document.querySelector('.pop-up');
const closeButton = document.querySelector('.button_close');
const editButton = content.querySelector('.button_edit');
const saveButton = content.querySelector('.button_submit');
const nameInput = document.querySelector('.pop-up__name-field');
const positionInput = document.querySelector('.pop-up__about-field');
const profileName = content.querySelector('.profile__name');
const profilePosition = content.querySelector('.profile__position');
let changeName;
let changePosition;

function popupOn () {
  formElement.classList.toggle('pop-up_closed');
}

function formHandler (event) {
    event.preventDefault(); 

    changeName = nameInput.value;
    changePosition = positionInput.value;

    profileName.textContent = changeName;
    profilePosition.textContent = changePosition;

    popupOn();
}

editButton.addEventListener('click', popupOn);
closeButton.addEventListener('click', popupOn);
formElement.addEventListener('submit', formHandler);