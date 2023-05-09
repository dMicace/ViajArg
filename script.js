// Botón de Menu

function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
}
//

//Funciones del carrusel

window.onload = function () {

    // Array que contiene las rutas de las imágenes del carrusel
    const IMAGENES = [
        'imagenes/carrusel/rsz_mendoza.jpg',
        'imagenes/carrusel/cuyoo.jpg',
        'imagenes/carrusel/rsz_estrellassj.jpg',
        'imagenes/carrusel/rsz_sanjuan.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen_carrusel');
    let intervalo;

    
 // Funcion que cambia la foto en la siguiente posicion

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


 // Funcion que cambia la foto en la anterior posicion

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


// Funcion que actualiza la imagen de imagen dependiendo de posicionActual

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


// Activa el autoplay de la imagen

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

// Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

// Iniciar
    playIntervalo();
    renderizarImagen();
} 

//formulario

const form = document.getElementById('myForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

form.addEventListener('submit', function (event) {
    // Validar nombre
    if (nombreInput.value === '') {
        alert('Por favor, ingrese su nombre');
        event.preventDefault();
        return;
    }

    // Validar email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Por favor, ingrese un email válido');
        event.preventDefault();
        return;
    }

    // Validar mensaje
    if (mensajeInput.value === '') {
        alert('Por favor, ingrese su mensaje');
        event.preventDefault();
        return;
    }
});
