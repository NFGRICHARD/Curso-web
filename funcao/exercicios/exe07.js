//Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
//-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.


function  Bhaskara(a, b, c){
    let resultado = [] // arey vasio para poder colocar o resultado
     let equação = (b**2 - 4*a*c) 
     if(equação < 0){
         return 'Delta é negativo'
     }
    let x = (- b + Math.sqrt(equação)) / (2 * a) 
    let y = (- b - Math.sqrt(equação)) / (2 * a)
    resultado.push(x) // push mando o resultado para o arey resultado
    resultado.push(y)
    return resultado // return mostra o resultado
}

console.log(Bhaskara(1, 3, 2))
console.log(Bhaskara(2, 8, 6))
