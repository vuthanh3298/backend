var express = require('express');
var controller = require('../controllers/sanpham.controller');
var upload = require('../handlers/multer.handler');

var router = express.Router();

router.get('/', controller.index);

router.get('/:id', controller.getByID);

router.post('/create', upload.single('hinh'), controller.postCreate);

module.exports = router;