$(document).ready(function(){
   const list=$('<li></li>')
   
   $('form').on ('submit', function(e){
      
      e.preventDefault();
      const inputNomeTarefa= $('#nome').val()
      
      $(`<li id="i">${inputNomeTarefa}</li>`).appendTo(list)
      $(list).appendTo('ul');
      $('#nome').val('')
      
   })
   $(list).click(function(){
   $(list).addClass('itens')
   })
   
   
})

