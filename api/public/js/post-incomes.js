$(document).ready(function(){
    $("#btnIncomes").on('click', function(){
        console.log('AKI');
        console.log(JSON.stringify($("#formIncomes")));
        $.ajax({
            type: "POST",
            dataType: "application/json",
            url: 'http://localhost:10010/5a350ddef0439d0684137eaa/incomes',
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
