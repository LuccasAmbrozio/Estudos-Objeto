const students = require('./estudante.json')
const stringStudents = JSON.stringify(students)
//transform the object into string
console.log(stringStudents);
const objStudents = JSON.parse(stringStudents)
//transform the stringObject into object
console.log(objStudents);
