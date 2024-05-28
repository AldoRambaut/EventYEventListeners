// Ejercicio 1
document.querySelector("#cambiarFondo").addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("text-bg-primary");
});

// Ejercicio 2
const galeria = document.querySelector("#galeria");
const fotos = galeria.children;
const navegacionGaleria = document.querySelector("#navegacionGaleria");
let indice = 0;
const actualizarImagen = () => {
  document.querySelector("#imgPrincipal").src = fotos[indice].src;
};
actualizarImagen();
navegacionGaleria.addEventListener("click", (event) => {
  if (event.target.id == "anterior") {
    indice = (--indice + fotos.length) % fotos.length;
    actualizarImagen();
  } else if (event.target.id == "siguiente") {
    indice = (++indice + fotos.length) % fotos.length;
    actualizarImagen();
  }
});

// Ejercicio 3
document.querySelector("#nombre").addEventListener("input", (event) => {
  const msjErrorNombre = document.querySelector("#msjErrorNombre");
  const msjOkNombre = document.querySelector("#msjOkNombre");
  if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(event.target.value)) {
    msjErrorNombre.classList.remove("d-none");
    msjOkNombre.classList.add("d-none");
  } else {
    msjErrorNombre.classList.add("d-none");
    msjOkNombre.classList.remove("d-none");
  }
});

document.querySelector("#correo").addEventListener("input", (event) => {
  const msjErrorCorreo = document.querySelector("#msjErrorCorreo");
  const msjOkCorreo = document.querySelector("#msjOkCorreo");
  if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(event.target.value)
  ) {
    msjErrorCorreo.classList.remove("d-none");
    msjOkCorreo.classList.add("d-none");
  } else {
    msjErrorCorreo.classList.add("d-none");
    msjOkCorreo.classList.remove("d-none");
  }
});

document.querySelector("#telefono").addEventListener("input", (event) => {
  const msjErrorTelefono = document.querySelector("#msjErrorTelefono");
  const msjOkTelefono = document.querySelector("#msjOkTelefono");
  if (!/^\d{10}$/.test(event.target.value)) {
    msjErrorTelefono.classList.remove("d-none");
    msjOkTelefono.classList.add("d-none");
  } else {
    msjErrorTelefono.classList.add("d-none");
    msjOkTelefono.classList.remove("d-none");
  }
});

// Ejercicio 4
document.querySelector("#modoOscuro").addEventListener("input", (event) => {
  if (event.target.checked) {
    document.body.classList.add("text-bg-dark");
  } else {
    document.body.classList.remove("text-bg-dark");
  }
});

// Ejercicio 5
document.querySelector('#enlaceInicio').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#inicio').scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelector('#enlacePreguntas').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#preguntas').scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelector('#enlaceRespuestas').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#respuestas').scrollIntoView({
    behavior: 'smooth'
  });
});
// Ejercicio 6
const elementoArrastrable = document.getElementById("arrastrar");

let offsetX, offsetY;
let isDragging = false;

elementoArrastrable.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDragging = true;
  offsetX = event.clientX - elementoArrastrable.getBoundingClientRect().left;
  offsetY = event.clientY - elementoArrastrable.getBoundingClientRect().top;
  elementoArrastrable.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    elementoArrastrable.style.left = `${x + scrollX}px`;
    elementoArrastrable.style.top = `${y + scrollY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  elementoArrastrable.style.cursor = "grab";
});

// Ejercicio 7
function mostrarAlerta() {
  alert("¡Tiempo agotado!");
}

function iniciarTemporizador() {
  const tiempoInicial = 10;
  let tiempoRestante = tiempoInicial;

  const intervalo = setInterval(() => {
    document.getElementById("contador").textContent = tiempoRestante;
    tiempoRestante--;

    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      mostrarAlerta();
    }
  }, 1000);
}

window.addEventListener("load", iniciarTemporizador);

// Ejercicio 8
const listaTareas = document.querySelector("#listaTareas");
document.querySelector("#agregarTarea").addEventListener("click", (event) => {
  event.preventDefault();
  const nuevaTarea = prompt("Ingrese la tarea a agregar a la lista");
  const agregarALista = document.createElement("div");
  agregarALista.classList.add("form-check");
  agregarALista.innerHTML = `<input type="checkbox" class="form-check-input verificarCheck">
        <label for="" class="form-check-label">${nuevaTarea}</label>`;
  listaTareas.appendChild(agregarALista);
});
document.querySelector("#marcarTarea").addEventListener("click", (event) => {
  event.preventDefault();
  const tareas = listaTareas.querySelectorAll(".verificarCheck");
  tareas.forEach((element) => {
    if (element.checked) {
      element.nextElementSibling.classList.toggle("text-success");
      element.checked = false;
    }
  });
});
document.querySelector("#eliminarTarea").addEventListener("click", (event) => {
  event.preventDefault();
  const tareas = listaTareas.querySelectorAll(".verificarCheck");
  tareas.forEach((element) => {
    if (element.checked) {
      element.parentElement.parentElement.removeChild(element.parentElement);
    }
  });
});

// Ejercicio 9
document.body.addEventListener("keydown", (event) => {
  if (event.key == "a") {
    document.body.style.backgroundColor = "blue";
    document.body.addEventListener("keyup", (event) => {
      document.body.style.backgroundColor = "inherit";
    });
  }
  if (event.key == "r") {
    document.body.style.backgroundColor = "red";
    document.body.addEventListener("keyup", (event) => {
      document.body.style.backgroundColor = "inherit";
    });
  }
  if (event.key == "v") {
    document.body.style.backgroundColor = "green";
    document.body.addEventListener("keyup", (event) => {
      document.body.style.backgroundColor = "inherit";
    });
  }
});

// Ejercicio 10 con libreria
const imagenEfecto = document.querySelector(".efectoParallax");
new simpleParallax(imagenEfecto, {
  scale: 1.5,
});

// Ejercicio 10 sin libreria
let scrollComp = window.scrollY;

window.addEventListener("scroll", () => {
  const contenedorParallax = document.querySelector(".contenedorParallax");
  contenedorParallax.style.overflow = 'hidden';
  const contenedorTop = contenedorParallax.offsetTop;
  const contenedorHieght = contenedorParallax.offsetHeight;
  const scroll = window.scrollY;
  const mediaPantalla = screen.height / 2;
  const imgParallax = document.querySelector('#imgParallax');

  if (scroll >= contenedorTop - mediaPantalla && scroll <= contenedorTop + contenedorHieght - mediaPantalla) {
    if (scroll > scrollComp) {
      imgParallax.style.top = `${imgParallax.offsetTop - 2}px`;
    }
    else if (scroll < scrollComp) {
      imgParallax.style.top = `${imgParallax.offsetTop + 2}px`;
    }
  }
  scrollComp = scroll;
});
