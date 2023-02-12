let educationInfoHeader = document.getElementById('educationInfoHeader');
let perviousPageBtn = document.getElementById('backToPreviousPageBtn');
let nextPageBtn = document.getElementById('nextPageButton');
const generateNewFormBtn = document.getElementById('generateNewFormBtn');
const educationInputElement = document.getElementById('educationInput');
let qualificationSelectElement = document.getElementById('qualification');
const endDateInputElement = document.getElementById('endDateInput');
const descriptionInputElement = document.getElementById('descriptionInput');
educationInfoHeader.innerHTML = 'განათლება'.toUpperCase();
perviousPageBtn.innerHTML = 'უკან'.toUpperCase();
nextPageBtn.innerHTML = 'დასრულება'.toUpperCase();
const degrees = [];
fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(degreesData => {
    degreesData.forEach(degree => {
      qualificationSelectElement.innerHTML += `
        <option value="${degree.id}" id="${degree.id}">${degree.title}</option>
        `;
      degrees.push(degree);
    });

    qualificationSelectElement.value = sessionStorage.getItem('degree');
    validateQualificationSelect();

    document.getElementById('formQualification').innerText = degreesData.find(
      degreeName => sessionStorage.getItem('degree') == degreeName.id
    ).title;
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
  educationDescriptionForm.innerHTML = educationDescriptionValue;
  validateEducationDescriptionInput();
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
  if (
    !isFilled(descriptionValue) ||
    descriptionValue.replaceAll(' ', '') === ''
  ) {
    educationDescriptionInputIsValid = false;
    descriptionInputElement.style.borderColor = '#ef5050';
    descriptionErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    descriptionInputElement.classList.remove('validatedCheckLargeInputs');
    setError(descriptionInputElement, '', 'descriptionLabel');
  } else {
    descriptionInputElement.style.borderColor = '#98e37e';
    descriptionErrorImg.removeAttribute('src');
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
// // TO DO: make dynamic
// formPositionElement.innerHTML = experiences[0].position;
// formEmployerElement.innerHTML = experiences[0].employer;
// formStartDateElement.innerHTML = experiences[0].start_date;
// formEndDateElement.innerHTML = experiences[0].due_date;
// formDescriptionElement.innerHTML = experiences[0].description;

// add New forms

let click = 0;
generateNewFormBtn.addEventListener('click', () => {
  if (click < 4) {
    click++;
  }
  let amountOfEducationFormsGenerated = click;
  localStorage.setItem(
    'amountOfEducationFormsGenerated',
    JSON.stringify(amountOfEducationFormsGenerated)
  );

  if (click == 1) {
    generateNewForm_1();
  } else if (click == 2) {
    generateNewForm_2();
  } else if (click == 3) {
    generateNewForm_3();
  } else if (click == 4) {
    generateNewForm_4();
  }
});

let generatedEducationForms = JSON.parse(
  localStorage.getItem('amountOfEducationFormsGenerated')
);
click = generatedEducationForms;

if (generatedEducationForms == 1) {
  displayForm_1();
  generateNewForm_1();
}
if (generatedEducationForms == 2) {
  displayForm_1();
  generateNewForm_1();

  displayForm_2();
  generateNewForm_2();
}
if (generatedEducationForms == 3) {
  displayForm_1();
  generateNewForm_1();

  displayForm_2();
  generateNewForm_2();

  displayForm_3();
  generateNewForm_3();
}
if (generatedEducationForms == 4) {
  displayForm_1();
  generateNewForm_1();

  displayForm_2();
  generateNewForm_2();

  displayForm_3();
  generateNewForm_3();

  displayForm_4();
  generateNewForm_4();
}

window.onbeforeunload = function saveDataBeforeRefresh() {
  sessionStorage.setItem('education', educationInputElement.value);
  sessionStorage.setItem('degree', qualificationSelectElement.value);
  sessionStorage.setItem('educationEndDate', endDateInputElement.value);
  sessionStorage.setItem('educationDescription', descriptionInputElement.value);
};

window.onload = function () {
  educationInputElement.value = sessionStorage.getItem('education');
  endDateInputElement.value = sessionStorage.getItem('educationEndDate');
  descriptionInputElement.value = sessionStorage.getItem(
    'educationDescription'
  );

  if (
    sessionStorage.getItem('education') !== null &&
    sessionStorage.getItem('degree') !== null &&
    sessionStorage.getItem('educationEndDate') !== null &&
    sessionStorage.getItem('educationDescription') !== null
  ) {
    handleEducationInput();
    handleEndDateInput();
    handleDescriptionInput();

    handleQualificationSelect();
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
    const amountOfEducationFormsGenerated = localStorage.getItem(
      'amountOfEducationFormsGenerated'
    );
    let data = {
      institute: educationInputElement.value,
      degree_id: qualificationSelectElement.value,
      due_date: endDateInputElement.value,
      description: descriptionInputElement.value,
    };
    educationsFromLocalStorage.push(data);

    if (amountOfEducationFormsGenerated >= 1 && educationIsFullyFilled(1)) {
      let data_1 = {
        institute: educationInputElement_1.value,
        degree_id: qualificationSelectElement_1.value,
        due_date: endDateInputElement_1.value,
        description: descriptionInputElement_1.value,
      };
      educationsFromLocalStorage.push(data_1);
    }

    if (amountOfEducationFormsGenerated >= 2 && educationIsFullyFilled(2)) {
      let data_2 = {
        institute: educationInputElement_2.value,
        degree_id: qualificationSelectElement_2.value,
        due_date: endDateInputElement_2.value,
        description: descriptionInputElement_2.value,
      };
      educationsFromLocalStorage.push(data_2);
    }

    if (amountOfEducationFormsGenerated >= 3 && educationIsFullyFilled(3)) {
      let data_3 = {
        institute: educationInputElement_3.value,
        degree_id: qualificationSelectElement_3.value,
        due_date: endDateInputElement_3.value,
        description: descriptionInputElement_3.value,
      };
      educationsFromLocalStorage.push(data_3);
    }
    if (amountOfEducationFormsGenerated >= 4 && educationIsFullyFilled(4)) {
      let data_4 = {
        institute: educationInputElement_4.value,
        degree_id: qualificationSelectElement_4.value,
        due_date: endDateInputElement_4.value,
        description: descriptionInputElement_4.value,
      };
      educationsFromLocalStorage.push(data_4);
    }

    localStorage.setItem(
      'educations',
      JSON.stringify(educationsFromLocalStorage)
    );

    console.log('------------------>', educationsFromLocalStorage);

    educationsFromLocalStorage.forEach((education, index) => {
      formData.append(`educations[${index}][institute]`, education.institute);
      formData.append(`educations[${index}][due_date]`, education.due_date);
      formData.append(
        `educations[${index}][description]`,
        education.description
      );
      formData.append(`educations[${index}][degree_id]`, education.degree_id);
    });

    experiences.forEach((experience, index) => {
      formData.append(`experiences[${index}][position]`, experience.position);
      formData.append(`experiences[${index}][employer]`, experience.employer);
      formData.append(
        `experiences[${index}][start_date]`,
        experience.start_date
      );
      formData.append(`experiences[${index}][due_date]`, experience.due_date);
      formData.append(
        `experiences[${index}][description]`,
        experience.description
      );
    });
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
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('cv', JSON.stringify(data));
        window.location.href = './cv-page.html';
      });
  }
}

perviousPageBtn.addEventListener('click', () => {
  window.location.href = './experience-info.html';
});

const formInfoDisplay = document.getElementById('experienceInfoForm');

for (let i = 0; i < experiences.length; i++) {
  console.log(experiences[i].position);
  formInfoDisplay.innerHTML += `
   
    <h2 class="experienceInfoHeader" id="experienceFormInfoHeader"></h2>
    <div class="positionEmployeeForm">
        <p id="formPosition" class="formPosition">${experiences[i].position}</p>
        <p id="formEmployer" class="formEmployer">${experiences[i].employer}</p>
    </div>
    <div class="startEndDateForm">
        <p id="formStartDate" class="formStartDate">${experiences[i].start_date}</p>
        <p id="dash" class="dash"></p>
        <p id="formEndDate" class="formEndDate">${experiences[i].due_date}</p>
    </div>
    <div class="formDescription">
        <p id="formDescription" class="formDescription">${experiences[i].description}</p>
    </div>
 

    `;
}
