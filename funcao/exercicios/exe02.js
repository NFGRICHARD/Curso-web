/* (02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
   Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
   Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
   ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
   triângulo).

 primeira tentativa

 function tri(p = 1, s = 1, t = 1) {
    if (p == s & p == t ){               ||No & falto mais um &
        console.log('Equilatero')        ||Não era para usar o colosole.log e sim return
    } else if(p == s & p != t) {         ||o jeito certo é era (p == s || s == t || p == t) 
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}
console.log(tri())
 */

//Depois de ver a resposta
function Triangulo(p , s, t) {
    if (p == s && s == t ){ 
        return 'Equilatero'
    } else if(p == s || s == t || p == t ) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }   
}
console.log(Triangulo(1,1,1)) 
console.log(Triangulo(1,1,2))
console.log(Triangulo(1,2,3))