function Pessoa(nome,idade) {
    this.nome = nome;
    this.idade = idade;
}

var obj = {
    nome:'Andre',
    idade:33,
}

//Pessoa.prototype

Pessoa.prototype.andar = function () {
    return 'Pessoa andou'
}

Pessoa.prototype.nadar = function () {
    return 'Pessoa nadou'
}
const andre = new Pessoa('Andre',28);

console.log(Pessoa.prototype);
console.log(andre.prototype);