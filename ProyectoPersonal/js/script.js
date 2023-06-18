//-----LOGIN-----\\

function mostrar_login() {
  let popUp = document.getElementById("login_popup");
  popUp.style.display = "block";

  const boton_iniciar = document.getElementById("iniciar");
  boton_iniciar.addEventListener("click", iniciar_sesion);

}

function cerrar_login() {
  let popUp = document.getElementById("login_popup");
  popUp.style.display = "none";
}

const usuario = document.getElementById("nombre_usuario");
const contraseña = document.getElementById("contrasena");


function iniciar_sesion() {
  if (usuario.value != "") {
    const nombre_usuario = usuario.value;
    console.log(nombre_usuario)
    cerrar_login();
  }
}

//-----MENU DESPLEGABLE-----\\

function mostrar_menu() {
  var menu_desplegable = document.querySelector('.desplegable');
  menu_desplegable.style.display = (menu_desplegable.style.display === 'block') ? 'none' : 'block';
}

//-----MOVIMIENTO PORTADA-----\\

const portada = document.querySelector(".fotos_portada")

const foto1 = portada.querySelector(".foto1");
foto1.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "2fr 1fr 1fr 1fr 1fr";
  foto1.style.filter = "none"
});
foto1.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto1.style.filter = "grayscale(100%)"
});

const foto2 = portada.querySelector(".foto2");
foto2.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 2fr 1fr 1fr 1fr";
  foto2.style.filter = "none"
});
foto2.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto2.style.filter = "grayscale(100%)"
});

const foto3 = portada.querySelector(".foto3");
foto3.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 2fr 1fr 1fr";
  foto3.style.filter = "none"
});
foto3.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto3.style.filter = "grayscale(100%)"
});

const foto4 = portada.querySelector(".foto4");
foto4.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 2fr 1fr";
  foto4.style.filter = "none"
});
foto4.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto4.style.filter = "grayscale(100%)"
});

const foto5 = portada.querySelector(".foto5");
foto5.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 2fr";
  foto5.style.filter = "none"
});
foto5.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto5.style.filter = "grayscale(100%)"
});


//-----DESCARGAR-----\\

function descargarArchivo() {
  var url = "./img/launcher.gif";
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "blob";

  var progressBar = document.getElementById("progressBar");

  progressBar.style.display = "flex";                                                         // Mostrar la barra de progreso al iniciar la descarga
  progressBar.value = 0;                                                                      // Reiniciar el valor de la barra de progreso

  let tiempoInicial = Date.now();                                                             // Obtener el tiempo inicial
  let duracionDeseada = 5000;                                                                 // 5 segundos en milisegundos

  var intervalo = setInterval(function () {
    var tiempoActual = Date.now();                                                            // Obtener el tiempo actual en milisegundos
    var tiempoTranscurrido = tiempoActual - tiempoInicial;                                    // Calcular el tiempo transcurrido en milisegundos

    var progreso = (tiempoTranscurrido / duracionDeseada) * 100;
    console.log(progreso)
    progressBar.value = progreso;
    if (tiempoTranscurrido >= duracionDeseada) {
      clearInterval(intervalo);                                                               // Detener el cronómetro después de 5 segundos

      setTimeout(function () {
        progressBar.style.display = "none";                                                     // Retrasar la ocultación de la barra de progreso para que se muestre durante un tiempo
      }, 1000);                                                                                 // Retrasar la ocultación durante 2 segundos (ajusta el tiempo según tus necesidades)

      abrirArchivo()
    }
  }, 100)

  function abrirArchivo() {
    var blob = request.response;
    var enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "launcher.gif";
    enlace.click();  
  };

  request.send();
}


