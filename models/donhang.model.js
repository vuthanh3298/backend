var mongoose = require('mongoose');

var donHangSchema = new mongoose.Schema({
    user_id: String,
    thanhTien: String,
    ngay: String,
    diaChi: String
});

var DonHang = mongoose.model('DonHang', donHangSchema, 'donhangs');

module.exports = DonHang;