let addResumeBtn = document.getElementById('nextPageBtn');
let addResumeBtnText = 'რეზიუმეს დამატება';
addResumeBtn.innerHTML = addResumeBtnText.toUpperCase();
window.onload = function clearStorage() {
  sessionStorage.clear();
  localStorage.removeItem('personal-image');
  localStorage.removeItem('amountOfFormsGenerated');
};
