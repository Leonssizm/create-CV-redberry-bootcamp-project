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
