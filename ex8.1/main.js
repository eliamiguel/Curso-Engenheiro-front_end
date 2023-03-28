const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="images/aprovado.png" alt="emoji festejando" />'
const imgRprovado = '<img src = "images/reprovado.png" alt="Emoji decepcionado"/>'
const atividades = [];
const notas =[];
const spanAprovado = '<span class="resultado Aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima: "))
let linhas = ' ';
form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  adicionaLinha ();
  atualizaTabela();
  atualizaMediaFinal();
  

});

function adicionaLinha (){
  const inputNomeAtividade = document.getElementById('nome-atividade')
  const inputNotaAtividade = document.getElementById('nota-atividade')
  
  if (atividades.includes(inputNomeAtividade.value)){
    alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
  } else{
    atividades.push(parseFloat(inputNomeAtividade.value));
    notas.push(parseFloat(inputNotaAtividade.value));
  
    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value} </td>`
    linha +=`<td>${inputNotaAtividade.value} </td>`
    linha +=`<td>${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgRprovado } </td>`
    linha +='</tr>'
    
    linhas += linha;
  }

  inputNomeAtividade.value=" "
  inputNotaAtividade.value =" "

}

function atualizaTabela(){
  const corpoTablela = document.querySelector('tbody')
  corpoTablela.innerHTML = linhas;

}

function atualizaMediaFinal(){
  const mediaFinal= calculaMediafinal()
  document.getElementById('media-final-valor').innerHTML=mediaFinal;
  document.getElementById('media-final-resultado').innerHTML= mediaFinal>=notaMinima ? spanAprovado : spanReprovado; 
}

function calculaMediafinal(){
  let somaDasNotas = 0

  for (let i=0; i < notas.length; i++){
    somaDasNotas+= notas[i]
    
  }
  return somaDasNotas / notas.length;


}





/*   
JQuery
header{
  background-color: #5f27cd;
  padding: 16px 0;
  color: white;
  display: flex;
  border-bottom: 16px solid #3427cd;
  justify-content: center;
  text-transform: uppercase;
  font-style: italic;
}
header button{
  margin-left: 16px;
}
form {
  display: none;
  background-color: #c8d6e5;
  padding: 24px 0;
  text-align: center;
}
input, button{
  padding: 8px;
}
form h2{
  margin-bottom:16px;
}
button{
  background-color: #009432;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform:uppercase;
  color: white;
}
#botao-cancelar{
  background-color: red;
}
ul{
  
  display: flex;
  flex-wrap: wrap;
}
ul li {
  max-width: 25%;
  list-style: none;
  position: relative;
  max-height: 280px;
  overflow-y: hidden;
  
}
ul li img{
  width:100%;
}
.imagen-ink {
  padding: 16px;
  background-color: rgba(0,0, 0,0.7);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: all ease.5s;
}
.imagen-ink a{
  color: white;
  text-decoration: none;
}
ul li:hover .imagen-ink {
  opacity: 1;
}
*/