$(document).ready(function() {
    var largura = $(window).width(); /* Capturando a do cliente */
    if (largura <= 921) {
    /* Se a Largura do monitor for menor ou = que 921 px */
    $("#hire").hide(); /* Esconde a bandeira azul*/
    $("#resize").hide(); /* Esconde "triangulo" resize no canto inferior direito*/
    }
    else if (tam >= 922) {
    /* Se não for a condição a cima e for marior ou = a 922 px */
    $("#hire").show(); /* Mostra a bandeira azul*/
    $("#resize").show(); /* Mostra "triangulo" resize no canto inferior direito*/
    }
  });

  function validar_form_contact() {
    var nome = form_contact.nome.value;
    var email = form_contact.email.value;
    var telefone = form_contact.telefone.value;
    var assunto = form_contact.assunto.value;
    var mensagem = form_contact.mensagem.value;
  
    if (nome != "" &&  email != "" && telefone != "" && assunto != "" && mensagem != "" ){
      alert("Sua mensagem foi enviada ao Restaurante Start!");
      form_reserv.data.focus();
      return false;
    } else{
      alert("Por favor verifique se todos os dados foram preenchidos.");
    }
  }