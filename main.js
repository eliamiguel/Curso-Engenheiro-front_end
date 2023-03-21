
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




