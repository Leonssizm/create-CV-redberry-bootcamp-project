const educationForm_4 = document.getElementById('education_form_4');
const educationFormDisplay_4 = document.getElementById('educationInfoForm_4');
const educationInputElement_4 = document.getElementById('educationInput_4');
let qualificationSelectElement_4 = document.getElementById('qualification_4');
const endDateInputElement_4 = document.getElementById('endDateInput_4');
const descriptionInputElement_4 = document.getElementById('descriptionInput_4');

educationForm_4.style.display = 'none';
educationFormDisplay_4.style.display = 'none';

function displayForm_4() {
  educationForm_4.style.display = 'block';
  educationFormDisplay_4.style.display = 'block';
}

function generateNewForm_4() {
  displayForm_4();
}
fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(degreesData => {
    degreesData.forEach(degree => {
      qualificationSelectElement_4.innerHTML += `
          <option value="${degree.id}" id="${degree.id}">${degree.title}</option>
          `;
      degrees.push(degree);
    });
  });

educationInputElement_4.addEventListener('input', handleEducationInput_4);
// qualificationSelectElement_4.addEventListener('input', handleQualificationSelect_4);
qualificationSelectElement_4.addEventListener(
  'click',
  handleQualificationSelect_4
);
endDateInputElement_4.addEventListener('input', handleEndDateInput_4);
endDateInputElement_4.addEventListener('click', handleEndDateInput_4);
descriptionInputElement_4.addEventListener('input', handleDescriptionInput_4);

function handleEducationInput_4() {
  let educationInputValue = educationInputElement_4.value;
  let formEducation = document.getElementById('formEducation_4');
  validateEducationInput_4();
  formEducation.innerHTML = educationInputValue + ',';
  sessionStorage.setItem('education_4', educationInputElement_4.value);
}

function handleQualificationSelect_4() {
  let qualificationSelectValue = qualificationSelectElement_4.value;
  let formQualification = document.getElementById('formQualification_4');
  validateQualificationSelect_4();

  if (qualificationSelectValue === '') {
    formQualification.innerHTML = '';
  } else {
    let degreesSearch = degrees.find(
      degree => degree.id == qualificationSelectValue
    ).title;
    formQualification.innerHTML = degreesSearch;
  }
  sessionStorage.setItem('degree_4', qualificationSelectElement_4.value);
}

function handleEndDateInput_4() {
  let educationEndDateInForm = document.getElementById(
    'formEducationEndDate_4'
  );
  let endDateInputValue = endDateInputElement_4.value;
  validateEndDateInput_4();
  educationEndDateInForm.innerHTML = endDateInputValue;
  sessionStorage.setItem('educationEndDate_4', endDateInputElement_4.value);
}

function handleDescriptionInput_4() {
  let educationDescriptionForm = document.getElementById(
    'formEducationDescription_4'
  );
  let educationDescriptionValue = descriptionInputElement_4.value;
  validateEducationDescriptionInput_4();
  educationDescriptionForm.innerHTML = educationDescriptionValue;
  sessionStorage.setItem(
    'educationDescription_4',
    descriptionInputElement_4.value
  );
}

// Validate Inputs:

function validateEducationInput_4() {
  let educationInputIsValid = true;
  let educationInputValue = educationInputElement_4.value.trim();
  let educationInputErrorImg = document.getElementById('educationErrorImg_4');
  if (
    !isFilled(educationInputValue) ||
    !lengthIsLonger(educationInputValue, 2)
  ) {
    educationInputIsValid = false;
    educationInputErrorImg.style.marginLeft = '15px';
    educationInputElement_4.classList.remove('validatedCheckLargeInputs');
    educationInputErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(educationInputElement_4, 'მინიმუმ 2 სიმბოლო', 'educationLabel_4');
  } else {
    educationInputElement_4.classList.add('validatedCheckLargeInputs');
    educationInputErrorImg.removeAttribute('src');
    setSuccess(
      educationInputElement_4,
      'მინიმუმ 2 სიმბოლო',
      'educationLabel_4'
    );
  }
  return educationInputIsValid;
}

function validateQualificationSelect_4() {
  let qualificationSelectValue = qualificationSelectElement_4.value;
  let qualificationSelectIsValid = true;
  let qualificationErrorImg = document.getElementById(
    'qualificationErrorImg_4'
  );
  if (qualificationSelectValue === '') {
    qualificationErrorImg.style.marginTop = '10px';
    qualificationErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    qualificationSelectIsValid = false;
    qualificationSelectElement_4.style.borderColor = '#E52F2F';
    setError(qualificationSelectElement_4, '', 'qualificationLabel_4');
  } else {
    qualificationSelectElement_4.style.borderColor = '#98e37e';
    qualificationErrorImg.removeAttribute('src');
    setSuccess(qualificationSelectElement_4, '', 'qualificationLabel_4');
  }
  return qualificationSelectIsValid;
}
function validateEndDateInput_4() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_4.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_4');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_4, '', 'endDateLabel_4');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 15px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_4, '', 'endDateLabel_4');
  }

  return endDateInputIsValid;
}

function validateEducationDescriptionInput_4() {
  let educationDescriptionInputIsValid = true;
  let descriptionValue = descriptionInputElement_4.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_4');
  if (!isFilled(descriptionValue)) {
    educationDescriptionInputIsValid = false;
    descriptionInputElement_4.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    descriptionErrorImg.style.marginLeft = '10px;';
    descriptionInputElement_4.classList.remove('validatedCheckLargeInputs');
    setError(descriptionInputElement_4, '', 'descriptionLabel_4');
  } else {
    descriptionInputElement_4.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    descriptionInputElement_4.classList.add('validatedCheckLargeInputs');
    setSuccess(descriptionInputElement_4, '', 'descriptionLabel_4');
  }

  return educationDescriptionInputIsValid;
}

// When form is added & page is reloaded data saved in sessionStorage is displayed

educationInputElement_4.value = sessionStorage.getItem('education_4');
qualificationSelectElement_4.value = sessionStorage.getItem('degree_4');
endDateInputElement_4.value = sessionStorage.getItem('educationEndDate_4');
descriptionInputElement_4.value = sessionStorage.getItem(
  'educationDescription_4'
);

if (sessionStorage.getItem('education_4') !== null) {
  document.getElementById('formEducation_4').innerHTML =
    sessionStorage.getItem('education_4');
}
if (sessionStorage.getItem('degree_4') !== null) {
  document.getElementById('formQualification_4').innerHTML =
    sessionStorage.getItem('degree_4');
}

if (sessionStorage.getItem('educationEndDate_4') !== null) {
  document.getElementById('formEducationEndDate_4').innerHTML =
    sessionStorage.getItem('educationEndDate_4');
}

if (sessionStorage.getItem('educationDescription_4') !== null) {
  document.getElementById('formEducationDescription_4').innerHTML =
    sessionStorage.getItem('educationDescription_4');
}
