//Data Api

let duplicado = 0;

let nuevoContenedor = document.getElementById("contenedorGaleriaImagenes");
 
let cambiarBusqueda = "All";

function crearGaleria() {

duplicado++;

let idNuevo = duplicado;

let urlBase = "https://api.unsplash.com/";
let searchEndPoint = "search/photos?";
let page = "page=";
let numberPage = idNuevo;
let query = "&query=";
let searchWord = cambiarBusqueda;
let apiKey ="&client_id=I2VeMuONZKwCv0hMk-oQEBIXm2ZlMjvW0DbbcAiSthU";

let url = `${urlBase}${searchEndPoint}${page}${numberPage}${query}${searchWord}${apiKey}`;

let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
 

fetch(url, requestOptions)
.then(response => response.json())
.then(result => {
  let imagenes = result.results;
  console.log(imagenes)

  let bloqueImagen = document.createElement("div");

  let markupHTMLImagenes = `
    <div id="grid" class="galeriaFotos">
      <div class="columna1">
        <div class="bloqueFoto bloqueM">
          <img src=${imagenes[0].urls.small} alt="">
        </div>
        <div class="bloqueFoto bloqueL">
          <img src=${imagenes[1].urls.small} alt="">
        </div>
        <div class="bloqueFoto bloqueL">
          <img src=${imagenes[2].urls.small} alt="">
        </div>
      </div>
      <div class="columna2">
        <div class="bloqueFoto bloqueXs">
          <img src=${imagenes[3].urls.small} alt="">
        </div>
        <div class="bloqueFoto bloqueL">
          <img src=${imagenes[4].urls.small} alt="">
        </div>
        <div class="bloqueFoto bloqueXl">
          <img src=${imagenes[5].urls.small} alt="">
        </div>
      </div>
      <div class="columna3">
        <div class="bloqueFoto bloqueL">
          <img src=${imagenes[6].urls.small} alt="">
        </div>
        <div class="bloqueFoto bloqueS">
          <img src=${imagenes[7].urls.small} alt="">
        </div>
        <div class="bloqueFoto bloqueS">
          <img src=${imagenes[8].urls.small} alt="">
        </div>
        <div class="bloqueFoto bloqueS">
          <img src=${imagenes[9].urls.small} alt="">
        </div>
      </div>
    </div>
  `
  bloqueImagen.innerHTML = markupHTMLImagenes;
    
  let nuevoDiv = document.createElement("div");

  nuevoDiv.setAttribute("id", idNuevo);
  nuevoDiv.setAttribute("class", "tags");
  nuevoContenedor.appendChild(nuevoDiv);
  nuevoContenedor.appendChild(bloqueImagen);
  console.log(idNuevo);
  })
  .catch(error => console.log('error', error));
}

crearGaleria();


//Crear nuevo filtro de búsqueda
document.addEventListener("click", event => {  
  switch(event.target.innerText){
    case 'All': 
    duplicado = 0;
    cambiarBusqueda = event.target.innerText;
    document.getElementById("contenedorGaleriaImagenes").innerHTML = '';
    crearGaleria();
    break;
    case 'Branding': 
    duplicado = 0;
    cambiarBusqueda = event.target.innerText;
    document.getElementById("contenedorGaleriaImagenes").innerHTML = '';
    crearGaleria();
    break;
    case 'Web': 
    duplicado = 0;
    cambiarBusqueda = event.target.innerText;
    document.getElementById("contenedorGaleriaImagenes").innerHTML = '';
    crearGaleria();
    break;
    case 'Photography': 
    duplicado = 0;
    cambiarBusqueda = event.target.innerText;
    document.getElementById("contenedorGaleriaImagenes").innerHTML = '';
    crearGaleria();
    break;
    case 'App': 
    duplicado = 0;
    cambiarBusqueda = event.target.innerText;
    document.getElementById("contenedorGaleriaImagenes").innerHTML = '';
    crearGaleria();
    break;
  }
})