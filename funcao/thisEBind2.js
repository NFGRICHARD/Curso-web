function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind*/, 1000)
}

new pessoa()