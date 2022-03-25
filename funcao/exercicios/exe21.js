/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menosde 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados comidade acima de 30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130                                                                      */

function plano(idade){
    const fixo = 100
    if(idade <= 10){
        return `O preço do plano é de R$${fixo + 80},00`
    }else if (idade < 30) {
        return `O preço do plano é de R$${fixo + 50},00`
    }else if (idade < 60) {
        return `O preço do plano é de R$${fixo + 95},00`
    }else { 
        return `O preço do plano é de R$${fixo + 130},00`
    }
}

console.log(plano(8))
console.log(plano(15))
console.log(plano(35))
console.log(plano(52))
console.log(plano(80))
