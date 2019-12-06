var SanPham = require('../models/sanpham.model');
var mongoose = require('mongoose');
var cloudinary = require('cloudinary').v2;
var DanhMuc = require('../models/danhmuc.model');

module.exports.index = async function(req, res) {
    var madm = req.query.madm;
    var sanphams;
    if (madm)
        sanphams = await SanPham.find({ maDM: madm });
    else
        sanphams = await SanPham.find();
    res.json(sanphams);
}

module.exports.getByID = async function(req, res) {
    var id = req.params.id;
    var result = await SanPham.find({ _id: id });
    res.json(result);
}

module.exports.postCreate = async function(req, res) {
    SanPham.create(req.body);
    res.redirect('/products');
}