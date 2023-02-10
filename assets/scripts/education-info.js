let educationInfoHeader = document.getElementById('educationInfoHeader');
let perviousPageBtn = document.getElementById('backToPreviousPageBtn');
let nextPageBtn = document.getElementById('nextPageButton');
let degrees = [];
const educationInputElement = document.getElementById('educationInput');
let qualificationSelectElement = document.getElementById('qualification');
const endDateInputElement = document.getElementById('endDateInput');
const descriptionInputElement = document.getElementById('descriptionInput');
educationInfoHeader.innerHTML = 'განათლება'.toUpperCase();
perviousPageBtn.innerHTML = 'უკან'.toUpperCase();
nextPageBtn.innerHTML = 'დასრულება'.toUpperCase();

fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(degreesData => {
    degreesData.forEach(degree => {
      qualificationSelectElement.innerHTML += `
        <option value="${degree.id}" id="${degree.id}">${degree.title}</option>
        `;
      degrees.push(degree);
    });
  });

educationInputElement.addEventListener('input', handleEducationInput);
// qualificationSelectElement.addEventListener('input', handleQualificationSelect);
qualificationSelectElement.addEventListener('click', handleQualificationSelect);
endDateInputElement.addEventListener('input', handleEndDateInput);
endDateInputElement.addEventListener('click', handleEndDateInput);
descriptionInputElement.addEventListener('input', handleDescriptionInput);

function handleEducationInput() {
  let educationFormHeader = document.getElementById('educationFormInfoHeader');
  educationFormHeader.innerHTML = 'განათლება'.toUpperCase();
  let educationInputValue = educationInputElement.value;
  let formEducation = document.getElementById('formEducation');
  validateEducationInput();
  formEducation.innerHTML = educationInputValue + ',';
}

function handleQualificationSelect() {
  let qualificationSelectValue = qualificationSelectElement.value;
  let formQualification = document.getElementById('formQualification');
  validateQualificationSelect();

  if (qualificationSelectValue === '') {
    formQualification.innerHTML = '';
  } else {
    let degreesSearch = degrees.find(
      degree => degree.id == qualificationSelectValue
    ).title;
    formQualification.innerHTML = degreesSearch;
  }
}

function handleEndDateInput() {
  let educationEndDateInForm = document.getElementById('formEducationEndDate');
  let endDateInputValue = endDateInputElement.value;
  validateEndDateInput();
  educationEndDateInForm.innerHTML = endDateInputValue;
}

function handleDescriptionInput() {
  let educationDescriptionForm = document.getElementById(
    'formEducationDescription'
  );
  let educationDescriptionValue = descriptionInputElement.value;
  validateEducationDescriptionInput();
  educationDescriptionForm.innerHTML = educationDescriptionValue;
}

// validation Logic

function validateEducationInput() {
  let educationInputIsValid = true;
  let educationInputValue = educationInputElement.value.trim();
  let educationInputErrorImg = document.getElementById('educationErrorImg');
  if (
    !isFilled(educationInputValue) ||
    !lengthIsLonger(educationInputValue, 2)
  ) {
    educationInputIsValid = false;
    educationInputErrorImg.style.marginLeft = '15px';
    educationInputElement.classList.remove('validatedCheckLargeInputs');
    educationInputErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    setError(educationInputElement, 'მინიმუმ 2 სიმბოლო', 'educationLabel');
  } else {
    educationInputElement.classList.add('validatedCheckLargeInputs');
    educationInputErrorImg.removeAttribute('src');
    setSuccess(educationInputElement, 'მინიმუმ 2 სიმბოლო', 'educationLabel');
  }
  return educationInputIsValid;
}

function validateQualificationSelect() {
  let qualificationSelectValue = qualificationSelectElement.value;
  let qualificationSelectIsValid = true;
  let qualificationErrorImg = document.getElementById('qualificationErrorImg');
  if (qualificationSelectValue === '') {
    qualificationErrorImg.style.marginTop = '10px';
    qualificationErrorImg.setAttribute(
      'src',
      './assets/icons/error-warning.svg'
    );
    qualificationSelectIsValid = false;
    qualificationSelectElement.style.borderColor = '#E52F2F';
    setError(qualificationSelectElement, '', 'qualificationLabel');
  } else {
    qualificationSelectElement.style.borderColor = '#98e37e';
    qualificationErrorImg.removeAttribute('src');
    setSuccess(qualificationSelectElement, '', 'qualificationLabel');
  }
  return qualificationSelectIsValid;
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

function validateEducationDescriptionInput() {
  let educationDescriptionInputIsValid = true;
  let descriptionValue = descriptionInputElement.value;
  let descriptionErrorImg = document.getElementById('descriptionErrorImg');
  if (!isFilled(descriptionValue)) {
    jobDescriptionInputIsValid = false;
    descriptionInputElement.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    descriptionInputElement.classList.remove('validatedCheckLargeInputs');
    setError(descriptionInputElement, '', 'descriptionLabel');
  } else {
    descriptionInputElement.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
    descriptionInputElement.classList.add('validatedCheckLargeInputs');
    setSuccess(descriptionInputElement, '', 'descriptionLabel');
  }

  return educationDescriptionInputIsValid;
}

//   When page is loaded, previous form values are displayed;
let formNameElement = document.getElementById('formName');
let formSurnameElement = document.getElementById('formSurname');
const imageDisplay = document.getElementById('displayImage');
let formAboutMeElement = document.getElementById('formAbout');
let aboutMeFormLabel = document.getElementById('aboutMeFormLabel');
let formEmailSignImg = document.getElementById('formEmailSign');
let formEmailElement = document.getElementById('formEmail');
let formTelephoneSignImg = document.getElementById('formTelephoneSign');
let formPhoneElement = document.getElementById('formNumber');
let experienceInfoHeader = document.getElementById('experienceFormInfoHeader');
let formPositionElement = document.getElementById('formPosition');
let formEmployerElement = document.getElementById('formEmployer');
let formStartDateElement = document.getElementById('formStartDate');
let formEndDateElement = document.getElementById('formEndDate');
let formDescriptionElement = document.getElementById('formDescription');

let personalInfo = JSON.parse(localStorage.getItem('personal-info'));
let image = localStorage.getItem('personal-image');
let experiences = JSON.parse(localStorage.getItem('experiences'));

formNameElement.innerHTML = personalInfo.name.toUpperCase();
formSurnameElement.innerHTML = personalInfo.surname.toUpperCase();
formAboutMeElement.innerHTML = personalInfo.about_me;
formEmailElement.innerHTML = personalInfo.email;
formPhoneElement.innerHTML = personalInfo.phone_number;
imageDisplay.style.backgroundImage = `url(${image})`;
aboutMeFormLabel.innerHTML = 'ჩემ შესახებ'.toUpperCase();
formEmailSignImg.setAttribute('src', './assets/icons/atSign.svg');
formTelephoneSignImg.setAttribute('src', './assets/icons/phone.svg');
experienceInfoHeader.innerHTML = 'გამოცდილება'.toUpperCase();
formPositionElement.innerHTML = experiences.position;
formEmployerElement.innerHTML = experiences.employer;
formStartDateElement.innerHTML = experiences.start_date;
formEndDateElement.innerHTML = experiences.due_date;
formDescriptionElement.innerHTML = experiences.description;

window.onbeforeunload = function saveDataBeforeRefresh() {
  sessionStorage.setItem('education', educationInputElement.value);
  sessionStorage.setItem('degree', qualificationSelectElement.value);
  sessionStorage.setItem('endDate', endDateInputElement.value);
  sessionStorage.setItem('description', descriptionInputElement.value);
};

window.onload = function () {
  educationInputElement.value = sessionStorage.getItem('education');
  qualificationSelectElement.value = sessionStorage.getItem('degree');
  endDateInputElement.value = sessionStorage.getItem('endDate');
  descriptionInputElement.value = sessionStorage.getItem('description');
  if (sessionStorage.getItem('education') !== null) {
    validateEducationInput() &&
      validateQualificationSelect() &&
      validateEndDateInput() &&
      validateEducationDescriptionInput();
  }
};

// Turning local storage base 64 string to blob for FormData
let binary = atob(image.split(',')[1]);
let array = [];
for (var i = 0; i < binary.length; i++) {
  array.push(binary.charCodeAt(i));
}
let file = new Blob([new Uint8Array(array)], {
  type: 'image/jpeg',
});
let phoneNum = personalInfo.phone_number.split(' ').join('');
// under construction!
nextPageBtn.addEventListener('click', sendData);
let formData = new FormData();
function sendData() {
  if (
    validateEducationInput() &&
    validateQualificationSelect() &&
    validateEndDateInput() &&
    validateEducationDescriptionInput()
  ) {
    if (localStorage.getItem('educations') == null) {
      localStorage.setItem('educations', '[]');
    }
    let educationsFromLocalStorage = JSON.parse(
      localStorage.getItem('educations')
    );
    let data = {
      institute: educationInputElement.value,
      degree_id: qualificationSelectElement.value,
      due_date: endDateInputElement.value,
      description: descriptionInputElement.value,
    };
    educationsFromLocalStorage.push(data);
    localStorage.setItem(
      'educations',
      JSON.stringify(educationsFromLocalStorage)
    );

    formData.append('educations', educationsFromLocalStorage);

    console.log(educationsFromLocalStorage);
    console.log(formData.getAll('educations'));

    formData.append('name', personalInfo.name);
    formData.append('surname', personalInfo.surname);
    formData.append('email', personalInfo.email);
    formData.append('phone_number', phoneNum);
    formData.append('image', file);
    formData.append('about_me', personalInfo.about_me);

    fetch('https://resume.redberryinternship.ge/api/cvs', {
      method: 'POST',
      body: formData,
      headers: {
        accept: 'application/json',
        // 'Content-type': 'multipart/form-data',
      },
    }).then(response => {
      console.log(response.json());
    });
  }
}
