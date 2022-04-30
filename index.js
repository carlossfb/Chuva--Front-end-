
//Aqui nós criamos a interação com o "...ver mais" do texto grande que temos em resumo -> Jquery
$("#botao-mais").click(mostraMais);
function mostraMais() {
      $(".texto").toggle();
      if($("#botao-mais").text() === '...Ver mais') {
         $("#botao-mais").text('Ver menos')
      } 
      else {
        $("#botao-mais").text('...Ver mais')
      }
};

//Aqui nós alteramos o html de discussões para aparecer um pequeno form -> Jquery
$("#btn-topicos").click(function(){
$("#topicos-hide").hide();

var content = "<div id='form'><p class='form-text-center'>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>"+
              "<div class='mb-3'>"+
                "<label for='ControlInput1' class='form-label'>Email address</label>"+
                "<input type='text' class='form-control' id='ControlInput1' placeholder='Assunto'>"+
              "</div>"+
                "<div class='mb-3'>"+
                  "<label for='ControlTextarea1' class='form-label'>Conteúdo</label>"+
                  "<textarea class='form-control' id='ControlTextarea1' rows='3'></textarea>"+
                "</div>"+
                  "</div>"+
                "<div class='d-flex justify-content-end div-btn'><button id='btn-enviar' class='btn btn-dark btn-enviar'>Enviar</button></div>";
                //Escreve o formulário
                $("#content").html(content);
                //captura o botão pelo id para a confirmação de envio
                $("#btn-enviar").click(function(){
                  
                  var content2 = "<p class='text-center card-h1'>Seu tópico foi enviado com sucesso! :D</p>"+
                                  "<p class='confirmacao'>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>"+
                                  "<p class='confirmacao2'>Descubra outros trabalhos!</p>"+
                                  "<div class='text-center'><button class='px-5  my-2 btn btn-dark btn-topicos'>Criar novo tópico</button></div>";
                
                  $("#content").html(content2);
                  });
});

