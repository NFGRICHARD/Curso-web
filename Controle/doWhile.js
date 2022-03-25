function getInteiroAleatorioEntre(){
    const valor = Math.random() * (10 - -1) + -1
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolida foi .',opcao)
} while (opcao != -1)

console.log('Até a próxima!')