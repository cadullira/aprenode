class Pessoa {
    // atributos
    nome: string;
    sobrenome: string;    
    idade: number;
    brasileiro: boolean;
    enderecos: string[];

    // construtor, o typescript usa a palavra reservada constructor
    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[]){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
    }

    //assinatura do método + parâmetros + retorno do método
    exibirNomeCompleto(): string {
        return (`O nome completo do cidadão: ${this.nome} ${this.sobrenome}`);
    }
    
    recuperarEndereco(posicao: number): string {
        return this.enderecos[posicao];
    }
}

export { Pessoa }