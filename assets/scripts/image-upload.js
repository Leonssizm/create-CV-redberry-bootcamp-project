const imageInput = document.getElementById('imageInput');
const imageDisplay = document.getElementById('displayImage');
const uploadPicErrorImg = document.getElementById('uploadPicErrorImg');
let uploadedImage = '';
let pictureIsLoaded = false;

imageInput.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploadedImage = reader.result;
    imageDisplay.style.backgroundImage = `url(${uploadedImage})`;
    localStorage.setItem('personal-image', reader.result);
    sessionStorage.setItem('personal-image', reader.result);
    localStorage.setItem('image', imageInput.files[0]);
  });
  reader.readAsDataURL(this.files[0]);
});

// input validation

imageInput.addEventListener('input', () => {
  validateImageInput();
});

function validateImageInput() {
  let imageInputIsValid = true;

  if (
    localStorage.getItem('personal-image') === null &&
    imageInput.value === ''
  ) {
    uploadPicErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    imageInputIsValid = false;
  } else {
    uploadPicErrorImg.removeAttribute('src');
    uploadPicErrorImg.setAttribute('src', './assets/icons/success-check.svg');
  }
  return imageInputIsValid;
}
