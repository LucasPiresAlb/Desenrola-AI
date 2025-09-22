const axios = require('axios'); 
const prestadoresDB = [];
let idCounter = 1;

exports.cadastrarPrestador = (req, res) => {
  const { nome, contato, categoria, servico_descricao } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "O campo 'nome' é obrigatório." });
  }

  const novoPrestador = {
    id: idCounter++,
    nome,
    contato,
    categoria,
    servico_descricao
  };

  prestadoresDB.push(novoPrestador);

  res.status(201).json(novoPrestador);
};

exports.buscarPrestadores = (req, res) => {
  const { categoria } = req.query; 

  if (!categoria) {
    return res.status(200).json(prestadoresDB);
  }

  const resultado = prestadoresDB.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());

  res.status(200).json(resultado);
};

exports.solicitarServico = async (req, res) => {
  const { id } = req.params;
  const { nome_cliente, contato_cliente, descricao_problema, endereco } = req.body;

  const prestador = prestadoresDB.find(p => p.id == id);

  if (!prestador) {
    return res.status(404).json({ erro: "Prestador não encontrado." });
  }

  if (!endereco) {
    return res.status(400).json({ erro: "O campo 'endereco' é obrigatório para solicitar o serviço." });
  }

  let googleMapsLink = "Localização não pôde ser gerada.";

  try {
    const enderecoFormatado = encodeURIComponent(endereco);
    
    const geoResponse = await axios.get(`https://geocode.maps.co/search?q=${enderecoFormatado}`);
    
    if (geoResponse.data && geoResponse.data.length > 0) {
      const lat = geoResponse.data[0].lat;
      const lon = geoResponse.data[0].lon;

      googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
    }
  } catch (geoError) {
    console.error("Erro ao chamar API de geocodificação:", geoError.message);
  }


  const discordWebhookURL = "https://discord.com/api/webhooks/1418001787541000273/4ifbuxnyz4YHPsx3lhvFfnuk6PVGvTDJKghgai8uRMlfrVvQ9FXfwL5yD6PSL8afJ6-N";

  const mensagemFormatada = `
    **🔔 Nova Solicitação de Serviço!**
    ---
    **Para o Prestador:** ${prestador.nome}
    **Serviço:** ${prestador.servico_descricao}
    ---
    **Dados do Cliente:**
    - **Nome:** ${nome_cliente}
    - **Contato:** ${contato_cliente}
    - **Problema:** ${descricao_problema}
    - **📍 Localização (Clique aqui para abrir no mapa):** ${googleMapsLink}
  `;

  const dadosParaDiscord = {
    content: mensagemFormatada
  };

  try {
    await axios.post(discordWebhookURL, dadosParaDiscord);
    res.status(200).json({
      mensagem: `Solicitação enviada com sucesso para ${prestador.nome} e notificada no Discord!`
    });
  } catch (discordError) {
    console.error("Erro ao chamar o webhook do Discord:", discordError.message);
    res.status(500).json({ erro: "Não foi possível notificar o prestador no momento." });
  }
};

exports.atualizarPrestador = (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;

  const indexDoPrestador = prestadoresDB.findIndex(p => p.id == id);

  if (indexDoPrestador === -1) {
    return res.status(404).json({ erro: "Prestador não encontrado." });
  }

  const prestadorAtualizado = {
    id: Number(id), 
    ...dadosAtualizados 
  };

  prestadoresDB[indexDoPrestador] = prestadorAtualizado;

  res.status(200).json(prestadorAtualizado);
};