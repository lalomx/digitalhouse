const sumar = require('./sumar') // vanila
const restar = require('./restar')
const multiplicar = require('./multiplicar')
const division = require('./division')

// import restar from './restar' // ES6 EcmaScript
// babel

// camelCase 
// pascalCase

const suma = sumar( 10, 2)
const resta = restar(10, 2)
const mult = multiplicar(10, 2)
const div = division(10, 2)
const entreCero = division(10, 0)

console.log(suma)
console.log(resta)
console.log(mult)
console.log(div)
console.log(entreCero)
