document.querySelector('form input').oninvalid = function() {
    // remove mensagem de erro padrão
    this.setCustomValidity("");

    // faz a validação novamente
    if (!this.validity.valid) {
        //this.setCustomValidity("Please provide a valid email");
        var req = document.querySelector('form p');
        req.innerHTML = 'Please provide a valid email';
        
        var display = document.querySelector('form img#icon-error');
        display.style.display = 'block';
    }
}