const aluno = {
nome: 'Tiquinho Suarez',
escola: 'Botafogo',
nota: 'Libertadores'
}

function infoEstudante (objAluno, infoAluno) {
    return objAluno[infoAluno]
}

console.log(infoEstudante(aluno, 'escola'))
console.log(infoEstudante(aluno, 'nome'))
//resumidamente, os colchetes transformam as chaves em strings que podem ser chamadas