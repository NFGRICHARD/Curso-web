//03 . Desenvolva uma função JavaScript para
//que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)//toFixed aredonda o valor//toSting transforma em string// replace troca as string
}

formatarValorDecimal(0.18659 + 0.2718)