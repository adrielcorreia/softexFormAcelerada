//--------------------------------------------

function alarm() {
    console.log("Hora de Acordar!");    //Função tradicional sem parâmetros
}
//--------------------------------------------

function congratulations(name){
    return console.log(`meus parabéns ${name}!`);   //Funcão tradicional com parâmetros e retorno
}
congratulations('adriel');
//--------------------------------------------

let add = (a, b) => console.log(`${a} + ${b} = ${a+b}`);   //Função Arrow Function com parâmetros e retorno
add(5, 4);
//--------------------------------------------
