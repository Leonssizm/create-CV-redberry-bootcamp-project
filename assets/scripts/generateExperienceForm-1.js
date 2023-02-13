const experienceForm_1 = document.getElementById('experience_form_1');
const experienceFormDisplay_1 = document.getElementById('experienceInfoForm_1');
const positionInputElement_1 = document.getElementById('positionInput_1');
const employerInputElement_1 = document.getElementById('employerInput_1');
const startDateInputElement_1 = document.getElementById('startDateInput_1');
const endDateInputElement_1 = document.getElementById('endDateInput_1');
const jobDescriptionInputElement_1 =
  document.getElementById('descriptionInput_1');
experienceForm_1.style.display = 'none';
experienceFormDisplay_1.style.display = 'none';

function displayForm_1() {
  experienceForm_1.style.display = 'block';
  experienceFormDisplay_1.style.display = 'block';
}

function generateNewForm_1() {
  displayForm_1();
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

positionInputElement_1.addEventListener('input', handlePositionInput_1);
employerInputElement_1.addEventListener('input', handleEmployerInput_1);
startDateInputElement_1.addEventListener('click', handleStartDateInput_1);
startDateInputElement_1.addEventListener('input', handleStartDateInput_1);
endDateInputElement_1.addEventListener('click', handleEndDateInput_1);
endDateInputElement_1.addEventListener('input', handleEndDateInput_1);
jobDescriptionInputElement_1.addEventListener(
  'click',
  handleDescriptionInput_1
);
jobDescriptionInputElement_1.addEventListener(
  'input',
  handleDescriptionInput_1
);

function handlePositionInput_1() {
  let formPosition = document.getElementById('formPosition_1');
  validatePositionInput_1();
  formPosition.innerHTML = positionInputElement_1.value;
  sessionStorage.setItem('position_1', positionInputElement_1.value);
}
function handleEmployerInput_1() {
  let formEmployer = document.getElementById('formEmployer_1');
  validateEmployerInput_1();
  formEmployer.innerHTML = employerInputElement_1.value;
  sessionStorage.setItem('employer_1', employerInputElement_1.value);
}

function handleStartDateInput_1() {
  let formStartDate = document.getElementById('formStartDate_1');
  validateStartDateInput_1();
  formStartDate.innerHTML = startDateInputElement_1.value;
  sessionStorage.setItem('startDate_1', startDateInputElement_1.value);
}
function handleEndDateInput_1() {
  let formEndDate = document.getElementById('formEndDate_1');
  let dash = document.getElementById('dash_1');
  validateEndDateInput_1();
  formEndDate.innerHTML = endDateInputElement_1.value;
  sessionStorage.setItem('endDate_1', endDateInputElement_1.value);
  if (endDateInputElement.value.length > 0) {
    dash.innerHTML = '-';
  }
}

function handleDescriptionInput_1() {
  let formDescription = document.getElementById('formDescription_1');
  validateDescriptionInput_1();
  formDescription.innerHTML = jobDescriptionInputElement_1.value;
  sessionStorage.setItem('description_1', jobDescriptionInputElement_1.value);
}

// input Validation Functions:

function validatePositionInput_1() {
  let positionInputIsValid = true;
  let positionInputValue = positionInputElement_1.value.trim();
  const positionErrorImgElement = document.getElementById('positionErrorImg_1');
  if (!isFilled(positionInputValue) || !lengthIsLonger(positionInputValue, 2)) {
    positionInputIsValid = false;
    positionInputElement_1.classList.remove('validatedCheckLargeInputs');
    positionErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    positionErrorImgElement.style.margin = '0px 0px 30px 15px';
    setError(positionInputElement_1, 'მინიმუმ 2 სიმბოლო', 'positionLabel_1');
  } else {
    positionErrorImgElement.removeAttribute('src');
    positionInputElement_1.classList.add('validatedCheckLargeInputs');
    setSuccess(positionInputElement_1, 'მინიმუმ 2 სიმბოლო', 'positionLabel_1');
  }

  return positionInputIsValid;
}

function validateEmployerInput_1() {
  let employerInputIsValid = true;
  let employerInputValue = employerInputElement_1.value.trim();
  const employerErrorImgElement = document.getElementById('employerErrorImg_1');
  if (!isFilled(employerInputValue) || !lengthIsLonger(employerInputValue, 2)) {
    employerInputIsValid = false;
    employerInputElement_1.classList.remove('validatedCheckLargeInputs');
    employerErrorImgElement.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    employerErrorImgElement.style.margin = '0px 0px 0px 15px ';
    setError(employerInputElement_1, 'მინიმუმ 2 სიმბოლო', 'employerLabel_1');
  } else {
    employerErrorImgElement.removeAttribute('src');
    employerInputElement_1.classList.add('validatedCheckLargeInputs');
    setSuccess(employerInputElement_1, 'მინიმუმ 2 სიმბოლო', 'employerLabel_1');
  }

  return employerInputIsValid;
}

function validateStartDateInput_1() {
  let startDateInputIsValid = true;
  let startDateInputValue = startDateInputElement_1.value;
  const startDateErrorImg = document.getElementById('startDateErrorImg_1');
  if (!isFilled(startDateInputValue)) {
    setError(startDateInputElement_1, '', 'startDateLabel_1');
    startDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    startDateErrorImg.style.margin = '15px 0 0 0';
  } else {
    startDateErrorImg.removeAttribute('src');
    setSuccess(startDateInputElement_1, '', 'startDateLabel_1');
  }

  return startDateInputIsValid;
}
function validateEndDateInput_1() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_1.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_1');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_1, '', 'endDateLabel_1');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 10px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_1, '', 'endDateLabel_1');
  }

  return endDateInputIsValid;
}

function validateDescriptionInput_1() {
  let jobDescriptionInputIsValid = true;
  let descriptionValue = jobDescriptionInputElement_1.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_1');

  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    jobDescriptionInputIsValid = false;
    jobDescriptionInputElement_1.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    jobDescriptionInputElement_1.classList.remove('validatedCheckLargeInputs');
    descriptionErrorImg.style.margin = '0px 0px 0px 10px';
    setError(jobDescriptionInputElement_1, '', 'descriptionLabel_1');
  } else {
    jobDescriptionInputElement_1.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    setSuccess(jobDescriptionInputElement_1, '', 'descriptionLabel_1');
  }
  return jobDescriptionInputIsValid;
}

///////////////////////////////////////////////////////////

let position_1 = sessionStorage.getItem('position_1');
let employer_1 = sessionStorage.getItem('employer_1');
let startDate_1 = sessionStorage.getItem('startDate_1');
let endDate_1 = sessionStorage.getItem('endDate_1');
let description_1 = sessionStorage.getItem('description_1');
positionInputElement_1.value = position_1;
employerInputElement_1.value = employer_1;
startDateInputElement_1.value = startDate_1;
endDateInputElement_1.value = endDate_1;
jobDescriptionInputElement_1.value = description_1;

if (position_1 !== null) {
  document.getElementById('formPosition_1').innerHTML = position_1;
}
if (employer_1 !== null) {
  document.getElementById('formEmployer_1').innerHTML = employer_1;
}

if (startDate_1 !== null) {
  document.getElementById('formStartDate_1').innerHTML = startDate_1;
}

if (endDate_1 !== null) {
  document.getElementById('formEndDate_1').innerHTML = endDate_1;
}
if (description_1 !== null) {
  document.getElementById('formDescription_1').innerHTML = description_1;
}
