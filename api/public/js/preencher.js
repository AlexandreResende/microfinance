$(document).ready(function() {
    $('select').material_select();
  });

function preencheAno() {
	var init = 2010;
	var date = new Date();
	var yearCurrent = date.getFullYear();
	var comboAnosReceita = document.getElementById("comboAnosReceita");
	var comboAnosDespesa = document.getElementById("comboAnosDespesa");
	for (init ; init <= yearCurrent; init++) {
		var element = document.createElement("option");
		var elem = document.createElement("option")
		element.value = init;
		element.text = init;
		elem.value = init;
		elem.text = init;
		comboAnosReceita.add(element, comboAnosReceita.options[init]);
		comboAnosDespesa.add(elem, comboAnosDespesa.options[init]);
	}	
}