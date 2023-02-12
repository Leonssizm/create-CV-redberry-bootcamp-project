const educationForm_3 = document.getElementById('education_form_3');
const educationFormDisplay_3 = document.getElementById('educationInfoForm_3');
const educationInputElement_3 = document.getElementById('educationInput_3');
let qualificationSelectElement_3 = document.getElementById('qualification_3');
const endDateInputElement_3 = document.getElementById('endDateInput_3');
const descriptionInputElement_3 = document.getElementById('descriptionInput_3');

educationForm_3.style.display = 'none';
educationFormDisplay_3.style.display = 'none';

function displayForm_3() {
  educationForm_3.style.display = 'block';
  educationFormDisplay_3.style.display = 'block';
}

function generateNewForm_3() {
  displayForm_3();
}
fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(degreesData => {
    degreesData.forEach(degree => {
      qualificationSelectElement_3.innerHTML += `
          <option value="${degree.id}" id="${degree.id}">${degree.title}</option>
          `;
      qualificationSelectElement_3.value = sessionStorage.getItem('degree_3');
      validateQualificationSelect_3();
    });
  });

educationInputElement_3.addEventListener('input', handleEducationInput_3);
// qualificationSelectElement_3.addEventListener('input', handleQualificationSelect_3);
qualificationSelectElement_3.addEventListener(
  'click',
  handleQualificationSelect_3
);
endDateInputElement_3.addEventListener('input', handleEndDateInput_3);
endDateInputElement_3.addEventListener('click', handleEndDateInput_3);
descriptionInputElement_3.addEventListener('input', handleDescriptionInput_3);

function handleEducationInput_3() {
  let educationInputValue = educationInputElement_3.value;
  let formEducation = document.getElementById('formEducation_3');
  validateEducationInput_3();
  formEducation.innerHTML = educationInputValue + ',';
  sessionStorage.setItem('education_3', educationInputElement_3.value);
}

function handleQualificationSelect_3() {
  let qualificationSelectValue = qualificationSelectElement_3.value;
  let formQualification = document.getElementById('formQualification_3');
  validateQualificationSelect_3();

  if (qualificationSelectValue === '') {
    formQualification.innerHTML = '';
  } else {
    let degreesSearch = degrees.find(
      degree => degree.id == qualificationSelectValue
    ).title;
    formQualification.innerHTML = degreesSearch;
  }
  sessionStorage.setItem('degree_3', qualificationSelectElement_3.value);
}

function handleEndDateInput_3() {
  let educationEndDateInForm = document.getElementById(
    'formEducationEndDate_3'
  );
  let endDateInputValue = endDateInputElement_3.value;
  validateEndDateInput_3();
  educationEndDateInForm.innerHTML = endDateInputValue;
  sessionStorage.setItem('educationEndDate_3', endDateInputElement_3.value);
}

function handleDescriptionInput_3() {
  let educationDescriptionForm = document.getElementById(
    'formEducationDescription_3'
  );
  let educationDescriptionValue = descriptionInputElement_3.value;
  validateEducationDescriptionInput_3();
  educationDescriptionForm.innerHTML = educationDescriptionValue;
  sessionStorage.setItem(
    'educationDescription_3',
    descriptionInputElement_3.value
  );
}

// Validate Inputs:

function validateEducationInput_3() {
  let educationInputIsValid = true;
  let educationInputValue = educationInputElement_3.value.trim();
  let educationInputErrorImg = document.getElementById('educationErrorImg_3');
  if (
    !isFilled(educationInputValue) ||
    !lengthIsLonger(educationInputValue, 2)
  ) {
    educationInputIsValid = false;
    educationInputErrorImg.style.marginLeft = '15px';
    educationInputElement_3.classList.remove('validatedCheckLargeInputs');
    educationInputErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(educationInputElement_3, 'მინიმუმ 2 სიმბოლო', 'educationLabel_3');
  } else {
    educationInputElement_3.classList.add('validatedCheckLargeInputs');
    educationInputErrorImg.removeAttribute('src');
    setSuccess(
      educationInputElement_3,
      'მინიმუმ 2 სიმბოლო',
      'educationLabel_3'
    );
  }
  return educationInputIsValid;
}

function validateQualificationSelect_3() {
  let qualificationSelectValue = qualificationSelectElement_3.value;
  let qualificationSelectIsValid = true;
  let qualificationErrorImg = document.getElementById(
    'qualificationErrorImg_3'
  );
  if (qualificationSelectValue === '') {
    qualificationErrorImg.style.marginTop = '10px';
    qualificationErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    qualificationSelectIsValid = false;
    qualificationSelectElement_3.style.borderColor = '#E52F2F';
    setError(qualificationSelectElement_3, '', 'qualificationLabel_3');
  } else {
    qualificationSelectElement_3.style.borderColor = '#98e37e';
    qualificationErrorImg.removeAttribute('src');
    setSuccess(qualificationSelectElement_3, '', 'qualificationLabel_3');
  }
  return qualificationSelectIsValid;
}
function validateEndDateInput_3() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_3.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_3');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_3, '', 'endDateLabel_3');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 15px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_3, '', 'endDateLabel_3');
  }

  return endDateInputIsValid;
}

function validateEducationDescriptionInput_3() {
  let educationDescriptionInputIsValid = true;
  let descriptionValue = descriptionInputElement_3.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_3');
  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    educationDescriptionInputIsValid = false;
    descriptionInputElement_3.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    descriptionErrorImg.style.marginLeft = '10px;';
    descriptionInputElement_3.classList.remove('validatedCheckLargeInputs');
    setError(descriptionInputElement_3, '', 'descriptionLabel_3');
  } else {
    descriptionInputElement_3.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    setSuccess(descriptionInputElement_3, '', 'descriptionLabel_3');
  }

  return educationDescriptionInputIsValid;
}

// When form is added & page is reloaded data saved in sessionStorage is displayed

educationInputElement_3.value = sessionStorage.getItem('education_3');
qualificationSelectElement_3.value = sessionStorage.getItem('degree_3');
endDateInputElement_3.value = sessionStorage.getItem('educationEndDate_3');
descriptionInputElement_3.value = sessionStorage.getItem(
  'educationDescription_3'
);

if (sessionStorage.getItem('education_3') !== null) {
  document.getElementById('formEducation_3').innerHTML =
    sessionStorage.getItem('education_3');
}
if (sessionStorage.getItem('degree_3') !== null) {
  document.getElementById('formQualification_3').innerHTML =
    sessionStorage.getItem('degree_3');
}

if (sessionStorage.getItem('educationEndDate_3') !== null) {
  document.getElementById('formEducationEndDate_3').innerHTML =
    sessionStorage.getItem('educationEndDate_3');
}

if (sessionStorage.getItem('educationDescription_3') !== null) {
  document.getElementById('formEducationDescription_3').innerHTML =
    sessionStorage.getItem('educationDescription_3');
}
