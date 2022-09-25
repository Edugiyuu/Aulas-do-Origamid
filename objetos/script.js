var pessoa = {
    nome:'André',
    idade:28,
}

console.log (pessoa);

var quadrado = {
    lados:4,
    area: function(lado){
        return lado * lado;
    },
    perimetro (lado) {
        return this.lados * lado;
    },
    cinco(){
        return 5;
    }
}
console.log(quadrado.area(5));
console.log (quadrado.area(5));