//28 - Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

function leitor(vetorNumeros){
    let qtdImpares = 0
    let qtdPares = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] % 2 == 0){
            qtdPares++
        }else {
            qtdImpares++
        }
    }
    return`${qtdPares} números pares e ${qtdImpares} números ímpares.`
}

const vetorNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15]

console.log(leitor(vetorNumeros))