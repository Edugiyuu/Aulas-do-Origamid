/* const instrumentos = ['Guitarra', 'Baixo', 'Violão']; */
/* const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];
function andar(nome) {console.log(nome);}

const carros = new Array('Ford','Fiat','Honda');

carros[2] = 'Ferrari';
carros [3] = 'Kia';
carros [20] = 'Kia';

console.log(carros.length);

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

const obj = {
    0: 'Andre',
    1: 'Rafael',
    2: 'Teste',
    length: 4,
}

const objArray = Array.from(obj);

console.log(li);
console.log(arrayLi);

const frutas = ['Banana','Pêra'['Uva roxa','Uva Verde']]

console.log(frutas[1].length);

const instrumentos = ['Guitarra','Baixo','Violão'];
instrumentos.sort();

const idades = [32,21,33,43,1,12,8];

console.log(instrumentos);
console.log(idades); */

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
const novaArray = carros.push('Parati','Gol')

//console.log(novaArray);

//console.log(carros);
//console.log(carros.shift());

console.log(carros);
console.log(carros.splice(2,0, 'Fusca'));

console.log(carros);

['Item1', 'Item2', 'Item3', 'Item4','Item5'].copyWithin(2, 0, 2);
