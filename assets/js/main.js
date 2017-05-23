var btnIniciarSesion=document.getElementById("iniciarSesion");
 var regresa = document.getElementById("regresa");


var iniciarSesion= document.getElementById("inicia-sesion");


btnIniciarSesion.addEventListener("click",mostrarIniciarSesion);

function mostrarIniciarSesion(){
  iniciarSesion.style.display="block";
}

regresa.addEventListener("click",regresar);

function regresar(){
  iniciarSesion.style.display="none";
}
