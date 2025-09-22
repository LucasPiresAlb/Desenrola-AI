# Desenrola-AI

API da plataforma "Desenrola Aí", que conecta prestadores de serviços e clientes em Fortaleza. Projeto acadêmico de Integração de Sistemas feito em Node.js, demonstrando a comunicação entre duas APIs distintas (principal e notificação). Possui testes automatizados, documentação e coleção do Postman.

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-4CAF50?style=for-the-badge" alt="Status: Concluído">
  <img src="https://img.shields.io/badge/Node.js-v18.x-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge" alt="Licença MIT">
</p>

<p align="center">
  <em>Veja a API funcionando no Postman:</em><br><br>
  <img src="https://github.com/LucasPiresAlb/Desenrola-AI/blob/main/unknown_2025.09.22-18.15_1.gif?raw=true" alt="Demonstração da API no Postman e Discord" width="85%">
</p>

---

## 🎯 Sobre o Projeto

O **Desenrola Aí** foi criado como projeto para a disciplina de **Técnicas de Integração de Sistemas (N703)**. A aplicação simula uma plataforma que conecta prestadores de serviços e clientes em Fortaleza, com um foco prático na resolução de problemas de comunicação e logística através da integração de sistemas.

O projeto vai além do requisito básico, implementando uma **integração dupla**:
1.  **Com uma API Pública Externa:** Para geocodificação de endereços em tempo real.
2.  **Com uma API Simulada Interna:** Para o disparo de notificações de serviço.

Essa abordagem demonstra uma arquitetura robusta e cumpre com excelência os objetivos da disciplina.

---

## ✨ Features

* ✅ **Gerenciamento de Prestadores (CRUD):** Endpoints para criar, listar e atualizar prestadores.
* ✅ **Integração com API Pública:** Converte endereços de texto em coordenadas geográficas através de uma chamada a um serviço de geocodificação externo.
* ✅ **Geração de Links de Mapa:** Cria automaticamente links do Google Maps a partir das coordenadas, facilitando a logística para o prestador.
* ✅ **Integração com Serviço Simulado:** Comunica-se com uma segunda API local para simular o envio de notificações de serviço.
* ✅ **Testes Automatizados:** Suíte de testes com Jest e Supertest para garantir a confiabilidade da API.

---

## 🚀 Tecnologias Utilizadas

| Ferramenta | Descrição |
|------------|-------------|
| **`Node.js`** | Ambiente de execução do JavaScript no backend. |
| **`Express.js`** | Framework para construção da API RESTful. |
| **`Axios`** | Cliente HTTP para realizar chamadas para as APIs externas. |
| **`Jest & Supertest`**| Ferramentas para a criação e execução dos testes unitários. |
| **`Postman`** | Ferramenta para testes manuais e documentação da API. |

---

## ⚙️ Arquitetura do Sistema

A arquitetura do projeto é baseada na comunicação entre múltiplos sistemas distintos para resolver um problema de negócio.

![Diagrama de Arquitetura Atualizado](https://i.imgur.com/5g8z6tQ.png)

O fluxo de solicitação de serviço segue os seguintes passos:
1.  O **Cliente (Postman)** envia uma requisição para a **API Principal** com os dados do serviço, incluindo o endereço.
2.  A **API Principal** chama a **API Pública de Geocodificação** para obter as coordenadas do endereço.
3.  Com as coordenadas, a API gera um link do Google Maps.
4.  A **API Principal** envia todos os detalhes, incluindo o link do mapa, para a **API de Notificação Simulada**.
5.  A **API Principal** retorna uma resposta de sucesso para o Cliente, contendo o link do mapa.

---

## 🔧 Como Executar

Siga os passos abaixo para rodar o projeto completo em sua máquina.

<details>
  <summary><strong>Clique para ver as instruções de setup</strong></summary>
  
  **Pré-requisitos:** Node.js, Git e NPM.

  ```bash
  # 1. Clone o repositório
  git clone [https://github.com/LucasPiresAlb/Desenrola-AI.git](https://github.com/LucasPiresAlb/Desenrola-AI.git)
  
  # 2. Navegue para a pasta do projeto clonado
  cd Desenrola-AI

  # 3. Instale as dependências da API Principal
  cd desenrola-ai-api
  npm install
  
  # 4. Em um NOVO terminal, instale as dependências da API de Notificação
  cd ../notificacao-api 
  npm install
  
  # 5. Inicie os dois servidores em seus respectivos terminais
  # No terminal da API principal:
  npm start
  
  # No terminal da API de notificação:
  node server.js
  ```
</details>

---

## 🧪 Rodando os Testes

Para verificar a integridade da aplicação, rode a suíte de testes na pasta da API principal:
```bash
npm test
```

---

## 📚 Documentação da API

A coleção completa para testes no Postman está no arquivo `DesenrolaAi-Postman-Collection.json`.

#### `POST /api/prestadores`
* **Descrição:** Cadastra um novo prestador.

#### `GET /api/prestadores`
* **Descrição:** Lista todos os prestadores ou filtra por categoria (`?categoria=...`).

#### `PUT /api/prestadores/:id`
* **Descrição:** Atualiza os dados de um prestador específico.

#### `POST /api/prestadores/:id/solicitar`
* **Descrição:** Envia uma solicitação de serviço, aciona a geocodificação e a notificação.
* **Corpo (Body) Obrigatório:**
    ```json
    {
        "nome_cliente": "string",
        "contato_cliente": "string",
        "descricao_problema": "string",
        "endereco": "string"
    }
    ```
* **Resposta de Sucesso (200 OK):**
    ```json
    {
        "mensagem": "Solicitação enviada com sucesso para [Nome do Prestador]!",
        "linkGoogleMaps": "http://googleusercontent.com/maps.google.com/..."
    }
    ```
---

### 🤝 Contribuidores

Este projeto foi desenvolvido com dedicação pela seguinte equipe:

| Nome                             | Papel no Projeto      | Perfil no GitHub                                       |
| -------------------------------- | --------------------- | ------------------------------------------------------ |
| **Lucas Pires Albuquerque** | Desenvolvedor Backend | [Link para o Perfil](https://github.com/LucasPiresAlb)   |
| **Cezarnildo Moreira da Silva** | Documentação e Testes | [Link para o Perfil](https://github.com/cezar-moreira) |
| **José Claudecir Silva de Lima** | Desenvolvedor Backend | [Link para o Perfil](https://github.com/claudecirlima)      |
| **Francisco Riomar Barros Filho**| Testes e Qualidade    | [Link para o Perfil](https://github.com/riomarfilho)   |
| **Francisco Rodrigues de Oliveira Lima** | Desenvolvedor Backend | [Link para o Perfil](https://github.com/zederodrigues) |
