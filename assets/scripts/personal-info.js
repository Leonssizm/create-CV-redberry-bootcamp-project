const nameInputElement = document.getElementById('nameInput');
const surnameInputElement = document.getElementById('surnameInput');
const emailInputElement = document.getElementById('emailInput');
const phoneInputElement = document.getElementById('phoneNumInput');
const aboutInputElement = document.getElementById('aboutInput');
const nextPageButton = document.getElementById('nextPageButton');
let personalInfoHeader = document.getElementById('personalInfoHeader');
personalInfoHeader.innerHTML = 'პირადი ინფო'.toUpperCase();
nextPageButton.innerHTML = 'შემდეგი'.toUpperCase();
// EventListeners for runtime validation
nameInputElement.addEventListener('input', handleNameInput);
surnameInputElement.addEventListener('input', handleSurnameInput);
aboutInputElement.addEventListener('input', handleAboutInput);
emailInputElement.addEventListener('input', handleEmailInput);
phoneInputElement.addEventListener('input', handlePhoneInput);

// functions to check, update & record input information
function handleNameInput() {
  let formNameElement = document.getElementById('formName');
  validateNameInput();
  formNameElement.innerHTML = nameInputElement.value.toUpperCase();
}
function handleSurnameInput() {
  let formSurnameElement = document.getElementById('formSurname');
  validateSurnameInput();
  formSurnameElement.innerHTML = surnameInputElement.value.toUpperCase();
}

function handleAboutInput() {
  let formAboutMeElement = document.getElementById('formAbout');
  let aboutMeFormLabel = document.getElementById('aboutMeFormLabel');
  formAboutMeElement.innerHTML = aboutInputElement.value;
  if (aboutInputElement.value.length > 0) {
    aboutMeFormLabel.innerHTML = 'შესახებ'.toUpperCase();
  } else {
    aboutMeFormLabel.innerHTML = '';
  }
}
function handleEmailInput() {
  let formEmailSignImg = document.getElementById('formEmailSign');
  let formEmailElement = document.getElementById('formEmail');
  validateEmailInput();
  formEmailElement.innerHTML = emailInputElement.value;

  if (emailInputElement.value.length > 0) {
    formEmailSignImg.setAttribute('src', './assets/icons/atSign.svg');
  } else {
    formEmailSignImg.removeAttribute('src');
  }
}

function handlePhoneInput() {
  let formTelephoneSignImg = document.getElementById('formTelephoneSign');
  let formPhoneElement = document.getElementById('formNumber');
  validatePhoneInput();
  formPhoneElement.innerHTML = phoneInputElement.value;

  if (phoneInputElement.value.length > 0) {
    formTelephoneSignImg.setAttribute('src', './assets/icons/phone.svg');
  } else {
    formTelephoneSignImg.removeAttribute('src');
  }
}

// input Validation Functions:
function validateNameInput() {
  let nameInputIsValid = true;
  let nameInputValue = nameInputElement.value.trim();
  const nameErrorImageElement = document.getElementById('nameErrorImg');
  if (!isFilled(nameInputValue) || !lengthIsLonger(nameInputValue, 2)) {
    nameInputIsValid = false;
    nameInputElement.classList.remove('validatedCheck');
    nameErrorImageElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(
      nameInputElement,
      'მინიმუმ 2 სიმბოლო, ქართული ასოები',
      'nameLabel'
    );
  } else if (!geoLettersRegex.test(nameInputValue)) {
    nameInputIsValid = false;
    nameInputElement.classList.remove('validatedCheck');
    nameErrorImageElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(nameInputElement, 'ქართული ასოები', 'nameLabel');
  } else {
    nameErrorImageElement.removeAttribute('src');
    nameInputElement.classList.add('validatedCheck');
    setSuccess(
      nameInputElement,
      'მინიმუმ 2 სიმბოლო, ქართული ასოები',
      'nameLabel'
    );
  }
  return nameInputIsValid;
}

function validateSurnameInput() {
  let surnameInputIsValid = true;
  let surnameInputValue = surnameInputElement.value.trim();
  const surnameErrorImageElement = document.getElementById('surnameErrorImg');
  if (!isFilled(surnameInputValue) || !lengthIsLonger(surnameInputValue, 2)) {
    surnameInputIsValid = false;
    surnameInputElement.classList.remove('validatedCheck');
    surnameErrorImageElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(
      surnameInputElement,
      'მინიმუმ 2 სიმბოლო, ქართული ასოები',
      'surnameLabel'
    );
  } else if (!geoLettersRegex.test(surnameInputValue)) {
    surnameInputIsValid = false;
    surnameInputElement.classList.remove('validatedCheck');
    surnameErrorImageElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );

    setError(surnameInputElement, 'ქართული ასოები', 'surnameLabel');
  } else {
    surnameErrorImageElement.removeAttribute('src');
    surnameInputElement.classList.add('validatedCheck');
    setSuccess(
      surnameInputElement,
      'მინიმუმ 2 სიმბოლო, ქართული ასოები',
      'surnameLabel'
    );
  }
  return surnameInputIsValid;
}

function validateEmailInput() {
  let emailInputIsValid = true;
  let emailInputValue = emailInputElement.value.trim();

  const emailErrorImageElement = document.getElementById('emailErrorImg');
  if (!isFilled(emailInputValue) || !lengthIsLonger(emailInputValue, 2)) {
    emailInputIsValid = false;
    emailInputElement.classList.remove('validatedCheckLargeInputs');
    emailErrorImageElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(
      emailInputElement,
      'უნდა მთავრდებოდეს @redberry.ge-თი',
      'emailLabel'
    );
  } else if (!redberryEmailRegex.test(emailInputValue)) {
    emailInputIsValid = false;
    emailInputElement.classList.remove('validatedCheckLargeInputs');
    emailErrorImageElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(
      emailInputElement,
      'უნდა მთავრდებოდეს @redberry.ge-თი',
      'emailLabel'
    );
  } else {
    emailErrorImageElement.removeAttribute('src');
    emailInputElement.classList.add('validatedCheckLargeInputs');
    setSuccess(
      emailInputElement,
      'უნდა მთავრდებოდეს @redberry.ge-თი',
      'emailLabel'
    );
  }
  return emailInputIsValid;
}

function validatePhoneInput() {
  let phoneInputIsValid = true;
  const phoneErrorImageElement = document.getElementById('phoneErrorImg');
  let phoneInputValue = phoneInputElement.value.trim();
  if (!phoneNumRegexWithspaces.test(phoneInputValue)) {
    phoneInputIsValid = false;
    phoneErrorImageElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    phoneInputElement.classList.remove('validatedCheckLargeInputs');
    setError(
      phoneInputElement,
      'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
      'phoneLabel'
    );
  } else {
    phoneErrorImageElement.removeAttribute('src');
    phoneInputElement.classList.add('validatedCheckLargeInputs');
    setSuccess(
      phoneInputElement,
      'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
      'phoneLabel'
    );
  }
  return phoneInputIsValid;
}
// When form is valid, data is saved and onto the next page!
nextPageButton.addEventListener('click', function () {
  if (
    validateNameInput() &&
    validateSurnameInput() &&
    validateImageInput() &&
    validateEmailInput() &&
    validatePhoneInput()
  ) {
    window.localStorage.setItem(
      'personal-info',
      JSON.stringify({
        name: nameInputElement.value,
        surname: surnameInputElement.value,
        email: emailInputElement.value,
        phone_number: phoneInputElement.value,
        about_me: aboutInputElement.value,
      })
    );
    window.location.href = './experience-info.html';
  } else {
    return;
  }
});
// when page reloads, data is saved;
window.onbeforeunload = function saveDataBeforeRefresh() {
  sessionStorage.setItem('name', nameInputElement.value);
  sessionStorage.setItem('surname', surnameInputElement.value);
  sessionStorage.setItem('about', aboutInputElement.value);
  sessionStorage.setItem('email', emailInputElement.value);
  sessionStorage.setItem('phone', phoneInputElement.value);
};

window.onload = function getSavedInfoForInputs() {
  let name = sessionStorage.getItem('name');
  let surname = sessionStorage.getItem('surname');
  let about = sessionStorage.getItem('about');
  let email = sessionStorage.getItem('email');
  let phone = sessionStorage.getItem('phone');

  nameInputElement.value = name;
  surnameInputElement.value = surname;
  aboutInputElement.value = about;
  phoneInputElement.value = phone;
  emailInputElement.value = email;
  let image = sessionStorage.getItem('personal-image');
  imageDisplay.style.backgroundImage = `url(${image})`;
  if (sessionStorage.getItem('phone') !== null) {
    handleNameInput();
    handleSurnameInput();
    handleAboutInput();
    handleEmailInput();
    handlePhoneInput();
    validateImageInput();
  }
};
