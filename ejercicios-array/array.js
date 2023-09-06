/*const numbers = [1, 2, 3, 4];
function sumarPares(numeros) {
  let suma = 0;
for (let i = 0; i < numeros.length; i++) {
if (numeros[i] % 2 === 0) {
suma += numeros[i];
}
}
console.log(suma);
}
sumarPares(numbers);
const palabras = ["brandon", "fati", "halaa"];

function palabrasA(prabalas) {
  const labrapas = prabalas.every((pabralas) => pabralas.endsWith("a"));
  console.log(labrapas);
}
palabrasA(palabras);


let numeros = [5, 10, 2, 25, 7]
numeros.sort(function(a, b) {
  return a - b
})
console.log(numeros)

let numbers = [20,31,-10,-5,0]

function sortAbsoluteNumbers(num) {
    let soremun = []
    num.map((item)=>{
        const numero = Math.abs(item);
        soremun.push(numero);});
    return soremun.sort((a,b) => a - b);}
console.log(sortAbsoluteNumbers[numbers])  


let words = ["hola", "tres", "uno", "Universidad", "de", "Buenos Aires", "pepito", "celular"]

let word = "pepito"

function buscaPalabras(words, word) {
    const pos = words.indexOf(word)
    const palabrasmas = words.filter(function(word){
        return word.length > pos;
    });
    return palabrasmas;
  }
  
console.log(buscaPalabras(words,word))


const persona = {
  name: 'Dani',
  walk: function () {
    console.log('Estoy caminando')
  }
}
persona.walk()
let method = 'walk'
persona[method]() 


function createObject(name, subs) {
  const persona = {
    name,
    subs,
    hash: name.length*subs,
    getStatus : function(){
      let a = ` el canal de ${name} tiene ${subs} subscriptores`
      return a
    }
  }
  return persona
}

console.log()

const newpersona = createObject("brandon", 1000)
console.log(newpersona.getStatus())

Objetos 2
Ejercicio 1:¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que? 
El codigo va a imprimir 70 y 180, porque el console.log solo pide la altura y el peso de la persona,
no el nombre ni su edad.

Ejercicio 2:¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?
Creo que no imprimiria nada, esta imprimiendo age, pero age ya no existe, ya que se renombro a personAge

Ejercicio 3:¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?
El atajo que usamos para recuperar un valor de una propiedad es el "="

*/

