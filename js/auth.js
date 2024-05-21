/**
 * Autor/a: ANAGUA, Walter Gaston Nicolas
 * version: 0.1
 * fecha: 19/5/2024
 * 
 * Descripción: El siguiente script valida los datos ingresados o no de los campos 
 * de formulario "registro" (register.html) e "inicio de sesión" (login.html)
 * 
 */

// Declaramos patrones de expresiones regulares
const expresiones = {
    regexUser: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    regexName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    regexSurname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    regexPassword: /^.{4,12}$/, // 4 a 12 digitos.
    regexEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ // Letras, numeros @ letras, numeros . 
	// regexPhone: /^\d{7,14}$/ // 7 a 14 numeros.
};

// Declaramos la funcion inicial

function validateForm() {

    // Obtener de los campos los valores para las constantes

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("mail");
    const password = document.getElementById("password");

    // Obtener los elementos de error
    const nameError = document.getElementById("nameError");
    const surnameError = document.getElementById("surnameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Limpiar mensajes de error
    nameError.textContent = "";
    surnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Validar nombre
    const namePattern = regexName;
    if (name.trim() === "") {
        nameError.textContent = "El nombre es obligatorio.";
        isValid = false;
    } else if (!namePatter.test(name)) {
        nameError.textContent = "El nombre no es válido.";
        isValid = false;
    }

    // Validar apellido
    const surnamePattern = regexSurnam;
    if (surname.trim() === "") {
        surnameError.textContent = "El apellido es obligatorio.";
        isValid = false;
    } else if (!surnamePattern.test(surname)){
        surnameError.textContent = "El apellido no es válido";
        isValid = false;
    }

    // Validar correo electrónico
    const emailPattern = regexEmail;
    if (email.trim() === "") {
        emailError.textContent = "El correo electrónico es obligatorio.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "El correo electrónico no es válido.";
        isValid = false;
    }

    // Validar contraseña
    const passwordPattern = regexPassword;
    if (password.trim() === "") {
        passwordError.textContent = "La contraseña es obligatoria.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent =
            "La contraseña debe tener al menos 6 caracteres.";
        isValid = false;
    } else if (!passwordPattern.test(password)){
        passwordError.textContent = "La contraseña es inválida.";
        isValid = false;
    }

    return isValid;
}

validateForm();