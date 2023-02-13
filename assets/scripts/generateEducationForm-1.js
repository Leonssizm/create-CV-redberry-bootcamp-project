const educationForm_1 = document.getElementById('education_form_1');
const educationFormDisplay_1 = document.getElementById('educationInfoForm_1');
const educationInputElement_1 = document.getElementById('educationInput_1');
let qualificationSelectElement_1 = document.getElementById('qualification_1');
const endDateInputElement_1 = document.getElementById('endDateInput_1');
const descriptionInputElement_1 = document.getElementById('descriptionInput_1');

educationForm_1.style.display = 'none';
educationFormDisplay_1.style.display = 'none';

function displayForm_1() {
  educationForm_1.style.display = 'block';
  educationFormDisplay_1.style.display = 'block';
}

function generateNewForm_1() {
  displayForm_1();
}
fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(degreesData => {
    degreesData.forEach(degree => {
      qualificationSelectElement_1.innerHTML += `
        <option value="${degree.id}" id="${degree.id}">${degree.title}</option>
        `;
      degrees.push(degree);
    });

    qualificationSelectElement_1.value = sessionStorage.getItem('degree_1');
    validateQualificationSelect_1();

    document.getElementById('formQualification_1').innerHTML = degreesData.find(
      degreeName => sessionStorage.getItem('degree_1') == degreeName.id
    ).title;
  });

educationInputElement_1.addEventListener('input', handleEducationInput_1);
// qualificationSelectElement_1.addEventListener('input', handleQualificationSelect_1);
qualificationSelectElement_1.addEventListener(
  'click',
  handleQualificationSelect_1
);
endDateInputElement_1.addEventListener('input', handleEndDateInput_1);
endDateInputElement_1.addEventListener('click', handleEndDateInput_1);
descriptionInputElement_1.addEventListener('input', handleDescriptionInput_1);

function handleEducationInput_1() {
  let educationInputValue = educationInputElement_1.value;
  let formEducation = document.getElementById('formEducation_1');
  validateEducationInput_1();
  formEducation.innerHTML = educationInputValue + ',';
  sessionStorage.setItem('education_1', educationInputElement_1.value);
}

function handleQualificationSelect_1() {
  let qualificationSelectValue = qualificationSelectElement_1.value;
  let formQualification = document.getElementById('formQualification_1');
  validateQualificationSelect_1();

  if (qualificationSelectValue === '') {
    formQualification.innerHTML = '';
  } else {
    let degreesSearch = degrees.find(
      degree => degree.id == qualificationSelectValue
    ).title;
    formQualification.innerHTML = degreesSearch;
  }
  sessionStorage.setItem('degree_1', qualificationSelectElement_1.value);
}

function handleEndDateInput_1() {
  let educationEndDateInForm = document.getElementById(
    'formEducationEndDate_1'
  );
  let endDateInputValue = endDateInputElement_1.value;
  validateEndDateInput_1();
  educationEndDateInForm.innerHTML = endDateInputValue;
  sessionStorage.setItem('educationEndDate_1', endDateInputElement_1.value);
}

function handleDescriptionInput_1() {
  let educationDescriptionForm = document.getElementById(
    'formEducationDescription_1'
  );
  let educationDescriptionValue = descriptionInputElement_1.value;
  validateEducationDescriptionInput_1();
  educationDescriptionForm.innerHTML = educationDescriptionValue;
  sessionStorage.setItem(
    'educationDescription_1',
    descriptionInputElement_1.value
  );
}

// Validate Inputs:

function validateEducationInput_1() {
  let educationInputIsValid = true;
  let educationInputValue = educationInputElement_1.value.trim();
  let educationInputErrorImg = document.getElementById('educationErrorImg_1');
  if (
    !isFilled(educationInputValue) ||
    !lengthIsLonger(educationInputValue, 2)
  ) {
    educationInputIsValid = false;
    educationInputErrorImg.style.marginLeft = '15px';
    educationInputElement_1.classList.remove('validatedCheckLargeInputs');
    educationInputErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(educationInputElement_1, 'მინიმუმ 2 სიმბოლო', 'educationLabel_1');
  } else {
    educationInputElement_1.classList.add('validatedCheckLargeInputs');
    educationInputErrorImg.removeAttribute('src');
    setSuccess(
      educationInputElement_1,
      'მინიმუმ 2 სიმბოლო',
      'educationLabel_1'
    );
  }
  return educationInputIsValid;
}

function validateQualificationSelect_1() {
  let qualificationSelectValue = qualificationSelectElement_1.value;
  let qualificationSelectIsValid = true;
  let qualificationErrorImg = document.getElementById(
    'qualificationErrorImg_1'
  );
  if (qualificationSelectValue === '') {
    qualificationErrorImg.style.marginTop = '10px';
    qualificationErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    qualificationSelectIsValid = false;
    qualificationSelectElement_1.style.borderColor = '#E52F2F';
    setError(qualificationSelectElement_1, '', 'qualificationLabel_1');
  } else {
    qualificationSelectElement_1.style.borderColor = '#98e37e';
    qualificationErrorImg.removeAttribute('src');
    setSuccess(qualificationSelectElement_1, '', 'qualificationLabel_1');
  }
  return qualificationSelectIsValid;
}
function validateEndDateInput_1() {
  let endDateInputIsValid = true;
  let endDateInputValue = endDateInputElement_1.value;
  const endDateErrorImg = document.getElementById('endDateErrorImg_1');
  if (!isFilled(endDateInputValue)) {
    setError(endDateInputElement_1, '', 'endDateLabel_1');
    endDateErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    endDateErrorImg.style.margin = '15px 0 0 15px';
  } else {
    endDateErrorImg.removeAttribute('src');
    setSuccess(endDateInputElement_1, '', 'endDateLabel_1');
  }

  return endDateInputIsValid;
}

function validateEducationDescriptionInput_1() {
  let educationDescriptionInputIsValid = true;
  let descriptionValue = descriptionInputElement_1.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg_1');
  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    educationDescriptionInputIsValid = false;
    descriptionInputElement_1.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    descriptionErrorImg.style.marginLeft = '10px;';
    descriptionInputElement_1.classList.remove('validatedCheckLargeInputs');
    setError(descriptionInputElement_1, '', 'descriptionLabel_1');
  } else {
    descriptionInputElement_1.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    setSuccess(descriptionInputElement_1, '', 'descriptionLabel_1');
  }

  return educationDescriptionInputIsValid;
}

// When form is added & page is reloaded data saved in sessionStorage is displayed

educationInputElement_1.value = sessionStorage.getItem('education_1');
qualificationSelectElement_1.value = sessionStorage.getItem('degree_1');
endDateInputElement_1.value = sessionStorage.getItem('educationEndDate_1');
descriptionInputElement_1.value = sessionStorage.getItem(
  'educationDescription_1'
);

if (sessionStorage.getItem('education_1') !== null) {
  document.getElementById('formEducation_1').innerHTML =
    sessionStorage.getItem('education_1') + ',';
}
if (sessionStorage.getItem('degree_1') !== null) {
  document.getElementById('formQualification_1').innerHTML =
    sessionStorage.getItem('degree_1');
}

if (sessionStorage.getItem('educationEndDate_1') !== null) {
  document.getElementById('formEducationEndDate_1').innerHTML =
    sessionStorage.getItem('educationEndDate_1');
}

if (sessionStorage.getItem('educationDescription_1') !== null) {
  document.getElementById('formEducationDescription_1').innerHTML =
    sessionStorage.getItem('educationDescription_1');
}
