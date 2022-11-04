function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classicarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Acima do peso';
    } else if (imc < 40) {
        return 'Obesidade';
    } else {
        return 'Obesidade grave';
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classicarImc(imc));
}

main();