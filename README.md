### 🚀 Tecnologias Usadas

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mongodb,prisma)](https://skillicons.dev)


### 🔗 Sobre o projeto

API de autenticação segura utilizando `JWT Token`. A aplicação permite o cadastro de usuários no banco de dados e verifica a autenticidade ao realizar o login. Após o login ser realizado com sucesso, é gerado um token que permite a navegação por um determinado tempo.


### Rotas da API
  🔓 Públicas
    <li>`POST /users/register` → Registra um novo usuário</li>
    <li>`POST /users/login` → Faz login e retorna um token JWT</li>

  🔒 Privada
    <li>`GET /users/list` → Retorna todos os usuários (Requer autenticação)</li>


### 📂 Como Rodar o Projeto

🔹 Clonando o Repositório
   ```sh
   git clone https://github.com/lucasherrerods/node-api-auth
   ```
🔹 Instalando as dependências
   ```sh
   cd backend
   npm install
   ```
🔹 Configurando as variáveis de ambiente</br>
   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```sh
   DATABASE_URL="sua_string_de_conexao"
   JWT_SECRET="sua_chave_secreta"
   ```
🔹 Executando o projeto
   ```sh
   node src/server.js
   ```