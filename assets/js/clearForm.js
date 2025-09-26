document.getElementById('form-clear-button').addEventListener('click', () => {
    const form = document.getElementById('message-form');
    form.reset();
    form.classList.remove('was-validated');
    const responseDiv = document.getElementById('response')
    responseDiv.classList = "";
    responseDiv.innerText = '';
})
