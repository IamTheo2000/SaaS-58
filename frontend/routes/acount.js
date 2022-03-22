const express = require('express');

const signInController = require('../controllers/signIn');
const statusController = require('../controllers/status');
const extendplanController=require('../controllers/extendplan');

const router = express.Router();

router.post('/signin', signInController);

router.post('/extendplan', extendplanController);

router.get('/status', statusController);

module.exports = router;