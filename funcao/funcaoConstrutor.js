function Carro (velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0

    //
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // 
    this.getvelocidadeAt = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidadeAt())

const ferrari = new Carro (450, 60)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getvelocidadeAt())