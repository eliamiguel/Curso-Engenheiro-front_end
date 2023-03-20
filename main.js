const form =document.getElementById('form')
let input = document. querySelector('#numero1')
let inputcampb = document.querySelector('#numero2')
const mensse =document.querySelector('.res')
console.log(input)


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