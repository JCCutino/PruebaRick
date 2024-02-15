"use strict"

  let contador = 1; // Inicializar contador

$(document).ready(function () {
  let primeraParteResuelta = false; // Variable booleana para determinar si se ha resuelto la primera parte del puzzle
  let segundaParteResuelta = false; // Variable booleana para determinar si se ha resuelto la primera parte del puzzle

  $(".rick").click(function () {
   if(segundaParteResuelta){
    $("#message").text("¡Eso es! ¡Has demostrado ser más útil de lo que pareces! Pero no te emociones demasiado, todavía hay trabajo por hacer. ¡Vamos!");
      $("#next").hide();
      $("#close").text("Ir al garaje");

      $("#close").show();
      $(".popup").fadeIn();
   }else{
    if (primeraParteResuelta) {
        $("#message").text(
            "¡Bah! ¡Finalmente lo hiciste! Pero, ¿necesitas una pista? ¡Eres más patético de lo que pensaba!"
          );
         $("#next").hide(); // Ocultar el botón "Siguiente"
        $("#close").show(); // Mostrar el botón "Cerrar"
        $(".popup").fadeIn();
    }else{
        contador = 1;
        $(".popup").fadeIn();
        console.log(contador);
    }

   }
   
  });

  $("#close").click(function () {
    $(".popup").hide();
    $("#message").text(
        "¡Oye tú! ¿Qué haces aquí? ¿No tienes nada mejor que hacer que estar atrapado en este absurdo escape room?"
      );
      $("#next").show(); // Ocultar el botón "Siguiente"
        $("#close").hide(); // Mostrar el botón "Cerrar"
  });

  $("#next").click(function () {
    
   // Aumentar contador
    contador++;
  
    // Mostrar mensaje dependiendo del contador y del valor de la variable primeraParteResuelta
    switch (contador) {
      case 1:
        console.log(contador);

        $("#message").text(
          "¡Ja! ¿Crees que eres lo suficientemente inteligente para resolver estos enigmas? No me hagas reír."
        );
        break;
      case 2:
        console.log(contador);

        $("#message").text(
          "¡Tú, patético humano! ¿Necesitas que te guíe paso a paso? Vaya decepción."
        );
        break;
      case 3:
        console.log(contador);

        $("#message").text(
          "Hmm... parece que no eres más que un montón de carne inútil. ¡Intenta hacer algo útil por una vez en tu vida!"
        );
        break;
      case 4:
        console.log(contador);

        $("#message").text(
          "¡Qué sorpresa! ¡Sigues aquí! ¿Necesitas que te diga cómo respirar también?"
        );
        break;
      case 5:
        if (primeraParteResuelta) {
          $("#message").text(
            "¡Bah! ¡Finalmente lo hiciste! Pero, ¿necesitas una pista? ¡Eres más patético de lo que pensaba!"
          );
        } else {
          $("#message").text(
            "¡Esto es un desastre! ¡Ni siquiera puedes resolver la primera parte del puzzle! ¡Eres inútil!"
          );
          console.log(contador);
        }
        $("#next").hide(); // Ocultar el botón "Siguiente"
        $("#close").show(); // Mostrar el botón "Cerrar"
        break;
      // Agregar más casos según sea necesario
      default:
        $("#message").text(
          "¡Vaya, vaya! Parece que estás perdido. ¿Necesitas un manual para abrir una puerta?"
        );
        break;
    }
  });
  

  $("#hoja").click(function () {
    $(".popup-hoja").fadeIn();
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest(".popup-hoja").length &&
      !$(event.target).is(".hoja")
    ) {
      $(".popup-hoja").fadeOut();
    }
  });

  $("#caja").click(function () {
    $(".panel").fadeIn();
    $(".panel").css("display", "flex"); // Cambiar el estilo CSS a display: flex;
  });

  var numbers = []; // Array para almacenar los números seleccionados

  $(".digit").click(function () {
    if (numbers.length < 5) {
      // Verificar si hay menos de 5 caracteres
      let number = $(this).text(); // Obtener el número del elemento clicado
      numbers.push(number); // Añadir el número al array
      $(".display").text(numbers.join("")); // Mostrar los números en el display
    }
  });

  $(".trash").click(function () {
    numbers = []; // Vaciar el array
    $(".display").text(""); // Limpiar el display
  });

  $(".dial-top").click(function () {
    $(".panel").fadeOut();
  });

  $(".accept").click(function () {
    let combination = $(".display").text(); // Obtener la combinación del display
    let correctCombination = "12345"; // Definir la combinación correcta
    if (combination === correctCombination) {
      // Verificar si la combinación es correcta
      primeraParteResuelta = true;
      $(".panel").fadeOut();
      $(".nota-contra").fadeIn();
    } else {
      $(".display").css("color", "red"); // Cambiar el color del texto a rojo
    }
  });

  $(".nota-contra").click(function (event) {
    // Detener la propagación del evento click
    event.stopPropagation();
  });

  $(".nota-contra").click(function () {
    // Ocultar el popup-hoja solo si se hace clic fuera de la nota
    $(this).fadeOut();
  });

  $("#pistola").click(function () {
    $(".panel-pistola").fadeIn();
  });

  $(".dial-top-pistola").click(function () {
    $(".panel-pistola").fadeOut();
  });

  let numbersPistola = []; // Array para almacenar los números seleccionados
  let displayPistola = $(".display-pistola");

  function updateDisplayPistola() {
    let displayText = '';

    displayText += numbersPistola.join('');

    // Agregar guiones al final
    for (let i = 0; i < 7 - numbersPistola.length; i++) {
        displayText += '_ ';
    }

    displayPistola.text(displayText);
}

  // Evento de clic en los dígitos
  $(".digit-pistola").click(function() {
      if (numbersPistola.length < 7) { // Verificar si hay menos de 7 dígitos
          let number = ($(this).text()+" "); // Obtener el número del elemento clicado
          numbersPistola.push(number); // Añadir el número al array
          updateDisplayPistola(); // Actualizar el display
      }
  });

  // Evento de clic en el botón de borrar
  $(".trash-pistola").click(function() {
      numbersPistola = []; // Vaciar el array
      updateDisplayPistola(); // Actualizar el display
  });

  // Evento de clic en la pistola para mostrar el panel
  $("#pistola").click(function() {
      $(".panel-pistola").fadeIn();
  });

  // Evento de clic en el dial top para ocultar el panel
  $(".dial-top-pistola").click(function() {
      $(".panel-pistola").fadeOut();
  });

  $(".accept-pistola").click(function () {
    let combinationPistola = numbersPistola.join('').replace(/ /g, ''); // Obtener la combinación ingresada y eliminar todos los espacios en blanco
    let correctCombinationPistola = "1234567"; // Combinación correcta
    console.log(combinationPistola);
    if (combinationPistola === correctCombinationPistola) { // Comprobar si la combinación es correcta
        $(".message-pistola").text("¡Pistola desbloqueada!").removeClass("red-message").addClass("green-message");
        segundaParteResuelta = true;
    } else {
        $(".message-pistola").text("¡Código incorrecto!").removeClass("green-message").addClass("red-message");
    }
});

});


