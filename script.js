var attivita = new Array();
var dentro= document.getElementById("testoAttivita");

function AggiungiAttivita() {

var testo = dentro.value;

if (testo == ""){
  alert("Prima di fare AGGIUNGI dovresti scrivere un'attività");

} else{
  var numero= attivita.length + 1;
  var stringacompleta= numero + "  " + testo ;

  attivita[attivita.length]= testo;
  document.getElementById("txtLista").value += stringacompleta + "\n";
  dentro.value=""; 
}
}

function RimuoviAttivita(){ 
  var numero = document.getElementById("testoNumero");
  var altronumero = parseInt(numero.value, 10);

  attivita.splice(altronumero - 1, 1);

  var lista = document.getElementById("txtLista");
  lista.value = "";
  for (var i = 0; i < attivita.length; i++) {
    lista.value += (i + 1) + "  " + attivita[i] + "\n";
  }

  numero.value = "";
}
