//12 Faça um algoritmo que calcule o fatorial de um número.

function teste(numero){
    if(numero == 0){
        return 1
    }else{
        return numero * teste(numero - 1)
    }
}

console.log(teste(10))