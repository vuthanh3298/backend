var mongoose = require('mongoose');

var gioHangSchema = new mongoose.Schema({
    user_id: String,
    sanPham_id: String,
    soLuong: String,
    thanhTien: String,
    daXuat: Boolean,
    hinh: String
});

var GioHang = mongoose.model('GioHang', gioHangSchema, 'giohangs');

module.exports = GioHang;