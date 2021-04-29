import {listaCoders} from "./data.js"

// Variables 

let randomButton = document.getElementById("buttonRandom")
let killButton = document.getElementById("buttonDrink")
let randomName 
let resetCoders = document.getElementById('buttonRestart')
let rutaAbeja = document.getElementById('abeja')
let audioAbeja = document.getElementById('sonidoAbeja')
let usAbout = document.getElementById("sobreNosotros")
let play = document.getElementById("comoJugar")
let homePage = document.getElementById("principal")
let main1 = document.getElementById("mainHome")
let main2 = document.getElementById("mainAboutUs")
let main3 = document.getElementById("mainPlay") 
let beer1 = document.getElementById("cervezaLlena")
let beer2 = document.getElementById("cervezaVacia")
let audioimortal = document.getElementById("soundImortal")
// Eventlistener

randomButton.addEventListener('click', () => {
    selectRandom() 
    cambioImagen2()
})

killButton.addEventListener('click', () => {
    killCoder();
    cambioImagen()
    audioimortal.play()
})

resetCoders.addEventListener('click', () => {
    location.reload()
})

rutaAbeja.addEventListener('click', ()=>{
    audioAbeja.play()
})

usAbout.addEventListener('click', () =>{
    paginaAboutUs()
})
play.addEventListener('click', ()=>{
    paginaHowToPlay()
})
homePage.addEventListener('click', ()=>{
    paginaHome()
})
// Función: desplegar nombres

function desplegarNombres () {
    let templateHTML = ""
    for(let i=0; i < listaCoders.length; i++) {
    templateHTML += `<li>🍺${listaCoders[i].nombre}</li>` 
    }
    document.getElementById("listaNombres").innerHTML = templateHTML;
}

//  Función: selección random de nombres         

function selectRandom() {
    randomName = listaCoders [Math.floor(Math.random() * listaCoders.length)]
    document.getElementById('printName').innerHTML = randomName.nombre;
}


// Función: quitar al nombre de la lista

function killCoder() {
    for(let i=0; i < listaCoders.length; i++) {
        if (listaCoders [i] === randomName){
            listaCoders.splice(i,1)
        }
    }
    document.getElementById('printName').innerHTML = '';
    desplegarNombres()
}

desplegarNombres()

// Funciones cambio de página

function paginaAboutUs() {
    if (main1.style.display == "block") {
        (main1.style.display = "none")
    }
    if (main2.style.display == "none") {
        (main2.style.display = "block")
    }
    if (main3.style.display == "block") {
        (main3.style.display = "none")
    }
}
function paginaHowToPlay() {
    if (main1.style.display == "block") {
        (main1.style.display = "none")
    }
    if (main3.style.display == "none") {
        (main3.style.display = "block")
    }
    if (main2.style.display == "block") {
        (main2.style.display = "none")
    }
}
function paginaHome() {
    if (main2.style.display == "block") {
        (main2.style.display = "none")
    }
    if (main1.style.display == "none") {
        (main1.style.display = "block")
    }
    if (main3.style.display == "block") {
        (main3.style.display = "none")
    }
}

// funciones cambio página

function cambioImagen(){
    if (beer1.style.display == "block") {
        (beer1.style.display = "none")
    }
    if (beer2.style.display == "none") {
        (beer2.style.display = "block")
    }
}

function cambioImagen2() {
    if (beer2.style.display == "block") {
        (beer2.style.display = "none")
    }
    if (beer1.style.display == "none") {
        (beer1.style.display = "block")
    }
}

// funcion añadir coder
const añadirCoder = document.getElementById("botonAñadirCoder");
añadirCoder.addEventListener('click', () => {
    coderNuevo()
})

desplegarNombres();

function coderNuevo() {
    const nuevoCoder = document.getElementById("añadirCoder").value;
    listaCoders.push(nuevoCoder);

    
    
}




