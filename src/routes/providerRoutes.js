const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

router.post('/prestadores', providerController.cadastrarPrestador);

router.get('/prestadores', providerController.buscarPrestadores);

router.post('/prestadores/:id/solicitar', providerController.solicitarServico); 

router.put('/prestadores/:id', providerController.atualizarPrestador);

module.exports = router;