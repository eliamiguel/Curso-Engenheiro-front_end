/*const form =document.getElementById('form')
let input = document. querySelector('#numero1')
let inputcampb = document.querySelector('#numero2')

console.log(input)*/
const form =document.getElementById('form')
const mensse =document.querySelector('.res')
let input = document.getElementById('numero1')
let inputcampb = document.getElementById('numero2')
let validarForm = true

form.addEventListener('submit', function(e){
  e.preventDefault();
  validar()

  if(validarForm){
    form.remove()
    mensse.classList.remove('erroCampoa')}
})

function validar(){
  validarForm =false
  if (input.value.length > inputcampb.value.length){
    inputcampb.classList.add('invalidB')
    inputcampb.nextElementSibling.classList.remove('erroCampob')
  } else {
    validarForm =true
      input.classList.remove('invalidA')
      input.nextElementSibling.classList.add('erroCampoa')
      
      
    } 

    
  
}
input.addEventListener('input', ()=>{
  inputcampb.classList.remove('invalidB')
    inputcampb.nextElementSibling.classList.add('erroCampob')
input.classList.remove('invalidA')
input.nextElementSibling.classList.add('erroCampoa')
})



/* input.classList.add('invalidA')
    input.nextElementSibling.classList.remove('erroCampoa')
    validarForm = true
/*input.addEventListener('input', ()=>{
  inputcampb.classList.remove('invalidB')
    inputcampb.nextElementSibling.classList.add('erroCampob')
input.classList.remove('invalidA')
input.nextElementSibling.classList.add('erroCampoa')
})*/


/*
 input.classList.remove('invalidA')
    input.nextElementSibling.classList.add('erroCampoa')
const form = document.getElementById("form");
let formEvalido = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validaForm();
});

function validaForm() {
  let campoA = document.getElementById("campo-a");
  let campoB = document.getElementById("campo-b");
  let mensagemSucesso = `Parabéns!!!  <b>${campoB.value}</b> é maior que o <b> ${campoA.value}</b>!!!`;
  let mensagemErro = `Error!!! <b> ${campoB.value} </b> é menor que o <b> ${campoA.value}</b>!!!`;
  let formEvalido = campoB.value > campoA.value;
  if (formEvalido) {
    let containerSucesso = document.querySelector(".mensagem-certa");
    containerSucesso.innerHTML = mensagemSucesso;
    containerSucesso.style.display = "block";

    campoA.value = "";
    campoB.value = "";
  } else {
    let containerErro = document.querySelector(".mensagem-erro");
    containerErro.innerHTML = mensagemErro;
    containerErro.style.display = "block";

    campoA.value = "";
    campoB.value = "";
  }
}

function limparMensagem() {}
*/

/*form.addEventListener('submit', function(e){
  e.preventDefault();
  validinput()
  
  if(Validform){
    form.remove()
    mensse.classList.remove('erroCampoa')
    
  }

})*/


/* assim que eliminar desaparecer a mensagem de er*/
/*input.addEventListener('input', ()=>{
  inputcampb.classList.remove('invalidB')
    inputcampb.nextElementSibling.classList.add('erroCampob')
input.classList.remove('invalidA')
input.nextElementSibling.classList.add('erroCampoa')
})*/


/*

const form =document.getElementById('form')
const input = document. querySelector('#numero1')
const inputcampb = document.querySelector('#numero2')
const mensse =document.querySelector('.res')

let Validform = false

function validinput() {

  Validform =true
  if(!input.value || !inputcampb.value  ){
    inputcampb.classList.add('invalidB')
    inputcampb.nextElementSibling.classList.remove('erroCampob')
    input.classList.add('invalidA')
    input.nextElementSibling.classList.remove('erroCampoa')
    Validform =false
  } 
}
function verificar(){
  if(input.value < inputcampb){
    
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  validinput()
  
  if(Validform){
    form.remove()
    mensse.classList.remove('erroCampoa')
    
  }

})
input.addEventListener('input', ()=>{
  inputcampb.classList.remove('invalidB')
    inputcampb.nextElementSibling.classList.add('erroCampob')
input.classList.remove('invalidA')
input.nextElementSibling.classList.add('erroCampoa')
})
*/