$(document).ready(function () {
    var contador = 1; // Inicializar contador
    var primeraParteResuelta = false; // Variable booleana para determinar si se ha resuelto la primera parte del puzzle

    $('.rick').click(function () {
        $('.popup').fadeIn();
    });

    $('#close').click(function () {
        $('.popup').fadeOut();
        contador = 1; // Reiniciar el contador al cerrar el popup
    });

    $('#next').click(function () {
        // Aumentar contador
        contador++;

        // Mostrar mensaje dependiendo del contador y del valor de la variable primeraParteResuelta
        switch (contador) {
            case 1:
                $('#message').text("¡Ja! ¿Crees que eres lo suficientemente inteligente para resolver estos enigmas? No me hagas reír.");
                break;
            case 2:
                if (primeraParteResuelta) {
                    $('#message').text("Hmm... Parece que estás luchando un poco. ¿Necesitas una pista, patético humano?");
                } else {
                    $('#message').text("¡Tú, patético humano! ¿Necesitas que te guíe paso a paso? Vaya decepción.");
                }
                break;
            case 3:
                $('#message').text("Hmm... parece que no eres más que un montón de carne inútil. ¡Intenta hacer algo útil por una vez en tu vida!");
                break;
            case 4:
                $('#message').text("¡Qué sorpresa! ¡Sigues aquí! ¿Necesitas que te diga cómo respirar también?");
                break;
            case 5:
                if (primeraParteResuelta) {
                    $('#message').text("¡Bah! ¡Finalmente lo hiciste! Pero, ¿necesitas una pista? ¡Eres más patético de lo que pensaba!");
                } else {
                    $('#message').text("¡Esto es un desastre! ¡Ni siquiera puedes resolver la primera parte del puzzle! ¡Eres inútil!");
                }
                $('#next').hide(); // Ocultar el botón "Siguiente"
                $('#close').show(); // Mostrar el botón "Cerrar"
                break;
            // Agregar más casos según sea necesario
            default:
                $('#message').text("¡Vaya, vaya! Parece que estás perdido. ¿Necesitas un manual para abrir una puerta?");
                break;
        }
    });

    $('#hoja').click(function () {
        $('.popup-hoja').fadeIn();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.popup-hoja').length && !$(event.target).is('.hoja')) {
            $('.popup-hoja').fadeOut();
        }
    });


    $('#caja').click(function () {
        $('.panel').fadeIn();
        $('.panel').css('display', 'flex'); // Cambiar el estilo CSS a display: flex;

    });


    var numbers = []; // Array para almacenar los números seleccionados

    $('.digit').click(function () {
        if (numbers.length < 5) { // Verificar si hay menos de 5 caracteres
            var number = $(this).text(); // Obtener el número del elemento clicado
            numbers.push(number); // Añadir el número al array
            $('.display').text(numbers.join('')); // Mostrar los números en el display
        }
    });

    $('.trash').click(function () {
        numbers = []; // Vaciar el array
        $('.display').text(''); // Limpiar el display
    });

    $('.dial-top').click(function () {
        $('.panel').fadeOut();
    });

    $('.accept').click(function () {
        var combination = $('.display').text(); // Obtener la combinación del display
        var correctCombination = "12345"; // Definir la combinación correcta

        if (combination === correctCombination) { // Verificar si la combinación es correcta
            primeraParteResuelta = true;
            $('.panel').fadeOut();
            $('.nota-contra').fadeIn();
        } else {
            $('.display').css('color', 'red'); // Cambiar el color del texto a rojo
        }
    });

    $('.nota-contra').click(function(event) {
        // Detener la propagación del evento click
        event.stopPropagation();
    });

    $('.nota-contra').click(function() {
        // Ocultar el popup-hoja solo si se hace clic fuera de la nota
        $(this).fadeOut();
    });

    $('#pistola').click(function () {
        $('.popup-pistola').fadeIn();
    });
});
