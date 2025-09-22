# Desenrola-AI

O Desenrola Aí foi criado como projeto para a disciplina de Técnicas de Integração de Sistemas (N703). O diferencial deste projeto é a demonstração de uma integração múltipla com APIs públicas reais para resolver um problema prático: conectar prestadores de serviço e clientes em Fortaleza de forma eficiente.

A arquitetura da solução orquestra a comunicação com dois serviços externos distintos:

Uma API de Geocodificação (geocode.maps.co) que transforma o endereço do cliente em coordenadas geográficas, gerando um link de mapa para facilitar a logística do prestador.

A API do Discord (via Webhooks) que envia notificações em tempo real para um canal específico, garantindo que o prestador seja informado sobre a nova solicitação de serviço instantaneamente.

Essa abordagem com múltiplas integrações demonstra de forma robusta e prática os conceitos de comunicação entre sistemas heterogêneos.

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-4CAF50?style=for-the-badge" alt="Status: Concluído">
  <img src="https://img.shields.io/badge/Node.js-v18.x-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge" alt="Licença MIT">
</p>

<p align="center">
  <em>Veja a API funcionando no Postman e Discord:</em><br><br>
  <img src="https://github.com/LucasPiresAlb/Desenrola-AI/blob/main/desenrola%20ai.gif?raw=true" alt="Demonstração da API no Postman e Discord" width="85%">
</p>

---

## 🎯 Sobre o Projeto

O Desenrola Aí foi criado como projeto para a disciplina de Técnicas de Integração de Sistemas (N703). A aplicação simula uma plataforma que conecta prestadores de serviços autônomos e clientes em Fortaleza, com um foco prático na resolução de problemas de comunicação e logística através da integração de sistemas.

Além dos desafios técnicos, o projeto está profundamente alinhado com o Objetivo de Desenvolvimento Sustentável 11 (ODS 11) - Cidades e Comunidades Sustentáveis. A plataforma contribui para este objetivo ao:

Promover a Resiliência e Inclusão Econômica: Ao criar um canal digital de baixo custo, a plataforma impulsiona a inclusão econômica de trabalhadores autônomos e pequenos empreendedores locais. Isso fortalece a economia dos bairros, gera renda e faz com que o capital circule dentro da própria comunidade, tornando-a mais forte e resiliente.

Incentivar a Sustentabilidade e o Consumo Local: A ferramenta incentiva que os moradores contratem serviços de profissionais que estão geograficamente próximos. Essa prática reduz a necessidade de grandes deslocamentos pela cidade, o que contribui para a diminuição do trânsito e da pegada de carbono associada à prestação de serviços.

Fortalecer os Laços Comunitários: Ao facilitar a interação e o comércio entre vizinhos, o "Desenrola Aí" ajuda a fortalecer o senso de comunidade e a confiança, que são pilares essenciais para cidades mais seguras e coesas.

Dessa forma, a API não é apenas uma solução de software, mas uma ferramenta com potencial para gerar impacto social positivo, promovendo um desenvolvimento urbano mais justo e sustentável para a cidade de Fortaleza.

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

![Diagrama de Arquitetura Atualizado](https://github.com/LucasPiresAlb/Desenrola-AI/blob/main/diagrama.png?raw=true)

O fluxo de solicitação de serviço, ilustrado no diagrama acima, segue os seguintes passos:

1.  **Início (Requisição do Cliente):** O processo começa quando o **Cliente** (ex: Postman) envia uma requisição `POST` para a **API Principal**, contendo os detalhes do serviço e o endereço para atendimento.
2.  **Validação:** A **API Principal** recebe a requisição e realiza uma **validação** inicial para garantir que o prestador solicitado existe e que o endereço foi fornecido. Se os dados forem inválidos, ela retorna um erro (`400` ou `404`) e o fluxo é encerrado.
3.  **Integração 1 (Geocodificação):** Com os dados válidos, a API Principal chama a **API Pública de Geocodificação** (`geocode.maps.co`), enviando o endereço do cliente para ser convertido em coordenadas geográficas.
4.  **Processamento e Enriquecimento:** A API de Geocodificação retorna as coordenadas (latitude e longitude). Em caso de sucesso, a **API Principal** usa esses dados para gerar um **link clicável do Google Maps**. Se a consulta falhar, o link é definido como "Não Disponível" para não interromper o fluxo.
5.  **Integração 2 (Notificação):** A **API Principal** formata uma mensagem completa com todos os detalhes do serviço, incluindo o link do mapa, e a envia para a **API do Discord através de um Webhook**.
6.  **Confirmação Final:** Após notificar o prestador no Discord, a **API Principal** retorna uma resposta de sucesso (`200 OK`) para o **Cliente** original, incluindo o link do mapa para confirmação imediata.

---

## 🔧 Como Executar

Siga os passos abaixo para rodar o projeto completo em sua máquina.

<details>
  <summary><strong>Clique para ver as instruções de setup</strong></summary>
  
  **Pré-requisitos:** Node.js, Git e NPM.

  ```bash
  # 1. Clone o repositório
  git clone (https://github.com/LucasPiresAlb/Desenrola-AI.git)
  
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
