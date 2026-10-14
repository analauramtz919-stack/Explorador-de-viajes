/* =========================================
EXPLORADOR DE VIAJES
Archivo principal de la aplicación
========================================= */
/* =========================================
REFERENCIAS DEL DOM
========================================= */

/* IMPORTS */
import { obtenerPaises } from "./api/countriesApi.js";

// estado de la aplicacion 
let paises = [];

//referencias del dom
const destinationsContainer = document.querySelector(
"#destinations-container"
);
const resultsCount = document.querySelector(
"#results-count"
);

const initialMesage = document.querySelector('#initial-message');
/* =========================================
INICIALIZACIÓN DE LA APLICACIÓN
========================================= */
async function init() {
console.log("Explorador de Viajes iniciado");
//resultsCount.textContent = "0 destinos";

//mostrar estado de carga
initialMesage.innerHTML = /* html */`
<div class="text-5xl mb-4">
 🌎
</div>

<h3 class="
            text-xl
            font-semibold
            text-slate-800
            mb-2
        "> Cargando destinos </h3>

<p class = "text-slate-500"> Estamos consultado informacion de paises alrededor del mundo </p>
`

//obtener paises desde la api
paises = await obtenerPaises();
console.log('Paises obtenidos: ', paises);

// actualizar contador
resultsCount.textContent = `${paises.length} destinos`;

//mostrar resultados de la carga
if(paises.length > 0){
    initialMesage.innerHTML = /* html */`
    <div class="text-5xl mb-4">✅</div>
     <h3 class="
            text-xl
            font-semibold
            text-slate-800
            mb-2
        ">Destinos cargados</h3>
    <p class = "text-slate-500"> Se obtuvieron ${paises.length} destinos correctamente </p>
    
    `;

   
}else {
    //mostrar un mensaje si ocurre un error
    initialMesage.innerHTML = /* html */`
    <div class="text-5xl mb-4">⚠️</div>
    <h3 class="
            text-xl
            font-semibold
            text-slate-800
            mb-2
        ">No fue posible cargar los países</h3>
    <p class = "text-slate-500"> Verifica tu conexión y vuelvelo a intentar </p>
   `
}

}
/* =========================================
INICIAR APLICACIÓN
========================================= */
init();