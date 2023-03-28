$(document).ready(function(){
  $('header button').click( function(){
    $('form').slideDown();
  })
  $("#botao-cancelar").click(function(){
    $("form").slideUp();
  })

  $('Form').on('submit', function(e){
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src=" ${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`
    <div class="imagen-ink">

    <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
    Ver imagem em tamanho real
    </a>
  </div>`).appendTo(novoItem);
  $(novoItem).appendTo('ul');
  $(novoItem).fadeIn(1000);
  $('#endereco-imagem-nova').val('');
  })

})