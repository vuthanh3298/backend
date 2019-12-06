var mongoose = require('mongoose');

var danhmucSchema = new mongoose.Schema({
    maNhomDM: String,
    tenNhomDM: String,
});

var NhomDanhMuc = mongoose.model('NhomDanhMuc', danhmucSchema, 'nhomdanhmucs');

module.exports = NhomDanhMuc;