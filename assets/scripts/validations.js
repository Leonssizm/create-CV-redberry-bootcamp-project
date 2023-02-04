// regex variables for validation
const geoLettersRegex = /^[ა-ჰ]+$/;
const redberryEmailRegex = /^[a-zA-Z0-9+_.-]+@redberry.ge$/;

// functions for validation
function isFilled(element) {
  return element !== null && element !== '';
}

function lengthIsLonger(element, length) {
  return element.length >= length;
}

function setError(element, message, label) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  document.getElementById(label).style.color = '#E52F2F';
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

function setSuccess(element, message, label) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  document.getElementById(label).style.color = '#000000';
  errorDisplay.innerText = message;
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}
