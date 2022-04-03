/*29  Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.*/


function leitor(vetorNumeros){
    let conte = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20){
            conte++
        }
    }
    return`${conte}`
}

const vetorNumeros = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 2]

console.log(leitor(vetorNumeros))