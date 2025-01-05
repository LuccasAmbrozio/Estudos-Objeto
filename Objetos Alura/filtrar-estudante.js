const estudantes = require('./estudantes.json')

function filtrarEstudante(lista, propriedade) {
    //propriedade =  o que esta dentro do endereco
return estudantes.filter(estudante => {
    return !estudante.endereco.hasOwnProperty(propriedade)
})    
}
const enderecosImcompletos = filtrarEstudante(estudantes, 'cep' )
console.log(enderecosImcompletos);
