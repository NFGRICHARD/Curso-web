/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/
function leitor(numero){
    switch(numero){
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Tres'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'     
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default: 
            return 'Número fora do intervalo.'    
    }
}
console.log(leitor(0))
console.log(leitor(1))
console.log(leitor(2))
console.log(leitor(3))
console.log(leitor(4))
console.log(leitor(5))
console.log(leitor(6))
console.log(leitor(7))
console.log(leitor(8))
console.log(leitor(9))
console.log(leitor(10))
console.log(leitor(11))
