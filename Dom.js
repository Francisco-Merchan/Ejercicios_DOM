/*
//Tarea 1 -- Ejercicios DOM

//Numero de enlaces de la pagina
const referencia = document.querySelector("#informacion");
const enlaces = document.querySelectorAll("a");
const arrayEnlaces = [...enlaces];
const mostrarCantidad = document.createElement("h3");
mostrarCantidad.textContent = `La cantidad de enlaces <a>  es ${arrayEnlaces.length}`;
referencia.appendChild(mostrarCantidad);

//Direccion a la quie enlaza el penultimo enlace
const penultimo = arrayEnlaces[arrayEnlaces.length - 2];
const enlacePenultimo = penultimo.href;
const mostrarPenultimo = document.createElement("h3");
mostrarPenultimo.textContent = `La direccion a la que lleva el penultimo enlace es ${enlacePenultimo} `;
referencia.appendChild(mostrarPenultimo);

//Numero de enlaces que enlazan a https://prueba
let numeroEnlaces = 0;
for (let i = 0; i < arrayEnlaces.length; i++) {
  if (arrayEnlaces[i].href === "http://prueba/") {
    numeroEnlaces++;
  }
}
const cantidadEnlaces = document.createElement("h3");
cantidadEnlaces.textContent = `La cantidad de enlaces que levan a http://prueba son ${numeroEnlaces}`;
referencia.appendChild(cantidadEnlaces);

//Numero de enlaces del tercer parrafo
const parrafos = document.querySelectorAll("p");
const arrayParrafos = [...parrafos];
arrayParrafos[2].className = "tercer-parrafo";
const tercerParrafoEnlaces = document.querySelectorAll(".tercer-parrafo a");
const arrayTercerParrafoEnlaces = [...tercerParrafoEnlaces];
const mostrarEnlacesPenultimo = document.createElement("h3");
mostrarEnlacesPenultimo.textContent = `El tercer parrafo tiene ${arrayTercerParrafoEnlaces.length} enlaces`;
referencia.appendChild(mostrarEnlacesPenultimo);
*/

/*
//Tarea 2 -- Ejercicio DOM

const referencia = document.querySelector("#root");
const header = document.createElement("header");
const h1Header = document.createElement("h1");
h1Header.className = "bg-danger";
h1Header.textContent = "Rompe Seven";
const heroSection = document.createElement("div");
heroSection.className = "hero-section";
const image = document.createElement("img");
image.src = "./gallardo.jpg";
referencia.append(header, h1Header, heroSection, image);
*/
