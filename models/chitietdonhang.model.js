var mongoose = require('mongoose');

var chiTietDonHangSchema = new mongoose.Schema({
    donHang_id: String,
    gioHang_id: String,
});

var ChiTietDonHang = mongoose.model('ChiTietDonHang', gioHangSchema, 'chitietdonhangs');

module.exports = ChiTietDonHang;