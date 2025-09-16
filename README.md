# Desenrola-AI
API da plataforma "Desenrola Aí", que conecta prestadores de serviços e clientes em Fortaleza. Projeto acadêmico de Integração de Sistemas feito em Node.js, demonstrando a comunicação entre duas APIs distintas (principal e notificação). Possui testes automatizados, documentação e coleção do Postman.

<h1 align="center">Desenrola Aí </h1>

<p align="center">
  <strong>Uma API RESTful para conectar prestadores de serviços e clientes na comunidade.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-4CAF50?style=for-the-badge" alt="Status: Concluído">
  <img src="https://img.shields.io/badge/Node.js-v18.x-339933?style=for-the-badge&logo=node.js" alt="Node.js">
</p>

<p align="center">
  <em>Veja a API funcionando no Postman:</em><br><br>
  <img src="https://imgur.com/UrHfDgs" alt="Demonstração da API no Postman" width="80%">
</p>

---

## 🎯 Sobre o Projeto

O **Desenrola Aí** foi criado como projeto para a disciplina de **Técnicas de Integração de Sistemas**. O objetivo é fortalecer a economia local de Fortaleza através de uma API que serve como ponte entre trabalhadores autônomos e a comunidade, facilitando a contratação de serviços rápidos.

Este projeto cumpre o requisito central de **integração de sistemas** ao orquestrar a comunicação entre uma API principal e um microsserviço simulado de notificações, demonstrando uma arquitetura distribuída e coesa.

---

## ✨ Features

* ✅ **Cadastro de Prestadores:** Endpoint para adicionar novos prestadores de serviço.
* ✅ **Busca Inteligente:** Lista todos os prestadores ou filtra por categoria de serviço.
* ✅ **Atualização de Dados:** Permite que os prestadores atualizem suas informações.
* ✅ **Sistema de Notificação:** Integração com um serviço secundário para notificar prestadores sobre novas solicitações.
* ✅ **Tratamento de Erros:** Respostas claras para requisições inválidas ou recursos não encontrados.
* ✅ **Testes Automatizados:** Suíte de testes para garantir a confiabilidade da API.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

| Ferramenta | Descrição |
|------------|-------------|
| **`Node.js`** | Ambiente de execução do JavaScript no backend. |
| **`Express.js`** | Framework para construção da API RESTful. |
| **`Jest`** | Framework para a criação dos testes unitários. |
| **`Supertest`** | Biblioteca para testar os endpoints HTTP. |
| **`Postman`** | Ferramenta para documentação e testes manuais da API. |

---

## 🔧 Como Executar

Siga os passos abaixo para rodar o projeto em sua máquina local.

<details>
  <summary><strong>Clique para ver as instruções de setup</strong></summary>

  ```bash
  # 1. Clone o repositório
  git clone https://github.com/seu-usuario/Desenrola-AI.git
  
  # 2. Navegue para a pasta da API principal e instale as dependências
  cd desenrola-ai-api/desenrola-ai-api
  npm install
  
  # 3. navegue para a pasta da API de notificação e instale
  cd notificacao-api
  npm install
  
  # 4. Inicie os dois servidores em seus respectivos terminais
  # No terminal da API principal:
  node src/server.js
  
  # No terminal da API de notificação:
  node server.js
  ```
  A API principal estará disponível em `http://localhost:3000`.
</details>

---

## 🧪 Rodando os Testes

Para verificar a integridade da aplicação, rode a suíte de testes automatizados:

```bash
# Navegue até a pasta da API principal (desenrola-ai-api)
npm test
```

---

## 🤝 Contribuidores

Este projeto foi desenvolvido com dedicação pela seguinte equipe:

### 🤝 Contribuidores

Este projeto foi desenvolvido com dedicação pela seguinte equipe:

### 🤝 Contribuidores

Este projeto foi desenvolvido com dedicação pela seguinte equipe:

| Nome                    | Papel no Projeto        | Perfil no GitHub                                     |
| ----------------------- | ----------------------- | ---------------------------------------------------- |
| **Lucas Pires Albuquerque** | Desenvolvedor Backend   | [Link para o Perfil](https://github.com/LucasPiresAlb)   |
| **Cezarnildo Moreira da Silva** | Documentação e Testes   | [Link para o Perfil](https://github.com/usuario-colega1) |
| **José Claudecir Silva de Lima** | Desenvolvedor Backend   | [Link para o Perfil](https://github.com/klaudecy) |
| **Francisco Riomar Barros Filho** | Testes e Qualidade      | [Link para o Perfil](https://github.com/riomarfilho) |
| **Francisco Rodrigues de Oliveira Lima** | Desenvolvedor Backend   | [Link para o Perfil]((https://github.com/zederodrigues)) |


---
