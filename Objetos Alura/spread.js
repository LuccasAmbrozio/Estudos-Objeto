const objetos = {
    nome: 'Carlitos De La Cruz',
    idade: 67,
    CPF: '544487687402',
    curso: 'javaScript',
    endereco: {
        rua: 'Gastão Madeira',
        numero: 590,
        complemento: 'apto 47'
    }
}

dadosrelevantes = {
    nome: objetos.nome,
    ...objetos.endereco
}
console.log(dadosrelevantes);

