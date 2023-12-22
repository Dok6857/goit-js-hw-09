const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const storedData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = storedData.email || '';
messageInput.value = storedData.message || '';

form.addEventListener('input', () => {
  const dataToStore = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataToStore));
});

emailInput.addEventListener('focus', function () {
  this.setAttribute('placeholder', 'Type area');
});

emailInput.addEventListener('input', function () {
  this.removeAttribute('placeholder');
});

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Заповніть обидва поля');
  }
}
