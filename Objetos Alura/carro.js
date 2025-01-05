const carro = {
    marca:'Honda',
    modelo:'Civic',
    ano:2020,
    cor:'Prata',
    placa: 'FDA435D'
}

const carroNovo = {
    marca: "Hyundai",
    modelo: "Tucson",
    ano: 2023,
    cor: "Azul"
};

// Utilize o operador spread para criar um novo objeto com as propriedades de carro e carroNovo

const carroComNovosDetalhes = { ...carro, ...carroNovo };
carroComNovosDetalhes.cor = 'Preto'

Object.defineProperty(carro, "placa", { enumerable: false });

for (const key in carro) {
    console.log(key+': '+carro[key] ) 
     
}

const chavesEnumeraveis = Object.keys(carro)
console.log(chavesEnumeraveis);
console.log(carroComNovosDetalhes);




