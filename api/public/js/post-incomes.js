$(document).ready(function(){
    $("#btnIncomes").click(function(){
        $.ajax({
            type: "POST",
            dataType: "json",
            url: 'http://localhost:10010/5a4682393ecbe0ae47c6997/incomes',
            data: $("#formIncomes").serialize(),
        })
        .done(function(data) {
            console.log("Realizado a inserção com sucesso!" + data);
        })
        .fail(function(jqXHR, text, error) {
            console.log("Erro: "+ error + "\nText: " + text + "\njqXHR: " + jqXHR);
        });
    });
});
