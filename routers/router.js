const { Router } = require('express');

const router = new Router();

router.use('/actionTypes', require('./actionTypesRouter'));

module.exports = router;
