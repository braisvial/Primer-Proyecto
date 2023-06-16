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
  if (usuario.value != ""){
    const nombre_usuario = usuario.value;
    console.log(nombre_usuario)    
    cerrar_login();
  }  
}

//-----DESCARGAR-----\\

function mostrar_descargar() {
  let popUp = document.getElementById("descargar_popup");
  popUp.style.display = "block";
}

function cerrar_descargar() {
  let popup = document.getElementById('descargar_popup');
  popup.style.display = 'none';
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
  foto1.style.filter= "grayscale(100%)"
});

const foto2 = portada.querySelector(".foto2");
foto2.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 2fr 1fr 1fr 1fr";
  foto2.style.filter = "none"
}); 
foto2.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto2.style.filter= "grayscale(100%)"
});

const foto3 = portada.querySelector(".foto3");
foto3.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 2fr 1fr 1fr";
  foto3.style.filter = "none"
}); 
foto3.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto3.style.filter= "grayscale(100%)"
});

const foto4 = portada.querySelector(".foto4");
foto4.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 2fr 1fr";
  foto4.style.filter = "none"
}); 
foto4.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto4.style.filter= "grayscale(100%)"
});

const foto5 = portada.querySelector(".foto5");
foto5.addEventListener('mouseover', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 2fr";
  foto5.style.filter = "none"
}); 
foto5.addEventListener('mouseout', () => {
  portada.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  foto5.style.filter= "grayscale(100%)"
});