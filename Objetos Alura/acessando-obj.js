const aluno = {
nome: 'Henry',
escola: 'Lumiemre',
nota: '8.5'
}

function infoEstudante (objAluno, infoAluno) {
    return objAluno[infoAluno]
}
//resumidamente, os colchetes transformam as chaves em strings que podem ser chamadas

console.log(infoEstudante(aluno, 'escola'))
console.log(infoEstudante(aluno, 'nome'))
//Retorna o resultado da chave
