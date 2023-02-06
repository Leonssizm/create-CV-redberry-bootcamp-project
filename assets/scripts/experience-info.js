const positionInputElement = document.getElementById('positionInput');
const employerInputElement = document.getElementById('employerInput');

let personalInfoHeader = document.getElementById('experienceInfoHeader');
let previousPageButton = document.getElementById('backToPreviousPageBtn');
let nextPageButton = document.getElementById('nextPageButton');
personalInfoHeader.innerHTML = 'გამოცდილება'.toUpperCase();
previousPageButton.innerHTML = 'უკან'.toUpperCase();
nextPageButton.innerHTML = 'შემდეგი'.toUpperCase();
// EventListeners for runtime validation

positionInputElement.addEventListener('input', handlePositionInput);
employerInputElement.addEventListener('input', handleEmployerInput);
// functions to check, update & record input information
function handlePositionInput() {
  let formPosition = document.getElementById('formPosition');
  validatePositionInput();
  if (positionInputElement.value.length > 0) {
    formPosition.innerHTML = positionInputElement.value + ',';
  } else {
    formPosition.innerHTML = '';
  }
}
function handleEmployerInput() {
  let formEmployer = document.getElementById('formEmployer');
  validateEmployerInput();
  formEmployer.innerHTML = employerInputElement.value;
}

// input Validation Functions:

function validatePositionInput() {
  let positionInputIsValid = true;
  let positionInputValue = positionInputElement.value.trim();
  const positionErrorImgElement = document.getElementById('positionErrorImg');
  if (!isFilled(positionInputValue) || !lengthIsLonger(positionInputValue, 2)) {
    positionInputIsValid = false;
    positionInputElement.classList.remove('validatedCheckLargeInputs');
    positionErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(positionInputElement, 'მინიმუმ 2 სიმბოლო', 'positionLabel');
  } else {
    positionErrorImgElement.removeAttribute('src');
    positionInputElement.classList.add('validatedCheckLargeInputs');
    setSuccess(positionInputElement, 'მინიმუმ 2 სიმბოლო', 'positionLabel');
  }

  return positionInputIsValid;
}

function validateEmployerInput() {
  let employerInputIsValid = true;
  let employerInputValue = employerInputElement.value.trim();
  const employerErrorImgElement = document.getElementById('employerErrorImg');
  if (!isFilled(employerInputValue) || !lengthIsLonger(employerInputValue, 2)) {
    employerInputIsValid = false;
    employerInputElement.classList.remove('validatedCheckLargeInputs');
    employerErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(employerInputElement, 'მინიმუმ 2 სიმბოლო', 'employerLabel');
  } else {
    employerErrorImgElement.removeAttribute('src');
    employerInputElement.classList.add('validatedCheckLargeInputs');
    setSuccess(employerInputElement, 'მინიმუმ 2 სიმბოლო', 'employerLabel');
  }

  return employerInputIsValid;
}

// When page is loaded, display part of previously Filled resume

let formNameElement = document.getElementById('formName');
let formSurnameElement = document.getElementById('formSurname');
const imageDisplay = document.getElementById('displayImage');
let formAboutMeElement = document.getElementById('formAbout');
let aboutMeFormLabel = document.getElementById('aboutMeLabel');
let formEmailSignImg = document.getElementById('formEmailSign');
let formEmailElement = document.getElementById('formEmail');
let formTelephoneSignImg = document.getElementById('formTelephoneSign');
let formPhoneElement = document.getElementById('formNumber');

let personalInfo = JSON.parse(localStorage.getItem('personal-info'));
let image = localStorage.getItem('personal-image');

formNameElement.innerHTML = personalInfo.name.toUpperCase();
formSurnameElement.innerHTML = personalInfo.surname.toUpperCase();
formAboutMeElement.innerHTML = personalInfo.about_me;
formEmailElement.innerHTML = personalInfo.email;
formPhoneElement.innerHTML = personalInfo.phone_number;
imageDisplay.style.backgroundImage = `url(${image})`;
aboutMeFormLabel.innerHTML = 'ჩემ შესახებ'.toUpperCase();
formEmailSignImg.setAttribute('src', './assets/icons/atSign.svg');
formTelephoneSignImg.setAttribute('src', './assets/icons/phone.svg');
