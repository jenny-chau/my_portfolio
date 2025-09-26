const form = document.getElementById("message-form");
const responseDiv = document.getElementById('response');

document.getElementById('message-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    responseDiv.innerText = '';
    responseDiv.classList = '';

    if (form.checkValidity()) {
        form.classList.add("was-validated");

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        }

        console.log(formData);

        emailjs.sendForm('Portfolio Send Email', 'template_47ysi4b', document.getElementById('message-form'), {limitRate: {id: "app", throttle: 10000}})
        .then(() => {
            document.getElementById('form-clear-button').click();
            responseDiv.classList.add('success-message');
            responseDiv.innerText = `Message sent! You should receive a confirmation email. If you don't see it, please check your spam folder.`
        
            setTimeout(() => {
                responseDiv.classList = '';
                responseDiv.innerText = ""
            }, 10000);
        }, (error) => {
            responseDiv.classList.add('error-message');
            responseDiv.innerText = `Error sending message: ${error}`;
        });

    } else {
        form.classList.add("was-validated");
    }
});