

// Variables (var, let, const)

var nombre = 'lalo'
let apellido = 'velazquez' // reasignable
const edad = 29 // no se puede reasignar

// Tipos de datos
// numero, string, booleano, array, objeto literal

let numero = 10008000
let cadena = 'fulanito de tal'
let esMayorDeAyer = true

let lista = [1, 2, 3, 4, 5]
let lista2 = [true, 'hola', { nombre: 'fulano'}, [], 9000]
let persona = {
  name: 'hola',
  edad: 30,
  calcularEdad: function() {
    return this.edad;
  }
}

let form = {
  value: 10,
  comments: 'Muy bien',
  user: {
    name: 'usuario',
    email: 'alguien@example.com'
  },
  enviarRating() {
    return this.value
  },
  paginasVisitadas: [1, 2, 3]
}

console.log(form.value)
console.log(form['value'])

console.log(form.user.email)
console.log(form['user']['email'])

console.log(form.enviarRating())
form.paginasVisitadas[0]

// NaN, null, undefined

// undefined

console.log(form.fecha) // undefied


let numero;

console.log(numero) // undefined no tiene valor asignado
console.log(numero1) // error

let suma = 35 + 'hola'

console.log(suma) // 35hola - coercion

var miTexto = 'Dije que soy un texto';

console.log(Number(miTexto)); // NaN

let suma2 = 'Hola' / 2

console.log(suma2) // NaN

let num1 = 1
let num2 = '1'

console.log(num1 + num2) // 11
console.log(Number(num1) + Number(num2)) // 2

// Operadores

// Asignación
let nombre3 = 'fulanito'

// Aritméticos

// suma +
// resta -
// multiplicacion *
// division /
// modulus %

console.log(10 + 2) // 12
console.log(10 - 2) // 8
console.log(10 * 2) // 20
console.log(10 / 2) // 5
console.log(10 % 2) // 0
console.log(10++) // 11 
console.log(10--) // 9

let numero10 = 10
numero10 = numero10 + 1
numero10 += 1
numero10++

let numero102 = 102
numero10 = numero10 - 1
numero10 -= 1
numero10--

numero10 *= 2
numero10 = numero10 * 2

let porcentaje = 0.1 // 10%

porcentaje *= 100 // 10

// Comparación

console.log(10 == '10') // true
console.log(10 === '10') // false
console.log(true == 'true') // true
console.log(true === 'true') // false

console.log(10 != '10') // false
console.log(10 !== '10') // true

// Lógicos

// && and
// || or
// ! not 

console.log(true && true) // true
console.log('1' == 1 && 2 == '2') // true
console.log('1' == 1 && 2 === '2') // false

console.log(true || true) // true
console.log(false || true) // true
console.log(false || false) // false
console.log('1' === 1 || 2 == '2') // true
console.log('1' == 1 || 2 === '2') // true

// tablas de verdad

let negacion = !false // true
console.log(negacion) // true

let afirmacion = !true // false
console.log(afirmacion) // false

let num4 = 10
console.log(!num4) // true

if (!num4) {
  console.log('num4 no esta definido')
}

if(num4) {
  console.log('num4 esta definido')
}

let num5 = 0
if (!num5) {
  console.log('num5 es cero')
}

console.log(10 > 10) // false
console.log(10 >= 10) // true
console.log(10 < 10) // false
console.log(10 <= 10) // true
console.log(10 === 10) // true
console.log(10 !== 10) // false

let num0 = 0
let comparacion = (10 >= 10) && (1 === 1 || (!num0 && true)) // true

// Funciones

function soyUnaFuncion (variables) {
  return 'Soy una funcion'
}

soyUnaFuncion(num0) // 'Soy una funcion'

let funcion2 = function () {
  return 'funcion 2'
}

funcion2() // 'funcion 2'

function suma(a, b) {
  return a + b + num0
}

a = 9

// Condicionales

let condicional = 10 !== 10
let condicional2 = true

function condicion(cond1, cond2) {
  if (cond1 && cond2 && cond3 && con2) {
    // cuerpo del if
    console.log('cuerpo del if')
    if (cond2) {
      console.log('cond y cond2 son true')
      if (cond2) {
        if (cond2) {
          // arrow code -> mala practica
          // guard clauses
          // clean code - martin fowler
        }
      }
    }
  } else if (cond1) {
    console.log('cuerpo del else if')
  }

  console.log('ninguna condicion se cumple')
}

condicion(true, true)

// Arrays
// push, pop, shift, unshift, indexOf, includes, find

let lista = [1, 4, 7] // Array

// typeof lista -> Object

lista.push(8)
// [1, 4, 7, 8]

lista.pop()
//[1, 4, 7]


let elemento = lista.shift()
// [4, 7]
console.log(elemento) // 1

lista.unshift(1)
// [1, 4, 7]

lista.unshift(2, 3)
// [2, 3, 1, 4, 7]

// join

console.log(lista.join('')) // 23147
console.log(lista.join(',')) // 2,3,1,4,7
console.log(lista.join('-')) // 2-3-1-4-7

// console.log("Hola, 'Batman'")
// console.log('Hola, "Batman"')
console.log('Hola, \n\'Batman\'')
// Hola, 
// 'Batman'

// indexOf

// [2, 3, 1, 4, 7]

lista.indexOf(4) // indice 3
if (lista.indexOf(99)  === -1) {
  console.log('99 no esta en la lista')
}

// includes
lista.includes(4) // true
lista.includes(99) // false

// find regresa el elemento
const elemento = list.find(function(elemento) {
  return elemento === 4
})

console.log(elemento) // 4


