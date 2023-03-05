// test
const textInput = document.querySelector('#validation-input');
const inputLength = document.querySelector('[data-length="6"]');
const removeFocustextInput = document.querySelector('[data-action="remove"]');

const countSumbols = (event) => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
}

textInput.addEventListener('blur', countSumbols);