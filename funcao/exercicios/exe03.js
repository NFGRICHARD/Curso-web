//03 Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

// antes de ver a resposta 
function elevada(base, expoente){
    return base * expoente   // está faltando mais um *
}
console.log(elevada(2,3))

//RESPOSTA 

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))