const experienceForm_3 = document.getElementById('experience_form_3');
const experienceFormDisplay_3 = document.getElementById('experienceInfoForm_3');
const positionInputElement_3 = document.getElementById('positionInput_3');
const employerInputElement_3 = document.getElementById('employerInput_3');
const startDateInputElement_3 = document.getElementById('startDateInput_3');
const endDateInputElement_3 = document.getElementById('endDateInput_3');
const jobDescriptionInputElement_3 =
  document.getElementById('descriptionInput_3');
experienceForm_3.style.display = 'none';
experienceFormDisplay_3.style.display = 'none';

function displayForm_3() {
  experienceForm_3.style.display = 'block';
  experienceFormDisplay_3.style.display = 'block';
}

function generateNewForm_3() {
  displayForm_3();
}
positionInputElement_3.addEventListener('input', handlePositionInput_3);
employerInputElement_3.addEventListener('input', handleEmployerInput_3);
startDateInputElement_3.addEventListener('click', handleStartDateInput_3);
startDateInputElement_3.addEventListener('input', handleStartDateInput_3);
endDateInputElement_3.addEventListener('click', handleEndDateInput_3);
endDateInputElement_3.addEventListener('input', handleEndDateInput_3);
jobDescriptionInputElement_3.addEventListener(
  'click',
  handleDescriptionInput_3
);
jobDescriptionInputElement_3.addEventListener(
  'input',
  handleDescriptionInput_3
);

function handlePositionInput_3() {
  let formPosition = document.getElementById('formPosition_3');
  validatePositionInput_3();
  formPosition.innerHTML = positionInputElement_3.value;
  sessionStorage.setItem('position_3', positionInputElement_3.value);
}
function handleEmployerInput_3() {
  let formEmployer = document.getElementById('formEmployer_3');
  validateEmployerInput_3();
  formEmployer.innerHTML = employerInputElement_3.value;
  sessionStorage.setItem('employer_3', employerInputElement_3.value);
}

function handleStartDateInput_3() {
  let formStartDate = document.getElementById('formStartDate_3');
  validateStartDateInput_3();
  formStartDate.innerHTML = startDateInputElement_3.value;
  sessionStorage.setItem('startDate_3', startDateInputElement_3.value);
}
function handleEndDateInput_3() {
  let formEndDate = document.getElementById('formEndDate_3');
  let dash = document.getElementById('dash_3');
  validateEndDateInput_3();
  formEndDate.innerHTML = endDateInputElement_3.value;
  sessionStorage.setItem('endDate_3', endDateInputElement_3.value);
  if (endDateInputElement.value.length > 0) {
    dash.innerHTML = '-';
  }
}

function handleDescriptionInput_3() {
  let formDescription = document.getElementById('formDescription_3');
  validateDescriptionInput_3();
  formDescription.innerHTML = jobDescriptionInputElement_3.value;
  sessionStorage.setItem('description_3', jobDescriptionInputElement_3.value);
}

// Input validation
function validatePositionInput_3() {
  let positionInputIsValid = true;
  let positionInputValue = positionInputElement_3.value.trim();
  const positionErrorImgElement = document.getElementById('positionErrorImg_3');
  if (!isFilled(positionInputValue) || !lengthIsLonger(positionInputValue, 2)) {
    positionInputIsValid = false;
    positionInputElement_3.classList.remove('validatedCheckLargeInputs');
    positionErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    positionErrorImgElement.style.margin = '0px 0px 30px 15px';
    setError(positionInputElement_3, 'მინიმუმ 2 სიმბოლო', 'positionLabel_3');
  } else {
    positionErrorImgElement.removeAttribute('src');
    positionInputElement_3.classList.add('validatedCheckLargeInputs');
    setSuccess(positionInputElement_3, 'მინიმუმ 2 სიმბოლო', 'positionLabel_3');
  }

  return positionInputIsValid;
}

function validateEmployerInput_3() {
  let employerInputIsValid = true;
  let employerInputValue = employerInputElement_3.value.trim();
  const employerErrorImgElement = document.getElementById('employerErrorImg_3');
  if (!isFilled(employerInputValue) || !lengthIsLonger(employerInputValue, 2)) {
    employerInputIsValid = false;
    employerInputElement_3.classList.remove('validatedCheckLargeInputs');
    employerErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    employerErrorImgElement.style.margin = '0px 0px 0px 15px ';
    setError(employerInputElement_3, 'მინიმუმ 2 სიმბოლო', 'employerLabel_3');
  } else {
    employerErrorImgElement.removeAttribute('src');
    employerInputElement_3.classList.add('validatedCheckLargeInputs');
    setSuccess(employerInputElement_3, 'მინიმუმ 2 სიმბოლო', 'employerLabel_3');
  }

  return employerInputIsValid;
}

function validateStartDateInput_3() {
  let startDateInputIsValid = true;
  let startDateInputValue = startDateInputElement_3.value;
  const startDateErrorImg = document.getElementById('startDateErrorImg_3');
  if (!isFilled(startDateInputValue)) {
    setError(startDateInputElement_3, '', 'startDateLabel_3');
    startDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    startDateErrorImg.style.margin = '15px 0 0 0';
  } else {
    startDateErrorImg.removeAttribute('src');
    setSuccess(startDateInputElement_3, '', 'startDateLabel_3');
  }

  return startDateInputIsValid;
}

function validateEndDateInput_3() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_3.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_3');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_3, '', 'endDateLabel_3');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 10px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_3, '', 'endDateLabel_3');
  }

  return endDateInputIsValid;
}

function validateDescriptionInput_3() {
  let jobDescriptionInputIsValid = true;
  let descriptionValue = jobDescriptionInputElement_3.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_3');

  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    jobDescriptionInputIsValid = false;
    jobDescriptionInputElement_3.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    jobDescriptionInputElement_3.classList.remove('validatedCheckLargeInputs');
    descriptionErrorImg.style.margin = '0px 0px 0px 10px';
    setError(jobDescriptionInputElement_3, '', 'descriptionLabel_3');
  } else {
    jobDescriptionInputElement_3.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    setSuccess(jobDescriptionInputElement_3, '', 'descriptionLabel_3');
  }
  return jobDescriptionInputIsValid;
}

let position_3 = sessionStorage.getItem('position_3');
let employer_3 = sessionStorage.getItem('employer_3');
let startDate_3 = sessionStorage.getItem('startDate_3');
let endDate_3 = sessionStorage.getItem('endDate_3');
let description_3 = sessionStorage.getItem('description_3');
positionInputElement_3.value = position_3;
employerInputElement_3.value = employer_3;
startDateInputElement_3.value = startDate_3;
endDateInputElement_3.value = endDate_3;
jobDescriptionInputElement_3.value = description_3;

if (position_3 !== null) {
  document.getElementById('formPosition_3').innerHTML = position_3;
}
if (employer_3 !== null) {
  document.getElementById('formEmployer_3').innerHTML = employer_3;
}

if (startDate_3 !== null) {
  document.getElementById('formStartDate_3').innerHTML = startDate_3;
}

if (endDate_3 !== null) {
  document.getElementById('formEndDate_3').innerHTML = endDate_3;
}
if (description_3 !== null) {
  document.getElementById('formDescription_3').innerHTML = description_3;
}
