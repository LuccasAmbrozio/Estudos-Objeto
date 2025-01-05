

const pessoas = {
    nome: 'Jergolon',
    notas: [5,6,8,2],
    
    calcularMediaNotas: function () {
        const somaNotas = this.notas.reduce((a,c) => a + c,0)
        const media = somaNotas/this.notas.length
        return media.toFixed(2)
        //limitar em 2 casas decimais
    }, 
    
    classificarDesempenho: function () {
    const media = this.calcularMediaNotas()
    
    if (media >= 9) {
        return'Desempenho excelente'
    } else if (media < 9 && media >= 7.5) {
    return'Bom desempenho'
    } else if (media < 7.5 && media >= 6){
    return'Desempenho regular'
    } else {
        return'desempenho insuficiente'
    }
    }
}
console.log(pessoas.calcularMediaNotas())
console.log(pessoas.classificarDesempenho())
