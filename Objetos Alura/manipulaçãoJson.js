const fs = require('fs');

const animal = require('./animais.json')
console.log(animal);


const novoAnimal = {
    id: 4,
    nome: 'lobo',
    habitat: 'Siberia'
}
animal.animais.push(novoAnimal)


fs.writeFileSync('./animais.json', JSON.stringify(animal, null, 2)); 

console.log(animal);








