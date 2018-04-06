$(document).ready(function(){
 
  // POPUP
  $("#fecha-popup").click(function(){
    $("#popup").css("display","none");
   return false;
  });

  // ATENDIMENTO ONLINE
  function move_box() {
   var offset = 150; // set offset (likely equal to your css top)
   var element = document.getElementById('fixed_div');
   element.style.top = (window.pageYOffset + offset) + 'px';
  }
  window.setInterval(move_box, 0);

     $(".btn-enviar").on("click",function() {
       var erros = "";
      //Nome 
      if($(".name").val() == "") 
       {
         erros = 1;

         $( ".name" ).validate({
          rules: {
                name: {
                required: true,
              }
          }
        });

      }else{
         $(".name").css({
           "background":"#61a59a",
           "color":"#FFF"
         });
      }

      //Email
      if($(".email").val() == "") 
       {
         erros = 1;

         $( ".email" ).validate({
          rules: {
                name: {
                required: true,
              }
          }
        });

      }else{
         $(".email").css({
           "background":"#61a59a",
           "color":"#FFF"
         });
      }

      //Telefone
       if($(".phone").val() == "")
       {
         erros = 1;
         $( ".phone" ).validate({
          rules: {
                name: {
                required: true,
              }
          }
        });

       }else{
         $(".phone").css({
           "background":"#61a59a",
           "color":"#FFF"
         })
       }

       //Empreendimento
       if($(".empreendimento").val() == "")
       {
         erros = 1;
          $( ".empreendimento" ).validate({
          rules: {
                name: {
                required: true,
              }
          }
        });

       }else{
         $(".empreendimento").css({
           "background":"#61a59a",
           "color":"#FFF"
         });
       }

       //Mensagem
       if($(".mensagem").val() == "")
       {
         erros = 1;
          $( ".mensagem" ).validate({
          rules: {
                name: {
                required: true,
              }
          }
        });

       }else{
         $(".mensagem").css({
           "background":"#61a59a",
           "color":"#FFF"
         });
       }

       if(erros == "") {

         $.ajax({
                 url: "envia.php",
                 type: 'POST',
                 success: function( data )  
                   { 
                     
                    $(location).attr('href', 'http://www.vempramerolar.com.br/obrigado.html');

                   },
                   data: {nome:$(".name").val(), email:$(".email").val(), phone:$(".phone").val(), empreendimento:$(".empreendimento").val(), mensagem:$(".mensagem").val()}
             });
       }
 
       return false;
     });
 });
