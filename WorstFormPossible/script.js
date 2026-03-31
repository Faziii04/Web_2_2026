const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const termsCheckbox = document.getElementById('terms');
const form = document.getElementById('registration-form');
const isFormComplete = false;

nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === '') {
        return;
    }
    nameInput.value = reverseString(nameInput.value);

});

termsCheckbox.addEventListener('change', () => {

});

form.addEventListener('submit', (e) => {
    e.preventDefault();

});









function reverseString(str) {
    return str.split('').reverse().join('');
}