$(document).ready(function(){

    const convertToJson = (string) => {
        const stringArray = string.split('&');
        const result = {};

        for (const str of stringArray) {
            splittedString = str.split('=');
            result[splittedString[0]] = splittedString[1];      
        }
        return JSON.parse(JSON.stringify(result));
    }

    $("#btnIncomes").on('click', function(){
        $.ajax({
            type: "POST",
            dataType: "text",
            url: 'http://localhost:10010/5a350ddef0439d0684137eaa/incomes',
            data: convertToJson(($("#formIncomes").serialize())),
        })
        .done(function(data) {
            console.log("Realizado a inserção com sucesso!");
        })
        .fail(function(jqXHR, text, error) {
            console.log("Erro: "+ error + "\nText: " + text + "\njqXHR: " + jqXHR);
        });
    });
});
