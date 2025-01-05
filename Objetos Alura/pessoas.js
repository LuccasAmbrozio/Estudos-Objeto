const pessoas = [
    {nome: 'Bucetosauro',idade: 18,cidade: 'Xique-Xique',
    }, {nome: 'Pintosauro',idade: 35,cidade: 'Pintopolis',
    }, {nome:'Cuzãosauro', idade: 999, cidade: 'Rio Tiete'}]


pessoas.push({nome:'peitosauro', idade: 555, cidade: 'tetopolis'})

function mostrarListaPessoa(obj) {
    obj.forEach(pessoa => {
    console.log(pessoa)
}); 
}

function filtrarPorCidade(pessoas, cidade) {
    console.log (pessoas.filter(pessoa => pessoa.cidade === cidade)) 
}


mostrarListaPessoa(pessoas)
filtrarPorCidade(pessoas, 'Pintopolis')