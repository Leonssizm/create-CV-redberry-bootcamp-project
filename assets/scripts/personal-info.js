const nameInputElement = document.getElementById('nameInput');
const surnameInputElement = document.getElementById('surnameInput');
const emailInputElement = document.getElementById('emailInput');
const phoneInputElement = document.getElementById('phoneNumInput');

nameInputElement.addEventListener('input', () => {
  let formNameElement = document.getElementById('formName');
  validateNameInput();
  formNameElement.innerHTML = nameInputElement.value;
});

surnameInputElement.addEventListener('input', () => {
  let formSurnameElement = document.getElementById('formSurname');
  validateSurnameInput();
  formSurnameElement.innerHTML = surnameInputElement.value;
});

emailInputElement.addEventListener('input', () => {
  let formEmailElement = document.getElementById('formEmail');
  validateEmailInput();
  formEmailElement.innerHTML = emailInputElement.value;
});

phoneInputElement.addEventListener('input', () => {
  let formPhoneElement = document.getElementById('formNumber');
  validatePhoneInput();
  formPhoneElement.innerHTML = phoneInputElement.value;
});
function validateNameInput() {
  let nameInputIsValid = true;
  let nameInputValue = nameInputElement.value.trim();

  //   error image elements
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

  //   error image elements
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
}
