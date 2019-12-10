var express = require('express');
var router = express.Router();
var controller = require('../controllers/giohang.controller');

router.get('/', controller.index);
router.post('/create', controller.create);
router.delete('/delete/:id', controller.delete);
router.put('/update', controller.update);

module.exports = router;