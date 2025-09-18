function verificarPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const loginBox = document.getElementById('login-box');
    const contenidoProtegido = document.getElementById('contenido-protegido');
    const contraseñaCorrecta = 'toche'; // Cambia aquí la contraseña si quieres

    if (password === contraseñaCorrecta) {
        loginBox.style.display = 'none';
        contenidoProtegido.style.display = 'block';
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent = 'Contraseña incorrecta. Intenta de nuevo.';
        contenidoProtegido.style.display = 'none';
    }
}
