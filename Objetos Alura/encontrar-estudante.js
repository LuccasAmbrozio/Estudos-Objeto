const estudantes = require('./estudantes.json'); 
function encontrarEstudante(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor))
}
const estudanteEncontrado = encontrarEstudante(estudantes, 'telefone', '5896279799')
console.log(estudanteEncontrado);
