let nome: string;
let sobrenome: string;
let nomeCompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos: string[];

nome = 'Miguel';
sobrenome = 'Llira';
nomeCompleto = nome + ' ' + sobrenome;
idade = 32;
brasileiro = true;
enderecos = ['Rua A, Lavras da Mangabeira', 'Rua B, Aurora'];

let exibirNomeCompleto = function(): string {
    return (`O nome completo do cidadão: ${nomeCompleto}`);
}

let recuperarEndereco = function(posicao: number): string {
    return enderecos[posicao];
}

console.log(exibirNomeCompleto());
console.log(recuperarEndereco(1))


