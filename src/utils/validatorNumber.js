document.addEventListener('DOMContentLoaded', () => {
  var phones = document.querySelectorAll('input[name=phone]');
  for (var i = phones.length - 1; i >= 0; i--) {
    processInput(phones[i]);
  }
});

function processInput(phone) {
  var iti = window.intlTelInput(phone, {
    allowDropdown: false,
    initialCountry: 'ID',
    nationalMode: true,
    autoPlaceholder: 'aggressive',
    formatOnDisplay: true,
    separateDialCode: false,
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js',
  });
  phone.addEventListener('input', () => {
    phone.setCustomValidity('');
    if (!iti.isValidNumber()) phone.setCustomValidity('!!!');
  });
}
