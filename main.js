var n1 = Number(prompt("Digite um número"));
var n2 = Number(prompt("Digite outro número"));
var operacao = prompt("+, -, * ou /");
var resultado;

function calcular(n1, n2, operacao){

let resultado;


 if (operacao === "+"){
   resultado = (n1 + n2);
}

else if (operacao === "-"){
    resultado = (n1 - n2);
   }
else if (operacao === "*"){
        resultado = n1 * n2;
    }
else if (operacao === "/"){
        resultado = (n1 / n2);
    }

    else {
    return "ERRo, digite +,-,* ou /"
}

return (resultado)
}
resultado = calcular(n1, n2, operacao);
console.log("Resultado é:");
alert(resultado);

