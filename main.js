const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const verde = document.getElementById("verde");
const titulo= document.getElementsByClassName("titulo");


const fondo = document.getElementById("main");
const acordeon = document.getElementsByClassName("acordeon");


rojo.addEventListener("click",function(){
    fondo.style.background =  "rgb(175, 78, 71)";
});

azul.addEventListener("click",function(){
    fondo.style.background =  "rgb(80, 122, 156)";
});

verde.addEventListener("click",function(){
    fondo.style.background =  "rgb(80, 156, 105)";
});


for (let i= 0; i<titulo.length; i++) {
    titulo[i].addEventListener('click', ()=>{
        if (acordeon[i].classList[1] == "activado") {
            acordeon[i].classList.add("desactivado");
            acordeon[i].classList.remove("activado");
            console.log(i)
        } else{
            acordeon[i].classList.add("activado");
            acordeon[i].classList.remove("desactivado");
            console.log(i)
        }
    })
}













