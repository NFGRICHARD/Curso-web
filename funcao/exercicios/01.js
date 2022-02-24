//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function conta(x, y ) {
    this.soma = x + y
    this.sub = x - y
    this.mult = x * y
    this.div = x / y
    console.log('Soma = '+this.soma, 'subtração = '+this.sub,
    'Multiplicação = '+this.mult, 'Divisão = '+this.div)
    
}

console.log(conta(200,10))