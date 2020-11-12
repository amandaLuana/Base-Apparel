document.querySelector('form input').oninvalid = function() {
    // remove mensagens de erro padrão
    this.setCustomValidity("");

    // faz a validação novamente
    if (!this.validity.valid) {
        this.setCustomValidity("Please provide a valid email");
    }
}