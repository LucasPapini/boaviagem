#Bem-vindo ao projeto Boa Viagem!

Como solicitado na descrição do desafio técnico, este projeto foi desenvolvido utilizando Node.js para a construção de uma simples API. No frontend, foi usado ReactJS com Vite (uma ferramenta extremamente rápida para desenvolvimento frontend) para facilitar o processo de desenvolvimento.

Não é necessário configurar conectividade com banco de dados, pois todos os dados do projeto estão "mocados". Para rodar a aplicação, é necessário ter o Node.js instalado e configurado no seu computador.

#Primeiros passos para rodar a aplicação (Backend)
Acesse o diretório raiz da pasta do backend e execute o seguinte comando:

bash
Copiar
Editar
npm install
Este comando instalará todas as dependências do projeto.

Após isso, use o comando abaixo para iniciar a aplicação:

npm run dev
Assim que o servidor for iniciado, você verá no console uma mensagem indicando o endereço da aplicação, como no exemplo abaixo:

Servidor rodando em http://localhost:8080
Para testar a API, utilize ferramentas como o navegador, Insomnia ou Postman e acesse o seguinte endpoint:


/list/all/aeroportos/
Este endpoint retornará toda a estrutura de dados dos aeroportos.

Primeiros passos para rodar a aplicação (Frontend)
Assim como no backend, acesse a pasta raiz do projeto frontend e execute o comando:
npm install

Configure o arquivo .env com a URL da API. Caso o arquivo .env não esteja presente no projeto, será necessário criá-lo com o seguinte conteúdo:

VITE_API_URL=http://localhost:8080
Obs.: Configure esta constante apenas se necessário.

Após as configurações, inicie a aplicação frontend com o comando:
npm run dev

No terminal, será exibida uma mensagem indicando que a aplicação está rodando, junto com o endereço de acesso web. Exemplo:

> vite-project@0.0.0 dev
> vite

  VITE v6.0.11  ready in 316 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Acesse o endereço gerado no navegador para visualizar a aplicação e realizar os testes e navegações necessários.

