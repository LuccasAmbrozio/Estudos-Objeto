const pessoa = {
    nome: 'Bruno Henrique',
    idade: 187,
    solteiro: true,
    hobbies: ['mamar', 'dar', 'dancar'],
    endereco: {
    rua: 'Teobaldo Pinto',
    cidade: 'Pintópolis',
    estado: 'Bahia'
    }
}
  for (const key in pessoa) {
   const tipo = typeof pessoa[key] 
   if (tipo !== 'object' && tipo !== 'function') {
    console.log ('A chave é '+pessoa[key])
   }
  }

    

