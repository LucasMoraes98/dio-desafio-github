class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.altura = altura;
        this.nome = nome;
        this.peso = peso;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    classicarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc < 25) {
            return ('Peso normal');
        } else if (imc < 30) {
            return ('Acima do peso');
        } else if (imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoa('Lucas', 68, 1.65);
const amanda = new Pessoa('Amanda', 88, 1.69);

console.log(jose.classicarIMC());
console.log(jose.calcularIMC());