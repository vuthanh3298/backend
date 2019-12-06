var mongoose = require('mongoose');

var sanphamSchema = new mongoose.Schema({
    tenSP: String,
    moTa: String,
    gia: String,
    giaCu: String,
    tiLeGiamGia: String,
    maDM: String,
    hinh: String
});

var SanPham = mongoose.model('SanPham', sanphamSchema, 'sanphams');

module.exports = SanPham;