class cliente {
  constructor(data) {
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.mail = data.mail;
    this.cel = data.cel;
  }
}

let cliente1 = new cliente({
  nombre: prompt("Hola! Bienvenido a La Barberia! Ingresa tu nombre"),
  apellido: prompt("Ingresa tu apellido"),
  mail: prompt("Ingresa tu mail"),
  cel: parseInt(prompt("Ingresa tu celular")),
});

console.log(cliente1);

const horariosCorte = ["8:00", "9:00", "10:00", "11:00", "12:00"];

for (let index = 0; index < 5; index++) {
  alert(horariosCorte[index]);
}

let horarioCorte = prompt("Por favor indica un horario para reservar un turno");

const eliminar = (turno) => {
  let posicion = horariosCorte.indexOf(turno);

  if (posicion != -1) {
    horariosCorte.splice(1, 1);
  }

  console.log(horariosCorte);
};

eliminar(horarioCorte); //Se elimina un horario de los disponibles.

const cortes = [
  { id: 1, nombre: "FADE", precio: 1500 },
  { id: 2, nombre: "CRESTA", precio: 2000 },
  { id: 3, nombre: "MOHICANO", precio: 2500 },
  { id: 4, nombre: "RAPADO", precio: 500 },
  { id: 5, nombre: "COLOR", precio: 3000 },
];

cortes.forEach((item) => {
  alert(item.nombre);
});

let corte = prompt("Ingrese el nombre del corte a realizar");
let producto = cortes.find((item) => item.nombre === corte.toUpperCase());
console.log(producto.precio);

let pago = prompt(
  `El corte elegido cuesta $${producto.precio}, si pagas en EFECTIVO = 10% de descuento, con TARJETA = 15% de recargo. Como deseas abonar?? EFECTIVO o TARJETA??`
);

function calculadora(precioCorte, opcionPago) {
  switch (opcionPago) {
    case "EFECTIVO":
      return precioCorte * 0.9;
      break;

    case "TARJETA":
      return precioCorte + precioCorte * 0.15;
      break;
  }
}

producto.precio = calculadora(producto.precio, pago.toUpperCase());

console.log(producto.precio);

alert(
  `FELICITACIONES ${cliente1.nombre} ${cliente1.apellido}, ya tenes tu turno para el dia de hoy a las ${horarioCorte}. El corte de pelo a realizar es el ${producto.nombre} y cuesta ${producto.precio}. Te enviaremos esta informacion al ${cliente1.cel} y al siguiente mail: ${cliente1.mail} TE ESPERAMOS!!!`
);
