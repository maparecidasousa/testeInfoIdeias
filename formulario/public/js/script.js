function validarTelefone(telefone) {
    var regex = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
    return regex.test(telefone);
}

function validarDate(dataNascimento) {
    var regex = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/;
    return regex.test(dataNascimento);
}

$(document).ready(function () {
    $("#phone").focusout(function () {
        var telefone = $("#phone").val();
        if (validarTelefone(telefone)) {
            $("#phone").css("color", "green");
        } else {
            $("#phone").css("color", "red");
            alert("Telefone inválido");
        }
    });

    $("#birthDate").focusout(function () {
        var dataNascimento = $("#birthDate").val();
        if (validarDate(dataNascimento)) {
            $("#birthDate").css("color", "green");
        } else {
            $("#birthDate").css("color", "red");
            alert("Data de nascimento inválida");
        }
    });

});