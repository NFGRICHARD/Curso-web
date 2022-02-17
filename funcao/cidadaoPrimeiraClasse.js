// Função em JS é First-Class Object (Citizens)
// Highet-order function

//criar de forma literal 
function fun1(c, d) { 
    return c * d
 }

// Armazenar em uma variável
const fun2 = function (f, g, h) { 
    return f + g - h
}

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2 ]
console.log(array[1](2,5))

// Armazenar em um atributo de objeto
const obj = {}
obj.fala = function () {return 'Opa' }
console.log(obj.fala())

// Passar função como parametro
function run (fun) {
    fun()
}

run (function() {console.log('Executando....')})

// Um função pode retornar/conter um função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(4,5)(1)