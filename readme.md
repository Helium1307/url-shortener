# 🔗 URL Shortener

Um serviço moderno e escalável para encurtamento de URLs, construído com foco em **simplicidade**, **performance** e **boas práticas de arquitetura**.  
Permite criar links curtos, rastrear estatísticas de acesso e gerenciar redirecionamentos de forma eficiente.

Minha ideia de criar esse projeto foi apenas para treinar pequenos conceitos e desenvolver minha capacidade de gerar soluções escaláveis.

---

## 🧠 Sumário

- [Visão Geral](#-visão-geral)
- [Arquitetura](#-arquitetura)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Execução](#-instalação-e-execução)
  - [Com Docker](#com-docker)
  - [Localmente (sem Docker)](#localmente-sem-docker)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Endpoints Principais](#-endpoints-principais)
- [Boas Práticas e Convenções](#-boas-práticas-e-convenções)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🚀 Visão Geral

O **URL Shortener** é uma API REST responsável por transformar URLs longas em versões curtas e rastreáveis.  
Pode ser usada em sistemas internos, aplicações SaaS ou integrações externas.

### Funcionalidades

- 🔹 Criação de URLs encurtadas únicas
- 🔹 Redirecionamento rápido e eficiente
- 🔹 Integração simples via API REST
- 🔹 Banco de dados persistente para URLs e estatísticas

---

## 🧩 Tecnologias

| Categoria             | Ferramenta / Lib            |
| --------------------- | --------------------------- |
| Linguagem             | **TypeScript**              |
| Framework HTTP        | **Fastify**                 |
| Banco de Dados        | **MongoDB**                 |
| ORM                   | **Mongoose**                |
| Cache / Rate Limiting | **Redis**                   |
| Containerização       | **Docker / Docker Compose** |
| Linter / Formatter    | **Biome**                   |

A utilização da biblioteca *nanoid* ajuda bastante quando a ideia é gerar hashes escaláveis. Nesse projeto utilizei um padrão de caractéres para um código hash ser gerado, utilizando A-Z, a-z e 0-9 no padrão de Base62. Essa estratégia me permitiu ter um resguardo quando o assunto é conflito entre chaves únicas.

Utilizando esse formato de hash, eu consigo escalar minha aplicação para mais de 3 trilhões de hashes possíveis de serem utilizados.

---
