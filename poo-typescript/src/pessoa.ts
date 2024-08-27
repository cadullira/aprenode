class Pessoa {
    // atributos
    // atributos de instância
    nome: string;
    sobrenome: string;    
    idade: number;
    brasileiro: boolean;
    enderecos: string[];

    // atributo estático
    static qtdePessoas: number = 0;

    // construtor, o typescript usa a palavra reservada constructor
    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[]){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        Pessoa.qtdePessoas++;
    }

    //assinatura do método + parâmetros + retorno do método
    // métodos de instância
    exibirNomeCompleto(): string {
        return (`O nome completo do cidadão: ${this.nome} ${this.sobrenome}`);
    }
    
    recuperarEndereco(posicao: number): string {
        return this.enderecos[posicao];
    }

    // método estático
    static getQtdePessoas(): number {
        return Pessoa.qtdePessoas;
    }
}

export { Pessoa }