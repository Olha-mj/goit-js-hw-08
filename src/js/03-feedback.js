import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormData) {
    emailInput.value = savedFormData.email;
    messageInput.value = savedFormData.message;
}


const saveFormDataToLocalStorage = throttle(() => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);


emailInput.addEventListener('input', saveFormDataToLocalStorage);
messageInput.addEventListener('input', saveFormDataToLocalStorage);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log('Form Data Submitted:', formData);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
});
