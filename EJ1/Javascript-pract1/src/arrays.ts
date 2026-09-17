const students =
[
    {name:"lmao", numControl:12, age:14},
    {name:"lmao2", numControl:12123, age:17},
    {name:"lmao3", numControl:1232, age:13},
    {name:"lmao4", numControl:1221, age:14},
    {name:"lmao5", numControl:12123, age:17},
    {name:"lmao6", numControl:1232, age:13},
    {name:"lmao7", numControl:12, age:145},
    {name:"lmao8", numControl:12123, age:7},
    {name:"lmao9", numControl:125432, age:1341},
    {name:"lmao10", numControl:12, age:1412},
    {name:"lmao11", numControl:12123, age:11},
    {name:"lmao12", numControl:125432, age:1}
]

var nombres = students.map(student => `${student.name},`)
console.log(nombres)

const estudiante = students.find(student => student.name == 'lmao2')
console.log(estudiante)

const someStudent = students.some(student => student.age == 10)
console.log(someStudent)

const todosConEdad50 = students.every(student => student.age != 50)
console.log(todosConEdad50)

const edadTotal = students.reduce((total,student) => total + student.age,0)
console.log(edadTotal)

console.log([1,2,3].includes(2))

const numbers = [1,4,52,35,33,117,135235,1235235,1253]
const sortNumbers = numbers.sort((a,b) => b - a )
console.log(sortNumbers)