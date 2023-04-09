$(document).ready(function(){
   
   
   $('form').on ('submit', function(e){
      e.preventDefault();

      const NomeDaTarefa = $('#nome').val()
      
      const list=$('<li id="i"></li>')
      
      $(`<li >${NomeDaTarefa}</li>`).appendTo(list)
      $(list).appendTo('ul');
      $('#nome').val('')
      $(list).click(function(){
         $(list).addClass('itens')
         })
      
   })
   
   
   
})


