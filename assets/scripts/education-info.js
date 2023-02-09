let educationInfoHeader = document.getElementById('educationInfoHeader');
let qualificationSelect = document.getElementById('qualification');
let perviousPageBtn = document.getElementById('backToPreviousPageBtn');
let nextPageBtn = document.getElementById('nextPageButton');
educationInfoHeader.innerHTML = 'განათლება'.toUpperCase();
perviousPageBtn.innerHTML = 'უკან'.toUpperCase();
nextPageBtn.innerHTML = 'დასრულება'.toUpperCase();
fetch('https://resume.redberryinternship.ge/api/degrees')
  .then(response => response.json())
  .then(degreesData => {
    degreesData.forEach(degree => {
      qualificationSelect.innerHTML += `
        <option value="${degree.title}" id=${degree.id}>${degree.title}</option>
        `;
    });
  });

//   When page is loaded, previous form values are displayed;
let formNameElement = document.getElementById('formName');
let formSurnameElement = document.getElementById('formSurname');
const imageDisplay = document.getElementById('displayImage');
let formAboutMeElement = document.getElementById('formAbout');
let aboutMeFormLabel = document.getElementById('aboutMeLabel');
let formEmailSignImg = document.getElementById('formEmailSign');
let formEmailElement = document.getElementById('formEmail');
let formTelephoneSignImg = document.getElementById('formTelephoneSign');
let formPhoneElement = document.getElementById('formNumber');
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
formPositionElement.innerHTML = experiences.position;
formEmployerElement.innerHTML = experiences.employer;
formStartDateElement.innerHTML = experiences.start_date;
formEndDateElement.innerHTML = experiences.due_date;
formDescriptionElement.innerHTML = experiences.description;
