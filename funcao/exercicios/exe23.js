/*23 Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
*/



function aluno(codigo, nota1,nota2,nota3){
    media =  ((nota1 * 3)+(nota2 * 3)+(nota3 * 4))/10
    if(codigo < 0 ){
        return 'O CODIGO DO ALUNO É NEGATIVO'
    }else if (media >= 5){
        return `Codigo do aluno: ${codigo} | Nota1: ${nota1} Nota2: ${nota2} Nota3: ${nota3}
        | Media: ${media} | APROVADO!`
    }else {
        return `Codigo do aluno: ${codigo} | Nota1: ${nota1}, Nota2: ${nota2}, Nota3: ${nota3}| REPROVADO!`
    }
}
console.log(aluno(123, 2.8, 6, 3.5))


function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let nota = []
    nota.push(nota1)
    nota.push(nota2)
    nota.push(nota3)
    nota.sort((a,b)=> a < b ? 1 : -1)

    let mediaFinal = (nota[0] * 4 + nota[1] * 3 + nota[2] * 3)/10
    return `Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`
}

console.log(calcularNotaFinal(230,5,6,7))
