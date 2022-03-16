 /*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=====-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
tem que receber um nota de 0 a 100
nota abaixo de 40 é reprovado
abaixo de 38 não fazer arredondamento
*/
//Minha primeira tenta tiva 
function arredondador(nota){
    if(nota >= 38){
       return Math.ceil(nota /5)*5
    }else {
        return nota
    }
}
//tinha um problema ele arredondava tbm as notas que tivese 1,2,3,4
console.log(arredondador(62))

function arreceber(nota){
    if(nota % 5 > 2){ // filtra a nota para se ele for maior que 2 entre no sistema de arredondamento 
       return (nota -  (nota % 5 - 5)) // a nota é maior 2  então quando ela sair dos parentes ela sair negativa mais como tem um sinal negativo ela fica possitiva
    }else {
        return nota
    }
}
console.log()
function geradorDeNota(nota){
    let notaCorrigida = arreceber(nota)// fizemos outra variavel para poder receber a nota
    if( notaCorrigida >= 40){//então criamos um outra estrutura if
        return `Aprovado com ${notaCorrigida} de nota`
    }else{
        return `Reprovado com ${notaCorrigida} de nota`
    }
}
console.log(geradorDeNota(38))