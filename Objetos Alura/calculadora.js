
const calculadora = {
    soma: function (x,y) {
        return x+y
    },
    subtracao: function (x,y) {
        return x-y
    },
    multiplicacao: function (x,y) {
        return x*y
    },
    divisao: function (x,y) {
        return x/y
    },
    calcularMedia: function (array) {
        const soma = array.reduce((x,y) => x + y, 0)
        return soma / array.length
    }
}

const numeros = [7,45,7,8,5,4]

console.log(calculadora.soma(3,2));
console.log(calculadora.subtracao(3,2));
console.log(calculadora.multiplicacao(3,2));
console.log(calculadora.divisao(3,2));
console.log(calculadora.calcularMedia(numeros));

        
