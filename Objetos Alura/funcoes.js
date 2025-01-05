const objetos = {
    nome: 'Carlitos De La Cruz',
    idade: 67,
    CPF: '544487687402',
    curso: 'javaScript',
    media: 7,
    passouDeAno: function (mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(objetos.passouDeAno(7))