const experienceForm_4 = document.getElementById('experience_form_4');
const experienceFormDisplay_4 = document.getElementById('experienceInfoForm_4');
const positionInputElement_4 = document.getElementById('positionInput_4');
const employerInputElement_4 = document.getElementById('employerInput_4');
const startDateInputElement_4 = document.getElementById('startDateInput_4');
const endDateInputElement_4 = document.getElementById('endDateInput_4');
const jobDescriptionInputElement_4 =
  document.getElementById('descriptionInput_4');
experienceForm_4.style.display = 'none';
experienceFormDisplay_4.style.display = 'none';

function displayForm_4() {
  experienceForm_4.style.display = 'block';
  experienceFormDisplay_4.style.display = 'block';
}

function generateNewForm_4() {
  displayForm_4();
}
positionInputElement_4.addEventListener('input', handlePositionInput_4);
employerInputElement_4.addEventListener('input', handleEmployerInput_4);
startDateInputElement_4.addEventListener('click', handleStartDateInput_4);
startDateInputElement_4.addEventListener('input', handleStartDateInput_4);
endDateInputElement_4.addEventListener('click', handleEndDateInput_4);
endDateInputElement_4.addEventListener('input', handleEndDateInput_4);
jobDescriptionInputElement_4.addEventListener(
  'click',
  handleDescriptionInput_4
);
jobDescriptionInputElement_4.addEventListener(
  'input',
  handleDescriptionInput_4
);

function handlePositionInput_4() {
  let formPosition = document.getElementById('formPosition_4');
  validatePositionInput_4();
  formPosition.innerHTML = positionInputElement_4.value;
  sessionStorage.setItem('position_4', positionInputElement_4.value);
}
function handleEmployerInput_4() {
  let formEmployer = document.getElementById('formEmployer_4');
  validateEmployerInput_4();
  formEmployer.innerHTML = employerInputElement_4.value;
  sessionStorage.setItem('employer_4', employerInputElement_4.value);
}

function handleStartDateInput_4() {
  let formStartDate = document.getElementById('formStartDate_4');
  validateStartDateInput_4();
  formStartDate.innerHTML = startDateInputElement_4.value;
  sessionStorage.setItem('startDate_4', startDateInputElement_4.value);
}

function handleEndDateInput_4() {
  let formEndDate = document.getElementById('formEndDate_4');
  let dash = document.getElementById('dash_4');
  validateEndDateInput_4();
  formEndDate.innerHTML = endDateInputElement_4.value;
  sessionStorage.setItem('endDate_4', endDateInputElement_4.value);
  if (endDateInputElement.value.length > 0) {
    dash.innerHTML = '-';
  }
}

function handleDescriptionInput_4() {
  let formDescription = document.getElementById('formDescription_4');
  validateDescriptionInput_4();
  formDescription.innerHTML = jobDescriptionInputElement_4.value;
  sessionStorage.setItem('description_4', jobDescriptionInputElement_4.value);
}

// Input validations:

function validatePositionInput_4() {
  let positionInputIsValid = true;
  let positionInputValue = positionInputElement_4.value.trim();
  const positionErrorImgElement = document.getElementById('positionErrorImg_4');
  if (!isFilled(positionInputValue) || !lengthIsLonger(positionInputValue, 2)) {
    positionInputIsValid = false;
    positionInputElement_4.classList.remove('validatedCheckLargeInputs');
    positionErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    positionErrorImgElement.style.margin = '0px 0px 30px 15px';
    setError(positionInputElement_4, 'მინიმუმ 2 სიმბოლო', 'positionLabel_4');
  } else {
    positionErrorImgElement.removeAttribute('src');
    positionInputElement_4.classList.add('validatedCheckLargeInputs');
    setSuccess(positionInputElement_4, 'მინიმუმ 2 სიმბოლო', 'positionLabel_4');
  }

  return positionInputIsValid;
}

function validateEmployerInput_4() {
  let employerInputIsValid = true;
  let employerInputValue = employerInputElement_4.value.trim();
  const employerErrorImgElement = document.getElementById('employerErrorImg_4');
  if (!isFilled(employerInputValue) || !lengthIsLonger(employerInputValue, 2)) {
    employerInputIsValid = false;
    employerInputElement_4.classList.remove('validatedCheckLargeInputs');
    employerErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    employerErrorImgElement.style.margin = '0px 0px 0px 15px ';
    setError(employerInputElement_4, 'მინიმუმ 2 სიმბოლო', 'employerLabel_4');
  } else {
    employerErrorImgElement.removeAttribute('src');
    employerInputElement_4.classList.add('validatedCheckLargeInputs');
    setSuccess(employerInputElement_4, 'მინიმუმ 2 სიმბოლო', 'employerLabel_4');
  }

  return employerInputIsValid;
}

function validateStartDateInput_4() {
  let startDateInputIsValid = true;
  let startDateInputValue = startDateInputElement_4.value;
  const startDateErrorImg = document.getElementById('startDateErrorImg_4');
  if (!isFilled(startDateInputValue)) {
    setError(startDateInputElement_4, '', 'startDateLabel_4');
    startDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    startDateErrorImg.style.margin = '15px 0 0 0';
  } else {
    startDateErrorImg.removeAttribute('src');
    setSuccess(startDateInputElement_4, '', 'startDateLabel_4');
  }

  return startDateInputIsValid;
}
function validateEndDateInput_4() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_4.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_4');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_4, '', 'endDateLabel_4');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 10px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_4, '', 'endDateLabel_4');
  }

  return endDateInputIsValid;
}
function validateDescriptionInput_4() {
  let jobDescriptionInputIsValid = true;
  let descriptionValue = jobDescriptionInputElement_4.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_4');

  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    jobDescriptionInputIsValid = false;
    jobDescriptionInputElement_4.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    jobDescriptionInputElement_4.classList.remove('validatedCheckLargeInputs');
    descriptionErrorImg.style.margin = '0px 0px 0px 10px';
    setError(jobDescriptionInputElement_4, '', 'descriptionLabel_4');
  } else {
    jobDescriptionInputElement_4.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    setSuccess(jobDescriptionInputElement_4, '', 'descriptionLabel_4');
  }
  return jobDescriptionInputIsValid;
}

let position_4 = sessionStorage.getItem('position_4');
let employer_4 = sessionStorage.getItem('employer_4');
let startDate_4 = sessionStorage.getItem('startDate_4');
let endDate_4 = sessionStorage.getItem('endDate_4');
let description_4 = sessionStorage.getItem('description_4');
positionInputElement_4.value = position_4;
employerInputElement_4.value = employer_4;
startDateInputElement_4.value = startDate_4;
endDateInputElement_4.value = endDate_4;
jobDescriptionInputElement_4.value = description_4;

if (position_4 !== null) {
  document.getElementById('formPosition_4').innerHTML = position_4;
}
if (employer_4 !== null) {
  document.getElementById('formEmployer_4').innerHTML = employer_4;
}

if (startDate_4 !== null) {
  document.getElementById('formStartDate_4').innerHTML = startDate_4;
}

if (endDate_4 !== null) {
  document.getElementById('formEndDate_4').innerHTML = endDate_4;
}
if (description_4 !== null) {
  document.getElementById('formDescription_4').innerHTML = description_4;
}
