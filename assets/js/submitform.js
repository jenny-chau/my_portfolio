const form = document.getElementById("message-form");
const responseDiv = document.getElementById('response');

document.getElementById('message-form').addEventListener('submit', (e) => {
    // Prevent default form submission and clear the response div
    e.preventDefault();
    responseDiv.innerText = '';
    responseDiv.classList = '';

    form.classList.add("was-validated");

    // If form is valid
    if (form.checkValidity()) {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        }

        // Send email to me and confirmation email to requester
        emailjs.sendForm('Portfolio Send Email', 'template_47ysi4b', document.getElementById('message-form'), {limitRate: {id: "app", throttle: 10000}})
        .then(() => {
            document.getElementById('form-clear-button').click();
            responseDiv.classList.add('success-message');
            responseDiv.innerText = `Message sent! You should receive a confirmation email. If you don't see it, please check your spam folder.`
        
            // Show success message for 10s
            setTimeout(() => {
                responseDiv.classList = '';
                responseDiv.innerText = ""
            }, 10000);
        }, (error) => {
            // show error messages if error sending email
            responseDiv.classList.add('error-message');
            responseDiv.innerText = `Error sending message: ${error}`;
        });
    }
});