/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.  */

function calculo(dividendo, divisor) {
    console.log('resultado: ' + Math.floor(dividendo/divisor))
    resto = (dividendo % divisor)
    return resto
}

console.log(calculo(11,4))