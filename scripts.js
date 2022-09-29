//Botón activo navegador
let navegadorActivo = document.getElementById("navegador");
let botonActivo = navegadorActivo.getElementsByClassName("botonMenu");
for (let i = 0; i < botonActivo.length; i++) {
  botonActivo[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("activo");
  current[0].className = current[0].className.replace(" activo", "");
  this.className += " activo";
  });
}

//Botón activo galería
let header = document.getElementById("navegador1");
let btns = header.getElementsByClassName("botonMenu1");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("activo1");
  current[0].className = current[0].className.replace(" activo1", "");
  this.className += " activo1";
  });
}
