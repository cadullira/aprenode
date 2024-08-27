# Comandos usados na linha de comando

`npm install typescript --save-dev` -> instala o **TypeScript** no contexto do ambiente de desenvolvimento.

`npm @types/node --save-dev` -> Instala as definições de tipos para o **Node.js**. Isso é importante porque o **Node.js**, por padrão, entende apenas **JavaScript**. As definições de tipos permitem que o **TypeScript** compreenda as APIs e tipos específicos do **Node.js**, como módulos nativos (fs, http, etc.), proporcionando autocompletar e verificação de tipos dentro do editor de código.

`npx` -> vem junto com o npm, a partir da versão 5.2.0, permite executar pacote Node via linha de comando sem precisar intalá-los globalmente.

`npx tsc --version` -> verifica a versão do **TypeScript**, caso não exista, o npx vai baixar a última versão do TypeScript e fazer uso, após isso eliminará até que seja invocado novamente.

`npx tsc --init` -> inicializa um novo projeto **TypeScript**, criando um arquivo tsconfig.json.

`npx tsc index.ts` -> transpila o código **TypeScript** para **JavaScript**

`node index.js` -> o código .ts é agora .js, o comando vai mostrar o que se pede pelas linhas de código.

`tsconfig.json` -> realização de algumas configurações nesse arquivo para melhorar o processo de traspilação

```typescript
"target": "ES2023", # indica versão EcmaScript ES usada
"rootDirs": ["src"], # localização código onde passará 
pelo processo de transpilação
"outDir": "./dist", # saída código .js

### De Instância e Estático

Instância: tanto atributos quanto métodos são acessados a partir da instância de um objeto.
ex.: carro1.cor, carro1.velocidadeMaxima()

Estático: atributos e métodos que podem está disponível a partir do uso da palavra reservada static.
ex.: static cor: string, static velocidadeMaxima(): number {return `Velocidade máxima: ${this.velocidade}`}, Carro.cor, Carro.velocidadeMaxima().