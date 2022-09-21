var Banco = {
    conta: '12345678-9',
    saldo: 1250.45,
    tipoDeConta: "corrente",
    agência: "caixa",

    buscarSaldo: function() {
        console.log('Saldo atual: ' + this.saldo);
        return;
    },

    deposito: function(v) {
        this.saldo += v;
        console.log(`Depositado R$ ${v} na sua conta. Seu saldo: ${this.saldo}`)
        return;
    },

    saque: function(v) {
        this.saldo -= v;
        console.log(`Sacado R$ ${v} da sua conta. Seu saldo: ${this.saldo}`)
        return;
    },

    nmrDaConta: function() {
        console.log(`Número da conta: ${this.conta}`);
        return;
    }
}

Banco.buscarSaldo();
Banco.deposito(100);
Banco.saque(50);
Banco.nmrDaConta();
