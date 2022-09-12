let operador = String(prompt("Digite um desses operadores: +   -   *   /"));
function calculate(num1, num2) {
    if (operador === "+"){
        return num1+num2;

    } else if (operador === "-"){
        return num1-num2;

    }else if (operador === "*"){
        return num1*num2;

    }else if (operador === "/"){
        return num1/num2, num1%num2
    }
}
var resultado = calculate(5, 7);
console.log('Resultado: ', resultado);


