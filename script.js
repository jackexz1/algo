function verificarPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    if (password === 'toche') { // Puedes cambiar la contraseña aquí
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('La contraseña solo la sabes tú, recuerda el apodo "tonto" que me ponías a veces').style.display = 'block';
    } else {
        errorMsg.textContent = 'Contraseña incorrecta. Intenta de nuevo.';
    }
}

function saludar() {
    alert('Perdóname, por no tener el valor de mirarte a los ojos y decirte lo que sentía mi corazón. Perdóname, por dejar que el miedo hablara en mi lugar y que el silencio matara lo que pudo haber sido. Si pudiera volver atrás, sería valiente, te diría cada palabra, te entregaría mi alma sin temer a tu respuesta. Hoy solo me queda pedirte perdón, por no haber sido lo suficientemente fuerte para mostrarte el amor que siempre fue tuyo.');
}   saludar ('hola mundo');
