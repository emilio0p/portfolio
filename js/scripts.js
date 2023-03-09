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