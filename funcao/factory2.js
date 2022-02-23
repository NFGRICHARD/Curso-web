

 function criaProduto (nome, preco){
     return {
        nome,
        preco,
        desconto: 0.1
     }
 }

 console.log(criaProduto('Notebook', 2199.49))
 console.log(criaProduto('Iphone', 1199.45))