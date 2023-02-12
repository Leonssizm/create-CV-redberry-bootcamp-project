const experienceForm_2 = document.getElementById('experience_form_2');
const experienceFormDisplay_2 = document.getElementById('experienceInfoForm_2');
const positionInputElement_2 = document.getElementById('positionInput_2');
const employerInputElement_2 = document.getElementById('employerInput_2');
const startDateInputElement_2 = document.getElementById('startDateInput_2');
const endDateInputElement_2 = document.getElementById('endDateInput_2');
const jobDescriptionInputElement_2 =
  document.getElementById('descriptionInput_2');
experienceForm_2.style.display = 'none';
experienceFormDisplay_2.style.display = 'none';

function displayForm_2() {
  experienceForm_2.style.display = 'block';
  experienceFormDisplay_2.style.display = 'block';
}

function generateNewForm_2() {
  displayForm_2();
}

positionInputElement_2.addEventListener('input', handlePositionInput_2);
employerInputElement_2.addEventListener('input', handleEmployerInput_2);
startDateInputElement_2.addEventListener('click', handleStartDateInput_2);
startDateInputElement_2.addEventListener('input', handleStartDateInput_2);
endDateInputElement_2.addEventListener('click', handleEndDateInput_2);
endDateInputElement_2.addEventListener('input', handleEndDateInput_2);
jobDescriptionInputElement_2.addEventListener(
  'click',
  handleDescriptionInput_2
);
jobDescriptionInputElement_2.addEventListener(
  'input',
  handleDescriptionInput_2
);

function handlePositionInput_2() {
  let formPosition = document.getElementById('formPosition_2');
  validatePositionInput_2();
  formPosition.innerHTML = positionInputElement_2.value;
  sessionStorage.setItem('position_2', positionInputElement_2.value);
}
function handleEmployerInput_2() {
  let formEmployer = document.getElementById('formEmployer_2');
  validateEmployerInput_2();
  formEmployer.innerHTML = employerInputElement_2.value;
  sessionStorage.setItem('employer_2', employerInputElement_2.value);
}

function handleStartDateInput_2() {
  let formStartDate = document.getElementById('formStartDate_2');
  validateStartDateInput_2();
  formStartDate.innerHTML = startDateInputElement_2.value;
  sessionStorage.setItem('startDate_2', startDateInputElement_2.value);
}
function handleEndDateInput_2() {
  let formEndDate = document.getElementById('formEndDate_2');
  let dash = document.getElementById('dash_2');
  validateEndDateInput_2();
  formEndDate.innerHTML = endDateInputElement_2.value;
  sessionStorage.setItem('endDate_2', endDateInputElement_2.value);
  if (endDateInputElement.value.length > 0) {
    dash.innerHTML = '-';
  }
}

function handleDescriptionInput_2() {
  let formDescription = document.getElementById('formDescription_2');
  validateDescriptionInput_2();
  formDescription.innerHTML = jobDescriptionInputElement_2.value;
  sessionStorage.setItem('description_2', jobDescriptionInputElement_2.value);
}

// input Validation Functions:

function validatePositionInput_2() {
  let positionInputIsValid = true;
  let positionInputValue = positionInputElement_2.value.trim();
  const positionErrorImgElement = document.getElementById('positionErrorImg_2');
  if (!isFilled(positionInputValue) || !lengthIsLonger(positionInputValue, 2)) {
    positionInputIsValid = false;
    positionInputElement_2.classList.remove('validatedCheckLargeInputs');
    positionErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    positionErrorImgElement.style.margin = '0px 0px 30px 15px';
    setError(positionInputElement_2, 'მინიმუმ 2 სიმბოლო', 'positionLabel_2');
  } else {
    positionErrorImgElement.removeAttribute('src');
    positionInputElement_2.classList.add('validatedCheckLargeInputs');
    setSuccess(positionInputElement_2, 'მინიმუმ 2 სიმბოლო', 'positionLabel_2');
  }

  return positionInputIsValid;
}

function validateEmployerInput_2() {
  let employerInputIsValid = true;
  let employerInputValue = employerInputElement_2.value.trim();
  const employerErrorImgElement = document.getElementById('employerErrorImg_2');
  if (!isFilled(employerInputValue) || !lengthIsLonger(employerInputValue, 2)) {
    employerInputIsValid = false;
    employerInputElement_2.classList.remove('validatedCheckLargeInputs');
    employerErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    employerErrorImgElement.style.margin = '0px 0px 0px 15px ';
    setError(employerInputElement_2, 'მინიმუმ 2 სიმბოლო', 'employerLabel_2');
  } else {
    employerErrorImgElement.removeAttribute('src');
    employerInputElement_2.classList.add('validatedCheckLargeInputs');
    setSuccess(employerInputElement_2, 'მინიმუმ 2 სიმბოლო', 'employerLabel_2');
  }

  return employerInputIsValid;
}

function validateStartDateInput_2() {
  let startDateInputIsValid = true;
  let startDateInputValue = startDateInputElement_2.value;
  const startDateErrorImg = document.getElementById('startDateErrorImg_2');
  if (!isFilled(startDateInputValue)) {
    setError(startDateInputElement_2, '', 'startDateLabel');
    startDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    startDateErrorImg.style.margin = '15px 0 0 0';
  } else {
    startDateErrorImg.removeAttribute('src');
    setSuccess(startDateInputElement_2, '', 'startDateLabel_2');
  }

  return startDateInputIsValid;
}

function validateEndDateInput_2() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_2.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_2');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_2, '', 'endDateLabel');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 10px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_2, '', 'endDateLabel_2');
  }

  return endDateInputIsValid;
}

function validateDescriptionInput_2() {
  let jobDescriptionInputIsValid = true;
  let descriptionValue = jobDescriptionInputElement_2.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_2');

  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    jobDescriptionInputIsValid = false;
    jobDescriptionInputElement_2.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    jobDescriptionInputElement_2.classList.remove('validatedCheckLargeInputs');
    descriptionErrorImg.style.margin = '0px 0px 0px 10px';
    setError(jobDescriptionInputElement_2, '', 'descriptionLabel_2');
  } else {
    jobDescriptionInputElement_2.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    setSuccess(jobDescriptionInputElement_2, '', 'descriptionLabel_2');
  }
  return jobDescriptionInputIsValid;
}

let position_2 = sessionStorage.getItem('position_2');
let employer_2 = sessionStorage.getItem('employer_2');
let startDate_2 = sessionStorage.getItem('startDate_2');
let endDate_2 = sessionStorage.getItem('endDate_2');
let description_2 = sessionStorage.getItem('description_2');
positionInputElement_2.value = position_2;
employerInputElement_2.value = employer_2;
startDateInputElement_2.value = startDate_2;
endDateInputElement_2.value = endDate_2;
jobDescriptionInputElement_2.value = description_2;

if (position_2 !== null) {
  document.getElementById('formPosition_2').innerHTML = position_2;
}
if (employer_2 !== null) {
  document.getElementById('formEmployer_2').innerHTML = employer_2;
}

if (startDate_2 !== null) {
  document.getElementById('formStartDate_2').innerHTML = startDate_2;
}

if (endDate_2 !== null) {
  document.getElementById('formEndDate_2').innerHTML = endDate_2;
}
if (description_2 !== null) {
  document.getElementById('formDescription_2').innerHTML = description_2;
}
