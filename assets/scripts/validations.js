// regex variables for validation
const geoLettersRegex = /^[ა-ჰ]+$/;
const redberryEmailRegex = /^[a-zA-Z0-9+_.-]+@redberry[.]ge$/;
const phoneNumRegexWithspaces = /^[+]995 5[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/;

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

function experienceIsFullyFIlled(index) {
  const position = document.getElementById('positionInput_' + index).value;
  const employer = document.getElementById('employerInput_' + index).value;
  const startDate = document.getElementById('startDateInput_' + index).value;
  const endDate = document.getElementById('endDateInput_' + index).value;
  const description = document.getElementById(
    'descriptionInput_' + index
  ).value;
  if (
    position != '' &&
    employer != '' &&
    startDate != '' &&
    endDate != '' &&
    description != ''
  ) {
    return true;
  } else {
    return false;
  }
}
