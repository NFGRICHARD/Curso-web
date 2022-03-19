//10 Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.
//01
function verificador(numero){
    let numero2 = numero / 3 
    if(Number.isInteger(numero2)){
        return true
    } else{
        return false
    }
} 
console.log(verificador(15.5))
//02
function verificador2(numero){
    let numero3 = numero / 3 
    return typeof numero3 === "number" &&
      isFinite(numero3) &&
      Math.floor(numero3) === numero3;
  }
console.log(verificador2(15.5))