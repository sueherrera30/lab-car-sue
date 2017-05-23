var btnIniciarSesion=document.getElementById("iniciarSesion");
console.log(btnIniciarSesion);

var iniciarSesion= document.getElementById("inicia-sesion");
console.log("iniciarSesion");

btnIniciarSesion.addEventListener("click",mostrarIniciarSesion);

function mostrarIniciarSesion(){
  iniciarSesion.style.display="block";
}


