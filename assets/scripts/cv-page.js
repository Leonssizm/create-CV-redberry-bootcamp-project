const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const formName = document.getElementById('formName');
const formSurname = document.getElementById('formSurname');
const formImage = document.getElementById('personalImg');
const formEmail = document.getElementById('email-text');
const formNumber = document.getElementById('number-text');
const formAboutLabel = document.getElementById('aboutMeLabel');
const formAboutText = document.getElementById('aboutMeInfo');
let cvs = JSON.parse(localStorage.getItem('cv'));
let cvsEducations = cvs.educations;
let cvsExperiences = cvs.experiences;
window.onload = function () {
  localStorage.removeItem('personal-info');
  localStorage.removeItem('educations');
  localStorage.removeItem('personal-image');
  localStorage.removeItem('experiences');
  sessionStorage.clear();
};

closePopupBtn.addEventListener('click', () => {
  popup.style.visibility = 'hidden';
});

formName.innerHTML = cvs.name.toUpperCase();
formSurname.innerHTML = cvs.surname.toUpperCase();
formImage.setAttribute(
  'src',
  'https://resume.redberryinternship.ge/' + cvs.image
);
formEmail.innerHTML = cvs.email;
formNumber.innerHTML = cvs.phone_number;
formAboutLabel.innerHTML = 'ჩემ შესახებ'.toUpperCase();
formAboutText.innerHTML = cvs.about_me;

let displayExperiences = document.getElementById('experienceInfoFormCV');
let displayEducations = document.getElementById('educationInfoFormCV');
const experienceInfoHeader = document.getElementById(
  'experienceFormInfoHeaderCV'
);
const educationInfoHeader = document.getElementById(
  'educationFormInfoHeaderCV'
);

experienceInfoHeader.innerHTML = 'გამოცდილება'.toUpperCase();
educationInfoHeader.innerHTML = 'განათლება'.toUpperCase();
for (let i = 0; i < cvsExperiences.length; i++) {
  displayExperiences.innerHTML += `
            <div class="positionEmployeeForm">
                <p id="formPosition" class="formPosition">${cvsExperiences[i].position}</p>
                <p id="formEmployer" class="formEmployer">${cvsExperiences[i].employer}</p>
            </div>
            <div class="startEndDateForm">
                <p id="formStartDate" class="formStartDate">${cvsExperiences[i].start_date}</p>
                <p id="dash" class="dash"></p>
                <p id="formEndDate" class="formEndDate">${cvsExperiences[i].due_date}</p>
            </div>
            <div class="formDescription">
                <p id="formDescription" class="formDescription">${cvsExperiences[i].description}</p>
            </div>
  `;
}

for (let i = 0; i < cvsEducations.length; i++) {
  displayEducations.innerHTML += `
    <div class="educationQualificationForm">
      <p id="formEducation" class="formEducation">${cvsEducations[i].institute}</p>
      <p id="formQualification" class="formQualification">${cvsEducations[i].degree}</p>
    </div>
    <div class="educationEndDate">
      <p class="formEducationEndDate" id="formEducationEndDate">${cvsEducations[i].due_date}</p>
    </div>
    <div class="educationDescription">
      <p class="formEducationDescription" id="formEducationDescription">${cvsEducations[i].description}</p>
    </div> 
  `;
}
