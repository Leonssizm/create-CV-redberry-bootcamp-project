const nameInputElement = document.getElementById('nameInput');
const surnameInputElement = document.getElementById('surnameInput');

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
