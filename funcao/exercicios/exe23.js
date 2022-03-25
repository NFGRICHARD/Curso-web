/*23 Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
*/



function aluno(nota1,nota2,nota3){
    function gerador(){
            const codigo = Math.random() * (100 - -1) + -1
            return Math.floor(codigo)
    }
    media =  ((nota1 * 3)+(nota2 * 3)+(nota3 * 4))/10

    if(gerador() < 0 ){
        return 'O CODIGO DO ALUNO É NEGATIVO'
    }else if (media >= 5){
        return `Codigo do aluno: ${gerador()} | Nota1: ${nota1} Nota2: ${nota2} Nota3: ${nota3}
        | Media: ${media} | APROVADO!`
    }else {
        return `Codigo do aluno: ${gerador()} | Nota1: ${nota1} Nota2: ${nota2} Nota3: ${nota3}| Media: {media} | REPROVADO!`
    }

}

console.log(aluno(4,2,8))










/*
function getRandomArbitrary(min, max) {
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}*/