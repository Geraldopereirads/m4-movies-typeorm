# 🎬 Catálogo de Filmes (Backend)

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) 
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![Deploy](https://img.shields.io/badge/Render-Online-brightgreen)

Backend para cadastro e gerenciamento de filmes, com **CRUD completo**, validações robustas, testes automatizados, documentação Swagger e deploy pronto para produção.

---

## 🌐 Deploy e Banco de Dados

- Backend online no Render: [https://m4-movies-typeorm.onrender.com](https://m4-movies-typeorm.onrender.com)  
- API documentada via Swagger: [https://m4-movies-typeorm.onrender.com/documentation](https://m4-movies-typeorm.onrender.com/documentation)  
- Banco de dados **PostgreSQL hospedado no Neon**, com migrations versionadas  

> 🔹 Projeto pronto para produção e escalável.

---

## ✅ Funcionalidades

- Cadastro, listagem, atualização e remoção de filmes  
- Validações via **Zod**  
- Middleware global de tratamento de erros  
- Healthcheck endpoint `/health` com auto-ping para manter serviço online  
- Testes automatizados com **Jest**  
- Migrations versionadas para controle do banco  
- Diagrama relacional das entidades  

---

## ⚙️ Tecnologias e Ferramentas

- **Node.js**, **TypeScript**, **Express.js**  
- **TypeORM** com **PostgreSQL** (Neon)  
- **Zod** para validação de dados  
- **Jest** para testes automatizados  
- **Swagger** para documentação de API  
- **ts-node-dev**, **dotenv**, **uuid**  

---

## 🧰 Boas Práticas Aplicadas

- Código modular, limpo e indentado corretamente  
- Tipagem estrita (`any` usado somente quando necessário)  
- Nomenclatura semântica e coerente para variáveis e funções  
- Projeto configurado para execução local e produção  
- Testes unitários e integração cobrindo endpoints essenciais  

---

## 🛠️ Começando / Execução Rápida

Siga os passos abaixo para rodar o projeto localmente na porta **3000**:

1. **Clone o repositório:**

```bash
git clone git@github.com:Geraldopereirads/m4-movies-typeorm.git
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Rode o projeto em desenvolvimento na porta 3000:**
```bash
http://localhost:3000
```

4. **Acesse a documentação via Swagger:**
```bash
http://localhost:3000/documentation
```
