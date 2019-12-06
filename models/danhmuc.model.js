var mongoose = require('mongoose');

var danhmucSchema = new mongoose.Schema({
    tenDM: String,
    maNhomDM: String,
    hinh: String,
});

var DanhMuc = mongoose.model('DanhMuc', danhmucSchema, 'danhmucs');

module.exports = DanhMuc;