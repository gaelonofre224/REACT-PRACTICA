const estudiante = 
{
    name: 'test',
    lastname: 'test2',
    age: 117
}

//const name = estudiante.name
//const lastname = estudiante.lastname
//const age = estudiante.age

const { name, lastname, age } = estudiante
console.log(name, lastname, age)

const numbers = [1,2,3]
const [a,b] = numbers
console.log(a,b)

const materia = 
{
    semestre: 2,
    nombre: 'MATEMATICAS',
    turno: 'V'
}

//spread c:
const materiaModificada = materia
materiaModificada['Maestro'] = 'LMAO2'
console.log(materia,materiaModificada)

//ejemplo ahora si aplicando spread
const materiaModificada2 = 
{
    ...materia, 
    maestro:'lmao3'
}
console.log(materiaModificada2)
console.log(materia)

const materias = ['quimica1', 'quimica2', 'quimica0']
const materiaModificadas = materias
materiaModificadas.push('geografia')

console.log(materias,materiaModificadas)

const materiaModificadas2 = 
[
    ...materias,
    'deportes'
]

console.log(materias,materiaModificadas2)