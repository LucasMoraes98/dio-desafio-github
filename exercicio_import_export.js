const { gets, print} = require('./base_import');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteados = gets();
    if(numeroSorteados > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteados;
    }
}

print(maiorValorEncontrado);