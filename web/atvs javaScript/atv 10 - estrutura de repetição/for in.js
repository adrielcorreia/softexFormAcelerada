let Pessoa = {
    Nome: 'Jeffrey Dahmer',
    Idade: 31,
    Cidade: 'Milwaukee'
}

for (const p in Pessoa) {
    console.log(`${p}: ${Pessoa[p]}`);
}