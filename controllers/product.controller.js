var Product = require('../models/sanpham.model');
var mongoose = require('mongoose');
var cloudinary = require('cloudinary').v2;
var DanhMuc = require('../models/danhmuc.model');

module.exports.index = function(req, res) {
    Product.find().then(function(products) {
        res.render('product/index', {
            products: products
        });
    });
};

module.exports.view = async function(req, res) {

    var id = mongoose.Types.ObjectId(req.params.id);

    var product = await Product.findById(id, function(err, product) {
        return product;
    });

    res.render('product/view', {
        product: product
    });
}

module.exports.delete = async function(req, res) {
    var id = mongoose.Types.ObjectId(req.params.id);
    Product.findByIdAndRemove(id, function(err, product) {
        if (err) return err;
    });
    res.redirect('/products');
}

module.exports.edit = async function(req, res) {
    var id = mongoose.Types.ObjectId(req.params.id);
    var product = await Product.findById(id);
    res.render('product/edit', {
        product: product
    });
}

module.exports.update = async function(req, res) {
    var id = mongoose.Types.ObjectId(req.params.id);
    var result = await cloudinary.uploader.upload(req.file.path);
    req.body.hinh = result.url;
    var product = await Product.findByIdAndUpdate(id, { $set: req.body }, function(err, product) {
        if (err) return err;
    });
    res.redirect('/products');
}

module.exports.create = async function(req, res) {
    var danhmucs = await DanhMuc.find();
    res.render('product/create', {
        danhmucs: danhmucs
    });
}

module.exports.postCreate = async function(req, res) {
    var result = await cloudinary.uploader.upload(req.file.path);
    req.body.hinh = result.url;
    var product = await Product.create(req.body);
    res.redirect('/products');
}