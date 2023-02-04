const imageInput = document.getElementById('imageInput');
const imageDisplay = document.getElementById('displayImage');
let uploadedImage = '';

imageInput.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploadedImage = reader.result;
    imageDisplay.style.backgroundImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});
