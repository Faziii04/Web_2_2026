const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const ageInput = document.getElementById('age');
const termsCheckbox = document.getElementById('terms');
const form = document.getElementById('registration-form');
const isFormComplete = false;

nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === '') {
        return;
    }
    nameInput.value = reverseString(nameInput.value);

});

emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim() === '') {
        return;
    }
    emailInput.value = reverseString(emailInput.value);
});


phoneInput.addEventListener('blur', () => {
    if (phoneInput.value.trim() === '') {
        return;
    }
    const wordsToNumber = {
        'cero': '0', 'uno': '1', 'dos': '2', 'tres': '3', 'cuatro': '4',
        'cinco': '5', 'seis': '6', 'siete': '7', 'ocho': '8', 'nueve': '9'
    };
    phoneInput.value = phoneInput.value.split(' ').map(word => wordsToNumber[word] || word).join('');
});

addressInput.addEventListener('blur', () => {
    if (addressInput.value.trim() === '') {
        return;
    }
    addressInput.value = addressInput.value.toUpperCase().replace(/\s/g, '');
});

ageInput.addEventListener('blur', () => {
    if (ageInput.value.trim() === '') {
        return;
    }

    try {
        const age = parseInt(ageInput.value);
        ageInput.value = '';
        alert("NO NUMEOROS")
    } catch (error) { 
        
    }





    const wordsToNumber = {
        'cero': '0', 'uno': '1', 'dos': '2', 'tres': '3', 'cuatro': '4',
        'cinco': '5', 'seis': '6', 'siete': '7', 'ocho': '8', 'nueve': '9'
    };
    ageInput.value = ageInput.value.split(' ').map(word => wordsToNumber[word] || word).join('');
});

termsCheckbox.addEventListener('change', () => {

});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
});



function reverseString(str) {
    return str.split('').reverse().join('');
}




