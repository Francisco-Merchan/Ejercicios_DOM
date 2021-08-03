// // Ejercicio 1
// const parrafo = document.querySelector("p");
// let textoParrafo = parrafo.textContent;
// let arrayTexto = textoParrafo.split(".");
// let arrayFinal = arrayTexto.join("</p>");
// parrafo.innerHTML = arrayFinal;

// Ejercicio 2
// let palabras = 0;
// const titulo = document.querySelector("h1");
// const parrafoPalabras = document.createElement("p");
// parrafoPalabras.style.color = "red";
// const parrafo = document.querySelector("p");
// let textoParrafo = parrafo.textContent;
// let sinPuntos = textoParrafo.replace(/[^a-zA-Z ]/g, "");
// const arrayPalabras = sinPuntos.split(" ");
// for (let i = 0; i < arrayPalabras.length; i++) {
//   if (typeof arrayPalabras[i] === "string") {
//     palabras++;
//   }
// }
// parrafoPalabras.textContent = `La cantidad de palabras que contiene el parrafo es ${palabras}`;
// titulo.insertAdjacentElement("afterend", parrafoPalabras);

// Ejercicio 3

// const elemento = document.querySelector("p");
// const form = document.createElement("form");
// elemento.insertAdjacentElement("afterend", form);

// const label1 = document.createElement("label");
// label1.textContent = "Nombre de Ususario";
// const input1 = document.createElement("input");
// input1.type = "text";
// input1.style.display = "block";

// const label2 = document.createElement("label");
// label2.style.display = "block";
// label2.style.marginTop = "15px";
// label2.textContent = "Contraseña";
// const input2 = document.createElement("input");
// input2.type = "passsword";
// input2.style.display = "block";

// const label3 = document.createElement("label");
// label3.style.display = "block";
// label3.style.marginTop = "15px";
// label3.textContent = "Confirme su contraseña";
// const input3 = document.createElement("input");
// input3.type = "passsword";

// const button = document.createElement("button");
// button.textContent = "Iniciar sesion";
// button.type = "submit";
// button.style.display = "block";
// button.style.marginTop = "15px";

// form.append(label1, input1, label2, input2, label3, input3, button);
