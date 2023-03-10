// EJERCICIO 1

const setTheme = theme => 
document.documentElement.className = theme;

// EJERCICIO 2

const selectOpciones = document.getElementById("modulo");
const divOpcion1 = document.getElementById("carta1");
const divOpcion2 = document.getElementById("carta2");
const divOpcion3 = document.getElementById("carta3");
const divOpcion4 = document.getElementById("carta4");
const divOpcion5 = document.getElementById("carta5");

function esconderMostrarCartas() {
    if (selectOpciones.value === "all"){
        divOpcion1.style.display = "block";
        divOpcion2.style.display = "block";
        divOpcion3.style.display = "block";
        divOpcion4.style.display = "block";
        divOpcion5.style.display = "block";
}else if (selectOpciones.value === "niuno") {
    divOpcion1.style.display = "none";
    divOpcion2.style.display = "none";
    divOpcion3.style.display = "none";
    divOpcion4.style.display = "none";
    divOpcion5.style.display = "none";
  }
else if (selectOpciones.value === "java") {
    divOpcion1.style.display = "none";
    divOpcion2.style.display = "block";
    divOpcion3.style.display = "none";
    divOpcion4.style.display = "none";
    divOpcion5.style.display = "block";
  } else if (selectOpciones.value === "sql") {
    divOpcion1.style.display = "none";
    divOpcion2.style.display = "none";
    divOpcion3.style.display = "none";
    divOpcion4.style.display = "block";
    divOpcion5.style.display = "block";
  } else if (selectOpciones.value === "html") {
    divOpcion1.style.display = "block";
    divOpcion2.style.display = "none";
    divOpcion3.style.display = "block";
    divOpcion4.style.display = "none";
    divOpcion5.style.display = "block";
  } else if (selectOpciones.value === "css") {
    divOpcion1.style.display = "block";
    divOpcion2.style.display = "none";
    divOpcion3.style.display = "block";
    divOpcion4.style.display = "none";
    divOpcion5.style.display = "block";
  } else if (selectOpciones.value === "js") {
    divOpcion1.style.display = "none";
    divOpcion2.style.display = "none";
    divOpcion3.style.display = "block";
    divOpcion4.style.display = "none";
    divOpcion5.style.display = "block";
  }
}

selectOpciones.addEventListener("change", esconderMostrarCartas);

// EJERCICIO 3

const contacto = document.querySelector(".contacto__content__form");

const textArea = document.getElementById("body");

const fila1 = document.createElement("p");

const fila2 = document.createElement("p");

const fila3 = document.createElement("p");

textArea.addEventListener("blur", function() {
  if (textArea.value === "") {
    textArea.style.border="red 4px solid";
    fila1.textContent = "No has rellenado el text area";
    fila1.style.color = "red";
    fila1.style.fontWeight = 800;
    contacto.appendChild(fila1);
  } else {
    textArea.style.border="green 4px solid";
    fila1.remove();
  }
});




const asunto = document.getElementById("asunto");

asunto.addEventListener("blur", function() {
  if (asunto.value === "") {
    asunto.style.border="red 4px solid";
    fila2.textContent = "No has rellenado el asunto";
    fila2.style.color = "red";
    fila2.style.fontWeight = 800;
    contacto.appendChild(fila2);
  } else {
    asunto.style.border="green 4px solid";
    fila2.remove();
  }
});

const nombre = document.getElementById("nomb");

nombre.addEventListener("blur", function() {
  if (nombre.value === "") {
    nombre.style.border="red 4px solid";
    fila3.textContent = "No has rellenado el nombre";
    fila3.style.color = "red";
    fila3.style.fontWeight = 800;
    contacto.appendChild(fila3);
  } else {
    nombre.style.border="green 4px solid";
    fila3.remove();
  }
});