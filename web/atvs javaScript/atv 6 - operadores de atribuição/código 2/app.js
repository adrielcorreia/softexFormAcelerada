const btn = document.getElementById("send");
var num3 = 0;
var med = 0;
var n1 = 0;
var n2 = 0;
var n2 = 0;

btn.addEventListener("click", function(e) {
    n1 = parseFloat(document.getElementById('n1').value);
    n2 = parseFloat(document.getElementById('n2').value);
    n3 = 0;
    med = (n1+n2+n3)/3;
    console.log(n1+n2+n3, med);
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';

    while (med < 6) {
        num3 = num3 + 0.5;
        med = (n1+n2+num3)/3;
    }

    document.getElementById('minima').textContent = "Nota mínima que você precisa na próxima prova, para passar: " + num3;
    num3 = 0;
})


