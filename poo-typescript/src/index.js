var nome;
var sobrenome;
var nomeCompleto;
var idade;
var brasileiro;
var enderecos;
nome = 'Cadu';
sobrenome = 'Llira';
nomeCompleto = nome + ' ' + sobrenome;
idade = 32;
brasileiro = true;
enderecos = ['Rua A, Lavras da Mangabeira', 'Rua B, Aurora'];
var exibirNomeCompleto = function () {
    return ("O nome completo do cidad\u00E3o: ".concat(nomeCompleto));
};
var recuperarEndereco = function (posicao) {
    return enderecos[posicao];
};
console.log(exibirNomeCompleto());
console.log(recuperarEndereco(1));
