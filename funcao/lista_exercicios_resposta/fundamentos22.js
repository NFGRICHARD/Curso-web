function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(3, 100))

function getRandomArbitrary(min, max) {
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(getRandomArbitrary(1,10))
