const btn = document.getElementById('btn');

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);
    
    const media = parseFloat(((n1+n2+n3)/3).toFixed(1));
    console.log('média: ', media);

    if (typeof media === "number") {
        var resultado = (media >= 6) ? 'Aprovado!' : 'Reprovado';
        alert(resultado);
    }
})