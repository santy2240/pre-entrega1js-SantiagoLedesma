// Función para mostrar un mensaje en un alert
function mostrarAlert(mensaje) {
    alert(mensaje);
  }
  
  // Función para obtener la edad del usuario
  function obtenerEdad() {
    return parseInt(prompt("Ingresá tu edad para ver nuestro menú"));
  }
  
  // Función para verificar si el usuario puede acceder a las bebidas alcohólicas
  function verificarEdadParaBebidas(edad) {
    if (edad >= 18) {
      mostrarAlert("Podés acceder a las bebidas alcohólicas del menú.");
    } else {
      mostrarAlert("Las bebidas alcohólicas no podrán ser elegidas por vos. En caso que desees consumir una, llamá a un mayor y refrescá la página o dale ACEPTAR y elegí otra cosa para llevar.");
    }
  }
  
  // Función para que el usuario elija su pedido
  function elegirPedido() {
    let pedido;
  
    mostrarAlert("Por hoy solo tenemos disponible combo 1 y 2 al 50% de descuento.");
    
    do {
      pedido = prompt('Elegí qué vas a comer hoy:\n1: Hamburguesa simple con papas y gaseosa\n2: Hamburguesa doble con papas y gaseosa');
      switch (pedido) {
        case "1":
          mostrarAlert("Elegiste combo 1. ¡Está en preparación!");
          break;
        case "2":
          mostrarAlert("Elegiste combo 2. ¡Está en preparación!");
          break;
        default:
          mostrarAlert("Disculpá, el pedido que ingresaste no está disponible. Por favor, elegí entre 1 y 2.");
          break;
      }
    } while (pedido !== "1" && pedido !== "2");
  }
  
  // Función para agregar bebidas alcohólicas al pedido
  function agregarBebidasAlcoholicas() {
    const edad = obtenerEdad();
    if (edad >= 18) {
      const bebida = prompt("Si sos mayor de 18, podés agregar bebidas alcohólicas. ¿Deseas hacerlo?\n1: Cerveza 1 litro\n2: Cerveza en lata");
      switch (bebida) {
        case "1":
          mostrarAlert("Agregaste cerveza de un litro a tu pedido.");
          break;
        case "2":
          mostrarAlert("Agregaste cerveza en lata a tu pedido.");
          break;
        default:
          mostrarAlert("No elegiste ninguna bebida alcohólica.");
          break;
      }
    }
  }
  
  // Lógica principal del programa
  function main() {
    verificarEdadParaBebidas(obtenerEdad());
    elegirPedido();
    agregarBebidasAlcoholicas();
    pedidoListo();
  }
  
  // Iniciar el programa
  main();
  