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
  });
  reader.readAsDataURL(this.files[0]);
});

// input validation

imageInput.addEventListener('change', () => {
  console.log(validateImageInput());
});

function validateImageInput() {
  let imageInputIsValid = true;

  if (imageInput.value == '') {
    uploadPicErrorImg.setAttribute('src', './assets/icons/error-warning.svg');
    imageInputIsValid = false;
  } else {
    uploadPicErrorImg.removeAttribute('src');
    uploadPicErrorImg.setAttribute('src', './assets/icons/success-check.svg');
  }
  return imageInputIsValid;
}
