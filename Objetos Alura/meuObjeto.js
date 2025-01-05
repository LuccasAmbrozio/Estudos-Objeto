const estudantes = {
    informacoes: [
{
    nome: 'Luccas Ambrozio',
    classe: '8° ano',
    endereco: {
    rua: 'Gastão Madeira',
    numero: 590,
    complemento: 'apto 47'
    }
},{
    nome:'Rubber Mafalda',
    classe: '8° ano',
    endereco: {
    rua: 'Maria Da Penha',
    numero: 666,
    complemento: ''
    }
}
]
}

estudantes.informacoes.push({
    nome: 'Bruno Henrique',
    classe: '9° ano',
    }
)
const complemento = estudantes.informacoes.filter((informacoes) => 
    informacoes.endereco)


const chavesObj = Object.keys(estudantes) 
if (!chavesObj.includes('endereco')) {
    console.log('Endereço não identificado');
}


console.log(estudantes)
console.log(estudantes.informacoes[0].endereco.rua);
console.log(complemento);
