const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="images/aprovado.png" alt="emoji festejando" />'
const imgRprovado = '<img src = "images/reprovado.png" alt="Emoji decepcionado"/>'

let linhas = ' ';
form.addEventListener('submit', function(e) {
  e.preventDefault(); 

const inputNomeAtividade = document.getElementById('nome-atividade')
const inputNotaAtividade = document.getElementById('nota-atividade')
let linha = '<tr>'
linha += `<td>${inputNomeAtividade.value} </td>`
linha +=`<td>${inputNotaAtividade.value} </td>`
linha +=`<td>${inputNotaAtividade.value >=7 ? imgAprovado : imgRprovado } </td>`
linha +='</tr>'

linhas += linha;

const corpoTablela = document.querySelector('tbody')
corpoTablela.innerHTML = linhas

inputNomeAtividade.value=" "
inputNotaAtividade.value =" "

});




