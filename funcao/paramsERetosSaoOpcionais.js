function area (altora, largura) {
    const area = altora * largura
    if (area > 20 ) {
        console.log('Valor acima do permitiodo:'+area+'m2.')
    } else {
        return area
    }
}

console.log(area(2,3))
console.log(area(5,5))