const positionInputElement = document.getElementById('positionInput');
const employerInputElement = document.getElementById('employerInput');
const startDateInputElement = document.getElementById('startDateInput');
const endDateInputElement = document.getElementById('endDateInput');
const jobDescriptionInputElement = document.getElementById('descriptionInput');

const generateNewFormBtn = document.getElementById('generateNewFormBtn');

let experienceInfoHeader = document.getElementById('experienceInfoHeader');
let previousPageButton = document.getElementById('backToPreviousPageBtn');
let nextPageButton = document.getElementById('nextPageButton');
experienceInfoHeader.innerHTML = 'გამოცდილება'.toUpperCase();
previousPageButton.innerHTML = 'უკან'.toUpperCase();
nextPageButton.innerHTML = 'შემდეგი'.toUpperCase();

// EventListeners for runtime validation

positionInputElement.addEventListener('input', handlePositionInput);
employerInputElement.addEventListener('input', handleEmployerInput);
startDateInputElement.addEventListener('click', handleStartDateInput);
startDateInputElement.addEventListener('input', handleStartDateInput);
endDateInputElement.addEventListener('click', handleEndDateInput);
endDateInputElement.addEventListener('input', handleEndDateInput);
jobDescriptionInputElement.addEventListener('click', handleDescriptionInput);
jobDescriptionInputElement.addEventListener('input', handleDescriptionInput);

// functions to check, update & record input information

function handlePositionInput() {
  let formPosition = document.getElementById('formPosition');
  let experienceFormHeader = document.getElementById(
    'experienceFormInfoHeader'
  );
  validatePositionInput();
  if (positionInputElement.value.length > 0) {
    formPosition.innerHTML = positionInputElement.value + ',';
    experienceFormHeader.innerHTML = 'გამოცდილება'.toUpperCase();
  } else {
    formPosition.innerHTML = '';
  }
}
function handleEmployerInput() {
  let formEmployer = document.getElementById('formEmployer');
  validateEmployerInput();
  formEmployer.innerHTML = employerInputElement.value;
}

function handleStartDateInput() {
  let formStartDate = document.getElementById('formStartDate');
  validateStartDateInput();
  formStartDate.innerHTML = startDateInputElement.value;
}
function handleEndDateInput() {
  let formEndDate = document.getElementById('formEndDate');
  let dash = document.getElementById('dash');
  validateEndDateInput();
  formEndDate.innerHTML = endDateInputElement.value;
  if (endDateInputElement.value.length > 0) {
    dash.innerHTML = '-';
  }
}

function handleDescriptionInput() {
  let formDescription = document.getElementById('formDescription');
  validateDescriptionInput();
  formDescription.innerHTML = jobDescriptionInputElement.value;
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

function validateStartDateInput() {
  let startDateInputIsValid = true;
  let startDateInputValue = startDateInputElement.value;
  const startDateErrorImg = document.getElementById('startDateErrorImg');
  if (!isFilled(startDateInputValue)) {
    setError(startDateInputElement, '', 'startDateLabel');
    startDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
  } else {
    startDateErrorImg.removeAttribute('src');
    setSuccess(startDateInputElement, '', 'startDateLabel');
  }

  return startDateInputIsValid;
}
function validateEndDateInput() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement, '', 'endDateLabel');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement, '', 'endDateLabel');
  }

  return endDateInputIsValid;
}

function validateDescriptionInput() {
  let jobDescriptionInputIsValid = true;
  let descriptionValue = jobDescriptionInputElement.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg');
  if (!isFilled(descriptionValue)) {
    jobDescriptionInputIsValid = false;
    jobDescriptionInputElement.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    jobDescriptionInputElement.classList.remove('validatedCheckLargeInputs');
    setError(jobDescriptionInputElement, '', 'descriptionLabel');
  } else {
    jobDescriptionInputElement.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    jobDescriptionInputElement.classList.add('validatedCheckLargeInputs');
    setSuccess(jobDescriptionInputElement, '', 'descriptionLabel');
  }

  return jobDescriptionInputIsValid;
}
// When page is loaded, display part of previously Filled resume

let formNameElement = document.getElementById('formName');
let formSurnameElement = document.getElementById('formSurname');
const imageDisplay = document.getElementById('displayImage');
let formAboutMeElement = document.getElementById('formAbout');
let aboutMeFormLabel = document.getElementById('aboutMeFormLabel');
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

// add new forms

// generateNewFormBtn.addEventListener('click', () => {
//   amountOfFormsGenerated++;
//   localStorage.setItem(
//     'amountOfFormsGenerated',
//     JSON.stringify({ amountOfFormsGenerated })
//   );
//   generateNewForm();
//   window.location.reload();
// });
// let amountOfFormsGenerated = 0;
// let amountOfForms = JSON.parse(localStorage.getItem('amountOfFormsGenerated'));

window.onbeforeunload = function saveDataBeforeRefresh() {
  sessionStorage.setItem('position', positionInputElement.value);
  sessionStorage.setItem('employer', employerInputElement.value);
  sessionStorage.setItem('startDate', startDateInputElement.value);
  sessionStorage.setItem('endDate', endDateInputElement.value);
  sessionStorage.setItem('description', jobDescriptionInputElement.value);
};

let allGeneratedFormData = [];
window.onload = function () {
  let position = sessionStorage.getItem('position');
  let employer = sessionStorage.getItem('employer');
  let startDate = sessionStorage.getItem('startDate');
  let endDate = sessionStorage.getItem('endDate');
  let description = sessionStorage.getItem('description');
  positionInputElement.value = position;
  employerInputElement.value = employer;
  startDateInputElement.value = startDate;
  endDateInputElement.value = endDate;
  jobDescriptionInputElement.value = description;
  if (position !== null) {
    handlePositionInput();
    handleEmployerInput();
    handleStartDateInput();
    handleEndDateInput();
    handleDescriptionInput();
  }

  amountOfFormsGenerated = amountOfForms;

  // for (let i = 0; i < parseInt(amountOfForms); i++) {
  //   generateNewForm(i + 1);
  //   let position = JSON.parse(localStorage.getItem(`Form_${i + 1}_position`));
  //   let employer = JSON.parse(localStorage.getItem(`Form_${i + 1}_employer`));
  //   let startDate = JSON.parse(localStorage.getItem(`Form_${i + 1}_startDate`));
  //   let endDate = JSON.parse(localStorage.getItem(`Form_${i + 1}_endDate`));
  //   let description = JSON.parse(
  //     localStorage.getItem(`Form_${i + 1}_description`)
  //   );

  //   if (position !== null) {
  //     document.getElementById(`positionInput_${i + 1}`).value =
  //       position.positionInputValue;
  //     document.getElementById(`formPosition_${i + 1}`).innerHTML =
  //       position.positionInputValue;
  //   }
  //   if (employer !== null) {
  //     document.getElementById(`employerInput_${i + 1}`).value =
  //       employer.employerInputValue;
  //     document.getElementById(`formEmployer_${i + 1}`).innerHTML =
  //       employer.employerInputValue;
  //   }

  //   if (startDate !== null) {
  //     document.getElementById(`startDateInput_${i + 1}`).value =
  //       startDate.startDateInputValue;
  //     document.getElementById(`formStartDate_${i + 1}`).innerHTML =
  //       startDate.startDateInputValue;
  //   }
  //   if (endDate !== null) {
  //     document.getElementById(`endDateInput_${i + 1}`).value =
  //       endDate.endDateInputValue;
  //     document.getElementById(`formEndDate_${i + 1}`).innerHTML =
  //       endDate.endDateInputValue;
  //   }
  //   if (description !== null) {
  //     document.getElementById(`descriptionInput_${i + 1}`).value =
  //       description.descriptionInputValue;
  //     document.getElementById(`formDescription_${i + 1}`).innerHTML =
  //       description.descriptionInputValue;
  //   }
  // }
};

// manage navigating to previous and next page

previousPageButton.addEventListener('click', () => {
  window.location.href = './personal-info.html';
});

nextPageButton.addEventListener('click', () => {
  if (
    validatePositionInput() &&
    validateEmployerInput() &&
    validateStartDateInput() &&
    validateEndDateInput() &&
    validateDescriptionInput()
  ) {
    if (localStorage.getItem('experiences') == null) {
      localStorage.setItem('experiences', '[]');
    }

    let experiencesFromLocalStorage = JSON.parse(
      localStorage.getItem('experiences')
    );
    let data = {
      position: positionInputElement.value,
      employer: employerInputElement.value,
      start_date: startDateInputElement.value,
      due_date: endDateInputElement.value,
      description: jobDescriptionInputElement.value,
    };

    experiencesFromLocalStorage.push(data);
    localStorage.setItem(
      'experiences',
      JSON.stringify(experiencesFromLocalStorage)
    );
    window.location.href = './education-info.html';
  } else {
    return;
  }
});
