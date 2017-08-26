/***************************************************************************
* ATIVA O USO DOS <SELECTS>
****************************************************************************/
$(document).ready(function() {
    $('select').material_select();
  });

/***************************************************************************
* ESTA FUNÇÃO É SÓ PARA A PÁGINA HOME DEVIDO AOS MODAIS QUE TEM PARA
* PREENCHER OS <SELECTS>
****************************************************************************/
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

/***************************************************************************
* ESTA FUNÇÃO É SÓ PARA AS PÁGINAS RECEITA E DESPESA
****************************************************************************/
function ano() {
	var init = 2010;
	var date = new Date();
	var yearCurrent = date.getFullYear();
	var comboAnos = document.getElementById("cbAno");
	var cbAnosModal = document.getElementById("cbAnosModal");
	for (init ; init <= yearCurrent; init++) {
		var element = document.createElement("option");
		var elem = document.createElement("option");
		element.value = init;
		element.text = init;
		elem.value = init;
		elem.text = init
		comboAnos.add(element, comboAnos.options[init]);
		cbAnosModal.add(elem, cbAnosModal.options[init]);
	}	
}