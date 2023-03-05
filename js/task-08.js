// test
const form = document.querySelector('form.login-form');
form.addEventListener('submit',handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all fields in form!');     
    } else {
        console.log(`Login :${email.value}, Password :${password.value}`)
    event.currentTarget.reset();
        }
        
    
}

