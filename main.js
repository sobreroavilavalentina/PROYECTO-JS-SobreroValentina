alert('¡Bienvenido al Hotel Ummi! \nSERVICIO A LA HABITACIÓN\n')
alert('Has solicitado el servicio a la habitación de DESAYUNO.\nA continuación, contanos que preferís para desayunar y lo alcanzaremos a tu habitación en un instante!')

// PEDIDO DE BEBIDA

// defino variables fuera de función para que la próxima función pueda leerlas también de ser necesario (bebidaFinal)
let bebida = ''
let bebidaSelecc = ''
let endulzante = ''
let endulSelecc = ''
let extra = ''
let extraSelecc = ''
let bebidaFinal = ''

const pedirBebida = () => {

  const opcionesBebida = {
    1: 'Café',
    2: 'Cortado',
    3: 'Té de hierbas',
    4: 'Té de rosas'
  }

  const opcionesEndul = {
    1: 'Azúcar',
    2: 'Edulcorante',
    3: 'Sin endulzante'
  }

  const opcionesExtra = {
    1:'Leche de almendras',
    2:'Leche de coco',
    3:'Jugo de naranja',
    4:'Jugo de arándanos',
    5:'No deseo nada extra'
  }

  bebida = prompt('Ingresa el número del tipo de bebida que desea: \n 1. Café \n 2. Cortado \n 3. Té de hierbas \n 4. Té de rosas')
  bebidaSelecc = opcionesBebida[bebida]

  endulzante = prompt('Seleccione el tipo de endulzante que prefiera: \n 1. Azúcar \n 2. Edulcorante \n 3. Sin endulzante')
  endulSelecc = opcionesEndul[endulzante]

  if (endulzante == 1) {
    endulSelecc = (`con azúcar`)
  } else if (endulzante == 2){
    endulSelecc = (`con edulcorante`)
  } else if (endulzante == 3){
    endulSelecc = (`sin endulzante`) 
  } else {
    alert('Ingrese una opción válida');
  }

  do {
    extra = prompt(`¿Desea añadir a su ${bebidaSelecc} ${endulSelecc} alguna de nuestras opciones extra?\n 1. Leche de almendras\n 2. Leche de coco\n 3. Jugo de naranja\n 4. Jugo de arándanos\n 5. No deseo nada extra`);
    extraSelecc = opcionesExtra[extra];

    if (extra <= '4') {
      alert(`Añadiremos ${extraSelecc} a su ${bebidaSelecc} ${endulSelecc}`);
    } else if (extra == 5) {
      alert(`Perfecto! Su ${bebidaSelecc} ${endulSelecc} ya está en camino.`);
    } else {
      alert('Ingrese una opción válida');
    }
  } while (!(extra >= 1 && extra <= 5))

  bebidaFinal = (`${bebidaSelecc} ${endulSelecc}`)

}
pedirBebida ()


// PEDIDO DE COMIDA

let comida = ''
let cantidad = 0
let comidaFinal = ''
let comidaSelecc = ''
let sumarComida = true;

const pedirComida = () => {

  const opcionesComida = {
    1: 'Medialuna',
    2: 'Cookie',
    3: 'Tostada con palta y tomate',
    4: 'Brownie'
  };

  do {
    comida = prompt(`Selecciona con qué quieres acompañar tu ${bebidaFinal}: \n1. Medialuna\n2. Cookie\n3. Tostada con palta y tomate\n4. Brownie`)
    comidaSelecc = opcionesComida[comida]

    cantidad = parseInt(prompt('¿Cuántos quieres encargar?'))
    let cantidadValidada = validarCantidad(cantidad)

    if (comidaSelecc) {
      switch (comida) {
      case '1':
        comidaSelecc = 'Medialuna(s)'
        break;
      case '2':
        comidaSelecc = 'Cookie(s)'
        break;
      case '3':
        comidaSelecc = 'Tostada(s) con palta y tomate'
        break;
      case '4':
        comidaSelecc = 'Brownie(s)'
        break;
      default:
        alert('Alguno de los productos es incorrecto')
        cantidadValidada = 0
        break;
      }

      comidaFinal += `${cantidadValidada} - ${comidaSelecc}\n`

    } else {
      alert('Opción inválida. Por favor, ingrese un número válido.')
    }
    sumarComida = confirm('¿Desea sumar otro aperitivo?')
  } while (sumarComida);
}

const validarCantidad = (cantidad) => {
  while (Number.isNaN(cantidad) || cantidad === 0) {
    alert ('Debe ingresar una cantidad valida!')
    cantidad = parseInt (prompt ('¿Cuántos querés comprar?'))
  }
  return cantidad
}
pedirComida();

let pedidoFinal = alert (`Perfecto! Ha seleccionado de bebida: \n ${bebidaFinal} \n y como aperitivo: \n${comidaFinal}\n Enseguida se lo alcanzaremos a su habitación.`)
