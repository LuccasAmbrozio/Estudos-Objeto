const pessoas = [
    {nome: 'Caroline',idade: 18,cidade: 'Salvador',
    }, {nome: 'Rogerio',idade: 35,cidade: 'Rio De janeiro',
    }, {nome:'Manuel', idade: 54, cidade: 'São paulo'}]


pessoas.push({nome:'Camila', idade: 42, cidade: 'Piauí'})

function mostrarListaPessoa(obj) {
    obj.forEach(pessoa => {
    console.log(pessoa)
}); 
}

function filtrarPorCidade(pessoas, cidade) {
    console.log (pessoas.filter(pessoa => pessoa.cidade === cidade)) 
}


mostrarListaPessoa(pessoas)
filtrarPorCidade(pessoas, 'Salvador')
