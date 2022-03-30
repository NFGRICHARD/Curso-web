/*27 Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function calcularCrescimento(altura1,taxa1,altura2,taxa2){
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return 'a criança 1 ultrapassará a criança 2 em 1 ano. '
        }else if(taxa1 < taxa2){
            return 'a criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento'
        }
    } else{
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior'
            }else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1,taxa1,altura2,taxa2)} anos`
            }
        }else{
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior'  
            }else{
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1,taxa1,altura2,taxa2)} anos`
            }
        }
    }
}

function calcularTempo(alturaMaior, taxaAlturaMaior, alturaMenor, taxaAlturaMenor){
    let qtdAnos = 0
    while(alturaMenor > alturaMaior){
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos ++
    }
    return qtdAnos
}


console.log(calcularCrescimento(150, 2, 150, 4));
console.log(calcularCrescimento(150, 5, 150, 4));
console.log(calcularCrescimento(150, 2, 150, 2));
console.log()
console.log(calcularCrescimento(120, 2, 160, 4));
console.log(calcularCrescimento(150, 2, 160, 2));
console.log(calcularCrescimento(150, 5, 160, 2));