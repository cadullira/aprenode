import { Pessoa } from "./pessoa";

// instanciando um objeto ou n objetos
const cadu: Pessoa = new Pessoa('Cadu', 'Lira', 32, true, ['Sítio Curralinho']);

console.log(cadu);
console.log(cadu.exibirNomeCompleto());
console.log(cadu.recuperarEndereco(0));
console.log('Quantidade de pessoas instanciadas: '+ Pessoa.qtdePessoas);




