console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.45545));

console.log(parseFloat('   45790759'));
console.log(parent('100.27 reais'));
console.log(parent('100.27 reais',10));
console.log(parseInt(23.49,10));

const preco = 10.32323;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
console.log(valor);0
console.log(Math.PI);

const aleatorio = Math.floor(Math.random() * 10);

console.log(aleatorio);