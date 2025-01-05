/*const anoAtual = new Date(). getFullYear()


const livro = {
    titulo: "Harry Potter and the Philosopher's Stone",
    autor: "J.K.Rowling",
    anoPublicado: 2004,
    genero: "Magia e fantasia",
    idadePublicacao: anoAtual - 2004,
    avaliacao: null
    
}

livro.genero = 'aventura'

const novaAvaliacao = {nota: 8, comentario: 'Livro bom'}

if (livro.avaliacao === null)  {
    livro.avaliacao = novaAvaliacao
} 
else {
    console.log('Este livro já possui uma avaliação')
}

delete livro.avaliacao

console.log ('titulo: ' +livro.titulo)
console.log('Autor: ' +livro.autor);
console.log('Ano de publicação: ' +livro.anoPublicado);
console.log('Gênero: '+livro.genero);
console.log('Idade de publicação: ' +livro.idadePublicacao);
console.log('avaliação: ' +livro.avaliacao.nota+ ', comentario:' ,livro.avaliacao.comentario)*/


const anoAtual = new Date(). getFullYear()


const livro = {
    titulo: "Harry Potter and the Philosopher's Stone",
    autor: "J.K.Rowling",
    anoPublicado: 2004,
    genero: "Magia e fantasia",
    idadePublicacao: anoAtual - 2004,
    avaliacao: 8,
}
livro.personagens = ["Harry Potter, Rony, Hermione"]
livro.genero = 'aventura'

console.log(livro)
delete livro.avaliacao
console.log(livro)
console.log(livro.personagens[0])
    
