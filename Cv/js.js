
let boton= document.getElementById("boton");
let foto= document.getElementById("foto");
boton.onclick= function(){
    foto.style.width="250px";
    foto.style.height="250px"
    document.getElementById("boton").innerHTML="2 click para volver"
}
boton.ondblclick=function(){
    foto.style.width="120px";
    foto.style.height="120px"
    document.getElementById("boton").innerHTML="Ampliar"
}