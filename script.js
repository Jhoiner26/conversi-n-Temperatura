// FUNCION PRINCIPAL PARA PEDIR Y CONVERTIR TEMPERATURA
function convertirTemperatura() {
    let entrada = prompt("Ingresa la temperatura en grados Celsius:");

    // VALIDACION: SI EL USUARIO CANCELO O DEJO VACIO
    if (entrada === null || entrada.trim() === "") {
        alert("Error: Debes ingresar un valor numérico.");
        convertirTemperatura(); // VUELVE A PEDIR LOS DATOS
        return;
    }

    // CONVERTIR LA ENTRADA A NUMERO
    let celsius = Number(entrada);

    // VALIDAR SI EL VALOR ES UN NUMERO REAL
    if (isNaN(celsius)) {
        alert("Error: El dato ingresado no es un número válido. Intenta de nuevo.");
        convertirTemperatura(); // VUELVE A PEDIR LOS DATOS
        return;
    }

    // FORMULAS DE CONVERSION
    // Kelvin = Celsius + 273.15
    // Fahrenheit = (Celsius * 9/5) + 32
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9 / 5) + 32;

    // IMPRIMIR RESULTADOS POR CONSOLA (EXACTAMENTE COMO PIDE EL EJERCICIO)
    console.log("Grados Kelvin: " + kelvin);
    console.log("Grados Fahrenheit: " + fahrenheit);

    // MOSTRAR TAMBIEN EN PANTALLA PARA PROBAR FACIL
    alert("Resultados:\n- Grados Kelvin: " + kelvin + "\n- Grados Fahrenheit: " + fahrenheit);
}

// EJECUTAR LA FUNCION AL CARGAR LA PAGINA
convertirTemperatura();
