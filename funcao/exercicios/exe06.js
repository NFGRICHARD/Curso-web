function jurosSimples(capitalIncial, taxaDeJuros, tempoDeaplicacao){
    juros =  capitalIncial * taxaDeJuros * tempoDeaplicacao
    return juros + capitalIncial
}

function jurosComposto(capitalIncial, taxaDeJuros, tempoDeaplicacao){
    return montante = capitalIncial * ((1 + taxaDeJuros) ** tempoDeaplicacao)

}

console.log(jurosSimples(100,0.10,2))
console.log(jurosComposto(100,10/100,2))