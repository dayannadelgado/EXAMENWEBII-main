const {Router} = require('express');
const LocalController = require('../controller/local.js');

const router = Router();

router.get('/',LocalController.getAll);

router.get('/errores',LocalController.errores);

router.post('/',LocalController.create);

module.exports = router;