const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.form-section');
const formElement = form.querySelectorAll('input, textarea');

formElement.forEach((fe) => {
  fe.addEventListener('input', () => {
    errorMessage.style.display = 'none';
  });
});

document.getElementById('submit').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const emailValidation = /[a-z]/.test(email);

  if (emailValidation) {
    errorMessage.style.display = 'block';
    e.preventDefault();
  }
});
