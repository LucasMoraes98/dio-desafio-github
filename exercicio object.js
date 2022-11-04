/*criando classe carro */

class Carro{
    marca;
    cor;
    gastoMedioKm;

    /* criando constructor para exigir os atributos de carro*/
    constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
    }

    /* funcao para fazer o custo de gasolina gasto por determinada distancia*/
    calcularGP(distanciaemKm, precoCombustivel) {
        return distanciaemKm * this.gastoMedioKm * precoCombustivel;
    }

}

/*declarando os valores para o atributo*/
const uno = new Carro(`Fiat`, 'vermelho', 1/12);
const palio = new Carro('Palio', 'prata', 1/10);

/*chamando os carros declarando a distancia e valor combustivel */
console.log(uno.calcularGP(70,5));
console.log(palio.calcularGP(70,5));