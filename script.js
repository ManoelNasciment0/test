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


function validar_form_reserv() {
  var data = form_reserv.data.value;
  var hora = form_reserv.hora.value;
  var pessoas = form_reserv.pessoas.value;
  var nome = form_reserv.nome.value;
  var email = form_reserv.email.value;

  if (data != "" &&  hora != "" && pessoas != "" && nome != "" && email != "" ){
    alert("Sua Reserva foi salva, estamos te aguardando no Restaurante Start!");
    form_reserv.data.focus();
    return false;
  } else{
    alert("Por favor verifique se todos os dados foram preenchidos.");
  }
}


function cancelar_form_reserv() {
  var data = form_reserv.data.value;
  var hora = form_reserv.hora.value;
  var pessoas = form_reserv.pessoas.value;
  var nome = form_reserv.nome.value;
  var email = form_reserv.email.value;

  if (data >= "" ||  hora >= "" || pessoas >= "" || nome >= "" || email >= "" ){
    alert("Sua reserva foi cancelada!");
    form_reserv.data.focus();   
  } else{
    return false;
  }
}
