const educationForm_2 = document.getElementById('education_form_2');
const educationFormDisplay_2 = document.getElementById('educationInfoForm_2');
const educationInputElement_2 = document.getElementById('educationInput_2');
let qualificationSelectElement_2 = document.getElementById('qualification_2');
const endDateInputElement_2 = document.getElementById('endDateInput_2');
const descriptionInputElement_2 = document.getElementById('descriptionInput_2');

educationForm_2.style.display = 'none';
educationFormDisplay_2.style.display = 'none';

function displayForm_2() {
  educationForm_2.style.display = 'block';
  educationFormDisplay_2.style.display = 'block';
}

function generateNewForm_2() {
  displayForm_2();
}
fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(degreesData => {
    degreesData.forEach(degree => {
      qualificationSelectElement_2.innerHTML += `
        <option value="${degree.id}" id="${degree.id}">${degree.title}</option>
        `;
    });
    qualificationSelectElement_2.value = sessionStorage.getItem('degree_2');
    validateQualificationSelect_2();
    // document.getElementById('formQualification_2').innerText = degreesData.find(
    //   degreeName => sessionStorage.getItem('degree_2') == degreeName.id
    // ).title;
  });

educationInputElement_2.addEventListener('input', handleEducationInput_2);
// qualificationSelectElement_2.addEventListener('input', handleQualificationSelect_2);
qualificationSelectElement_2.addEventListener(
  'click',
  handleQualificationSelect_2
);
endDateInputElement_2.addEventListener('input', handleEndDateInput_2);
endDateInputElement_2.addEventListener('click', handleEndDateInput_2);
descriptionInputElement_2.addEventListener('input', handleDescriptionInput_2);

function handleEducationInput_2() {
  let educationInputValue = educationInputElement_2.value;
  let formEducation = document.getElementById('formEducation_2');
  validateEducationInput_2();
  formEducation.innerHTML = educationInputValue + ',';
  sessionStorage.setItem('education_2', educationInputElement_2.value);
}

function handleQualificationSelect_2() {
  let qualificationSelectValue = qualificationSelectElement_2.value;
  let formQualification = document.getElementById('formQualification_2');
  validateQualificationSelect_2();

  if (qualificationSelectValue === '') {
    formQualification.innerHTML = '';
  }
  sessionStorage.setItem('degree_2', qualificationSelectElement_2.value);
}

function handleEndDateInput_2() {
  let educationEndDateInForm = document.getElementById(
    'formEducationEndDate_2'
  );
  let endDateInputValue = endDateInputElement_2.value;
  validateEndDateInput_2();
  educationEndDateInForm.innerHTML = endDateInputValue;
  sessionStorage.setItem('educationEndDate_2', endDateInputElement_2.value);
}

function handleDescriptionInput_2() {
  let educationDescriptionForm = document.getElementById(
    'formEducationDescription_2'
  );
  let educationDescriptionValue = descriptionInputElement_2.value;
  validateEducationDescriptionInput_2();
  educationDescriptionForm.innerHTML = educationDescriptionValue;
  sessionStorage.setItem(
    'educationDescription_2',
    descriptionInputElement_2.value
  );
}

// Validate Inputs:

function validateEducationInput_2() {
  let educationInputIsValid = true;
  let educationInputValue = educationInputElement_2.value.trim();
  let educationInputErrorImg = document.getElementById('educationErrorImg_2');
  if (
    !isFilled(educationInputValue) ||
    !lengthIsLonger(educationInputValue, 2)
  ) {
    educationInputIsValid = false;
    educationInputErrorImg.style.marginLeft = '15px';
    educationInputElement_2.classList.remove('validatedCheckLargeInputs');
    educationInputErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(educationInputElement_2, 'მინიმუმ 2 სიმბოლო', 'educationLabel_2');
  } else {
    educationInputElement_2.classList.add('validatedCheckLargeInputs');
    educationInputErrorImg.removeAttribute('src');
    setSuccess(
      educationInputElement_2,
      'მინიმუმ 2 სიმბოლო',
      'educationLabel_2'
    );
  }
  return educationInputIsValid;
}

function validateQualificationSelect_2() {
  let qualificationSelectValue = qualificationSelectElement_2.value;
  let qualificationSelectIsValid = true;
  let qualificationErrorImg = document.getElementById(
    'qualificationErrorImg_2'
  );
  if (qualificationSelectValue === '') {
    qualificationErrorImg.style.marginTop = '10px';
    qualificationErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    qualificationSelectIsValid = false;
    qualificationSelectElement_2.style.borderColor = '#E52F2F';
    setError(qualificationSelectElement_2, '', 'qualificationLabel_2');
  } else {
    qualificationSelectElement_2.style.borderColor = '#98e37e';
    qualificationErrorImg.removeAttribute('src');
    setSuccess(qualificationSelectElement_2, '', 'qualificationLabel_2');
  }
  return qualificationSelectIsValid;
}
function validateEndDateInput_2() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_2.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_2');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_2, '', 'endDateLabel_2');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 15px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_2, '', 'endDateLabel_2');
  }

  return endDateInputIsValid;
}

function validateEducationDescriptionInput_2() {
  let educationDescriptionInputIsValid = true;
  let descriptionValue = descriptionInputElement_2.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_2');
  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    educationDescriptionInputIsValid = false;
    descriptionInputElement_2.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    descriptionErrorImg.style.marginLeft = '10px;';
    descriptionInputElement_2.classList.remove('validatedCheckLargeInputs');
    setError(descriptionInputElement_2, '', 'descriptionLabel_2');
  } else {
    descriptionInputElement_2.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    setSuccess(descriptionInputElement_2, '', 'descriptionLabel_2');
  }

  return educationDescriptionInputIsValid;
}

// When form is added & page is reloaded data saved in sessionStorage is displayed

educationInputElement_2.value = sessionStorage.getItem('education_2');
qualificationSelectElement_2.value = sessionStorage.getItem('degree_2');
endDateInputElement_2.value = sessionStorage.getItem('educationEndDate_2');
descriptionInputElement_2.value = sessionStorage.getItem(
  'educationDescription_2'
);

if (sessionStorage.getItem('education_2') !== null) {
  document.getElementById('formEducation_2').innerHTML =
    sessionStorage.getItem('education_2');
}
if (sessionStorage.getItem('degree_2') !== null) {
  document.getElementById('formQualification_2').innerHTML =
    sessionStorage.getItem('degree_2');
}

if (sessionStorage.getItem('educationEndDate_2') !== null) {
  document.getElementById('formEducationEndDate_2').innerHTML =
    sessionStorage.getItem('educationEndDate_2');
}

if (sessionStorage.getItem('educationDescription_2') !== null) {
  document.getElementById('formEducationDescription_2').innerHTML =
    sessionStorage.getItem('educationDescription_2');
}
