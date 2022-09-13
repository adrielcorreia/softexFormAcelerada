//-------------NODE JS ----------------
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('A simple Node App is ' + 'running on this server');
    res.end();
})

const PORT = process.env.PORT || 2409
app.listen(PORT, console.log('Server started on port', PORT));
//-------------------------------------

//fiz uma pequena alteração pois estava dando erro no prompt do input
var operador = '/'
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


