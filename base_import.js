const entradas = [10, 5, 50, 10, 98, 23, 98, 23, 100, 44, 33, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print};