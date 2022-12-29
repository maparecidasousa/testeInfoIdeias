function validatePhone(telephone) {
    var regex = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
    return regex.test(telephone);
}

function validateDate(birthDate) {
    var regex = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/;
    return regex.test(birthDate);
}

$(document).ready(function () {
    $("#phone").focusout(function () {
        var telephone = $("#phone").val();
        if (validatePhone(telephone)) {
            $("#phone").css("color", "green");
        } else {
            $("#phone").css("color", "red");
            alert("Telefone inválido");
        }
    });

    $("#birthDate").focusout(function () {
        var birthDate = $("#birthDate").val();
        if (validateDate(birthDate)) {
            $("#birthDate").css("color", "green");
        } else {
            $("#birthDate").css("color", "red");
            alert("Data de nascimento inválida");
        }
    });

});