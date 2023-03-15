const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
  const nomeCompleto = nomeCompleto.split('');
  return nomeCompleto.length >= 2;
}
form.addEventListener('submit', function(e){
  let formEvalido = false
  e.preventDefault();

  const nomeBeneficiario = document.getElementById('nome-beneficiario')
 
   formEvalido = validaNome(nomeBeneficiario.value)
   if(formEvalido) {
    alert('esta tudo certo!');
    
  } else {
    alert("O nome não está completo");
    
  }
})
console.log(form);
