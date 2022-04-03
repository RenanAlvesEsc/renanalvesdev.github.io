var data = new Date;

var ano = data.getFullYear();
console.log(ano)

var mes = data.getMonth();
console.log(mes) //0 = 1

var dia = data.getDate();
console.log(dia)

mes += 1;
console.log(mes)

function verificarIdade() {
    var idadeUsuario = document.getElementById("idadeUsuario").value;

    console.log(idadeUsuario)

    var anoUsuario = idadeUsuario.slice(0, 4),
        mesUsuario = idadeUsuario.slice(5, 7),
        diaUsuario = idadeUsuario.slice(8, 10);

        console.log(anoUsuario)
        console.log(mesUsuario)
        console.log(diaUsuario)
    
        //2022-02-22
    
    anoUsuario = parseInt(anoUsuario); //transforma em inteiro
    mesUsuario = parseInt(mesUsuario);
    diaUsuario = parseInt(diaUsuario);
    
    var idade = ano - anoUsuario;

    if (mesUsuario > mes) {
        idade--;
    }
    else if (mesUsuario == mes) {
        if (diaUsuario > dia) {
            idade--;
        }
        else {
            idade+=0;
        }
    }
    else {
        idade+=0;
    }
    if (idade >= 18) {
        alert("Você pode entrar pois tem " + idade + " anos.")
    }
    else {
        alert("Você não pode entrar pois tem apenas, " + idade + " anos.")
    }
}
