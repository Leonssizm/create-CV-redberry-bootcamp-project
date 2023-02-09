function generateNewForm(index) {
  let formTemplate = document.getElementById('newFormTemplate');
  let displayFormTemplate = document.getElementById('newExperienceInfoForm');

  let clonedFormTemplate = formTemplate.content.cloneNode(true);
  let clonedDisplayFormTemplate = displayFormTemplate.content.cloneNode(true);

  // Position Input / values Display ---->
  clonedFormTemplate.getElementById('positionInput_ID_PLACEHOLDER').id =
    'positionInput_' + index;
  clonedFormTemplate.getElementById('positionLabel_ID_PLACEHOLDER').id =
    'positionLabel_' + index;
  clonedFormTemplate.getElementById('positionErrorImg_ID_PLACEHOLDER').id =
    'positionErrorImg_' + index;
  clonedDisplayFormTemplate.getElementById('formPosition_ID_PLACEHOLDER').id =
    'formPosition_' + index;

  clonedFormTemplate
    .getElementById('positionInput_' + index)
    .addEventListener('input', () => {
      let clonedPositionInput = document.getElementById(
        'positionInput_' + index
      );
      let clonedPositionInputValue = clonedPositionInput.value;
      let positionInputErrorImg = document.getElementById(
        'positionErrorImg_' + index
      );
      let displayPosition = document.getElementById('formPosition_' + index);

      // localStorage.setItem(
      //   'Form_' + index + '_position',
      //   JSON.stringify({
      //     formId: index,
      //     positionInputValue: clonedPositionInputValue,
      //   })
      // );
      saveDataInLocalStorage(index, 'positionInput', clonedPositionInputValue);
      if (clonedPositionInput.value.length > 0) {
        displayPosition.innerHTML = clonedPositionInputValue + ',';
      }
      if (
        !isFilled(clonedPositionInputValue) ||
        !lengthIsLonger(clonedPositionInputValue, 2)
      ) {
        positionInputErrorImg.style.marginBottom = '35px';
        positionInputErrorImg.style.marginLeft = '14px';
        positionInputErrorImg.setAttribute(
          'src',
          './assets/icons/error-warning.svg'
        );
        clonedPositionInput.classList.remove('validatedCheckLargeInputs');
        setError(
          clonedPositionInput,
          'მინიმუმ 2 სიმბოლო',
          'positionLabel_' + index
        );
      } else {
        clonedPositionInput.classList.add('validatedCheckLargeInputs');
        positionInputErrorImg.removeAttribute('src');
        setSuccess(
          clonedPositionInput,
          'მინიმუმ 2 სიმბოლო',
          'positionLabel_' + index
        );
      }
    });
  // Employer Input / Values Display ---------->
  clonedFormTemplate.getElementById('employerInput_ID_PLACEHOLDER').id =
    'employerInput_' + index;
  clonedFormTemplate.getElementById('employerLabel_ID_PLACEHOLDER').id =
    'employerLabel_' + index;
  clonedFormTemplate.getElementById('employerErrorImg_ID_PLACEHOLDER').id =
    'employerErrorImg_' + index;
  clonedDisplayFormTemplate.getElementById('formEmployer_ID_PLACEHOLDER').id =
    'formEmployer_' + index;
  clonedFormTemplate
    .getElementById('employerInput_' + index)
    .addEventListener('input', () => {
      let clonedEmployerInput = document.getElementById(
        'employerInput_' + index
      );
      let clonedEmployerInputValue = clonedEmployerInput.value;
      let employerInputErrorImg = document.getElementById(
        'employerErrorImg_' + index
      );
      let displayEmployer = document.getElementById('formEmployer_' + index);
      displayEmployer.innerHTML = clonedEmployerInputValue;
      // localStorage.setItem(
      //   'Form_' + index + '_employer',
      //   JSON.stringify({
      //     formId: index,
      //     employerInputValue: clonedEmployerInputValue,
      //   })
      // );
      saveDataInLocalStorage(
        index,
        'employerInputValue',
        clonedEmployerInputValue
      );
      if (
        !isFilled(clonedEmployerInputValue) ||
        !lengthIsLonger(clonedEmployerInputValue, 2)
      ) {
        employerInputErrorImg.style.marginBottom = '10px';
        employerInputErrorImg.style.marginLeft = '14px';
        employerInputErrorImg.setAttribute(
          'src',
          './assets/icons/error-warning.svg'
        );
        clonedEmployerInput.classList.remove('validatedCheckLargeInputs');
        setError(
          clonedEmployerInput,
          'მინიმუმ 2 სიმბოლო',
          'employerLabel_' + index
        );
      } else {
        clonedEmployerInput.classList.add('validatedCheckLargeInputs');
        employerInputErrorImg.removeAttribute('src');

        setSuccess(
          clonedEmployerInput,
          'მინიმუმ 2 სიმბოლო',
          'employerLabel_' + index
        );
      }
    });
  // startDateInput / Values Display --------------------->
  clonedFormTemplate.getElementById('startDateInput_ID_PLACEHOLDER').id =
    'startDateInput_' + index;
  clonedFormTemplate.getElementById('startDateLabel_ID_PLACEHOLDER').id =
    'startDateLabel_' + index;
  clonedFormTemplate.getElementById('startDateErrorImg_ID_PLACEHOLDER').id =
    'startDateErrorImg_' + index;
  clonedDisplayFormTemplate.getElementById('formStartDate_ID_PLACEHOLDER').id =
    'formStartDate_' + index;
  clonedFormTemplate
    .getElementById('startDateInput_' + index)
    .addEventListener('input', () => {
      let clonedStartDateInput = document.getElementById(
        'startDateInput_' + index
      );
      let clonedStartDateInputValue = clonedStartDateInput.value;
      let clonedStartDateErrorImg = document.getElementById(
        'startDateErrorImg_' + index
      );
      let displayStartDate = document.getElementById('formStartDate_' + index);
      displayStartDate.innerHTML = clonedStartDateInputValue;
      // localStorage.setItem(
      //   'Form_' + index + '_startDate',
      //   JSON.stringify({
      //     formId: index,
      //     startDateInputValue: clonedStartDateInputValue,
      //   })
      // );
      saveDataInLocalStorage(index, 'startDate', clonedStartDateInputValue);
      if (!isFilled(clonedStartDateInputValue)) {
        clonedStartDateErrorImg.style.marginTop = '13px';
        setError(clonedStartDateInput, '', 'startDateLabel_' + index);
        clonedStartDateErrorImg.setAttribute(
          'src',
          './assets/icons/error-warning.svg'
        );
      } else {
        clonedStartDateErrorImg.removeAttribute('src');
        setSuccess(clonedStartDateInput, '', 'startDateLabel_' + index);
      }
    });
  clonedFormTemplate
    .getElementById('startDateInput_' + index)
    .addEventListener('click', () => {
      let clonedStartDateInput = document.getElementById(
        'startDateInput_' + index
      );
      let clonedStartDateInputValue = clonedStartDateInput.value;
      let clonedStartDateErrorImg = document.getElementById(
        'startDateErrorImg_' + index
      );

      if (!isFilled(clonedStartDateInputValue)) {
        clonedStartDateErrorImg.style.marginTop = '13px';
        setError(clonedStartDateInput, '', 'startDateLabel_' + index);
        clonedStartDateErrorImg.setAttribute(
          'src',
          './assets/icons/error-warning.svg'
        );
      } else {
        clonedStartDateErrorImg.removeAttribute('src');
        setSuccess(clonedStartDateInput, '', 'startDateLabel_' + index);
      }
    });

  // endDate Input / Values Display ----------------------->
  clonedFormTemplate.getElementById('endDateInput_ID_PLACEHOLDER').id =
    'endDateInput_' + index;
  clonedFormTemplate.getElementById('endDateLabel_ID_PLACEHOLDER').id =
    'endDateLabel_' + index;
  clonedFormTemplate.getElementById('endDateErrorImg_ID_PLACEHOLDER').id =
    'endDateErrorImg_' + index;
  clonedDisplayFormTemplate.getElementById('formEndDate_ID_PLACEHOLDER').id =
    'formEndDate_' + index;
  clonedFormTemplate
    .getElementById('endDateInput_' + index)
    .addEventListener('input', () => {
      let clonedEndDateInput = document.getElementById('endDateInput_' + index);
      let clonedEndDateInputValue = clonedEndDateInput.value;
      let clonedEndDateErrorImg = document.getElementById(
        'endDateErrorImg_' + index
      );
      let displayEndDate = document.getElementById('formEndDate_' + index);
      displayEndDate.innerHTML = clonedEndDateInputValue;
      // localStorage.setItem(
      //   'Form_' + index + '_endDate',
      //   JSON.stringify({
      //     formId: index,
      //     endDateInputValue: clonedEndDateInputValue,
      //   })
      // );
      saveDataInLocalStorage(
        index,
        'endDateInputValue',
        clonedEndDateInputValue
      );
      if (!isFilled(clonedEndDateInputValue)) {
        clonedEndDateErrorImg.style.marginTop = '13px';
        clonedEndDateErrorImg.style.marginLeft = '13px';
        setError(clonedEndDateInput, '', 'endDateLabel_' + index);
        clonedEndDateErrorImg.setAttribute(
          'src',
          './assets/icons/error-warning.svg'
        );
      } else {
        clonedEndDateErrorImg.removeAttribute('src');
        setSuccess(clonedEndDateInput, '', 'endDateLabel_' + index);
      }
    });

  clonedFormTemplate
    .getElementById('endDateInput_' + index)
    .addEventListener('click', () => {
      let clonedEndDateInput = document.getElementById('endDateInput_' + index);
      let clonedEndDateInputValue = clonedEndDateInput.value;
      let clonedEndDateErrorImg = document.getElementById(
        'endDateErrorImg_' + index
      );
      let displayEndDate = document.getElementById('formEndDate_' + index);
      displayEndDate.innerHTML = clonedEndDateInputValue;
      if (!isFilled(clonedEndDateInputValue)) {
        clonedEndDateErrorImg.style.marginTop = '13px';
        clonedEndDateErrorImg.style.marginLeft = '13px';
        setError(clonedEndDateInput, '', 'endDateLabel_' + index);
        clonedEndDateErrorImg.setAttribute(
          'src',
          './assets/icons/error-warning.svg'
        );
      } else {
        clonedEndDateErrorImg.removeAttribute('src');
        setSuccess(clonedEndDateInput, '', 'endDateLabel_' + index);
      }
    });

  // Description Input / Values Display-------------------->

  clonedFormTemplate.getElementById('descriptionInput_ID_PLACEHOLDER').id =
    'descriptionInput_' + index;
  clonedFormTemplate.getElementById('descriptionLabel_ID_PLACEHOLDER').id =
    'descriptionLabel_' + index;
  clonedFormTemplate.getElementById('descriptionErrorImg_ID_PLACEHOLDER').id =
    'descriptionErrorImg_' + index;
  clonedDisplayFormTemplate.getElementById(
    'formDescription_ID_PLACEHOLDER'
  ).id = 'formDescription_' + index;
  clonedFormTemplate
    .getElementById('descriptionInput_' + index)
    .addEventListener('input', () => {
      let clonedDescriptionInput = document.getElementById(
        'descriptionInput_' + index
      );
      let clonedDescriptionInputValue = clonedDescriptionInput.value;
      let clonedDescriptionErrorImg = document.getElementById(
        'descriptionErrorImg_' + index
      );
      let displayFormDescription = document.getElementById(
        `formDescription_${index}`
      );
      displayFormDescription.innerHTML = clonedDescriptionInputValue;
      // localStorage.setItem(
      //   'Form_' + index + '_description',
      //   JSON.stringify({
      //     formId: index,
      //     descriptionInputValue: clonedDescriptionInputValue,
      //   })
      // );
      saveDataInLocalStorage(
        index,
        'descriptionInputValue',
        clonedDescriptionInputValue
      );
      if (!isFilled(clonedDescriptionInputValue)) {
        clonedDescriptionInput.style.borderColor = '#ef5050';
        clonedDescriptionErrorImg.style.marginLeft = '13px';
        clonedDescriptionErrorImg.setAttribute(
          'src',
          './assets/icons/error-warning.svg'
        );
        clonedDescriptionInput.classList.remove('validatedCheckLargeInputs');
        setError(clonedDescriptionInput, '', 'descriptionLabel_' + index);
      } else {
        clonedDescriptionInput.style.borderColor = '#98e37e';
        clonedDescriptionErrorImg.removeAttribute('src');
        clonedDescriptionInput.classList.add('validatedCheckLargeInputs');
        setSuccess(clonedDescriptionInput, '', 'descriptionLabel_' + index);
      }
    });

  const container = document.getElementById('container');
  const formDisplayContainer = document.getElementById('displayFormContainer');
  container.appendChild(clonedFormTemplate);
  formDisplayContainer.appendChild(clonedDisplayFormTemplate);
}

function saveDataInLocalStorage(id, value, element) {
  console.log(id, value, element);
  let newData = JSON.parse(localStorage.getItem('Form_' + id));
}
