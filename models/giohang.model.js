var mongoose = require('mongoose');

var gioHangSchema = new mongoose.Schema({
    user_id: String,
    sanpham_id: String,
    soluong: String,
    thanhTien: String,
    daXuat: Boolean
});

var GioHang = mongoose.model('GioHang', gioHangSchema, 'giohangs');

module.exports = GioHang;