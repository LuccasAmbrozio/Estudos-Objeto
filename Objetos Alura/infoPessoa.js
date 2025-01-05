const pessoa = {
    nome: 'Bruno ',
    idade: 18,
    solteiro: true,
    hobbies: ['jogar', 'dancar'],
    endereco: {
    rua: 'Junior Macedo',
    cidade: 'Hortolândia',
    estado: 'Bahia'
    }
}
  for (const key in pessoa) {
   const tipo = typeof pessoa[key] 
   if (tipo !== 'object' && tipo !== 'function') {
    console.log ('A chave é '+pessoa[key])
   }
  }

    

