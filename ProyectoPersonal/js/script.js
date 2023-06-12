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

//--------IMAGENES---------\\
// function desplegar(){
//   let n = document.querySelector("fotos_portada");
//   n.mouseover
// }

// let algo = document.querySelector("fotos_portada");
// algo.addEventListener("mouseover", (evento) => {
//   console.log(target.style.color = "red")
// })