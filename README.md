# Aprenode
![Imagem Aprenode](https://github.com/cadullira/aprenode/blob/main/img/aprenode.webp)
> O Nodejs é um ambiente de execução usando o javascript/typescript fora do navegador, promovendo assim, a possibilidade de usar a linguagem javascript para programar backends.


## Gerenciador de versão

Se classificarmos como "oficial", podemos apontar o **nvm** como o gerenciador de versão oficial para o **Node.js**, porém como existem opções alternativas, para meu estudo estarei adotando o **asdf**. A escolha do asdf se dá pelo fato do mesmo ser um gerenciador de versões genérico, onde não se limita a gerenciar apenas o Node. Por exemplo: na minha _sofrida_ máquina tenho, por necessidade, o asdf gerenciando as versões do **Java**, **Python**, além do próprio **Node.js**.

**Site do asdf:** [https://asdf-vm.com/](https://asdf-vm.com/)

## Comandos para gerenciar qualquer coisa

 - **O que está instalado, ou seja, sendo gerenciado pelo asdf:**

	`asdf list`
 - **Instalar um novo plugin (tudo é tratado como plugin pelo asdf)**:

	`asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git`

 - **Após ter adicionado o plugin podemos verificar todas as versões Node.js existentes:**
 `asdf list-all nodejs
`
- **Escolher qualquer uma versão para ser instalada:**
 `asdf install nodejs 18.16.1`

- **Podemos definir uma versão para todo o sistema *(global)* ou então apenas para pasta atual *(local)***

	***global***
	 `asdf global nodejs 18.16.1`
	
	***local***
	 `asdf local nodejs 18.16.1`

- **Visualizar versão atual:**
  `asdf current nodejs` ou `node -v`
   


