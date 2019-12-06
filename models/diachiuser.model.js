var mongoose = require('mongoose');

var diaChiSchema = new mongoose.Schema({
    user_id: String,
    diaChi: String
});

var DiaChi = mongoose.model('DiaChi', diaChiSchema, 'diachi');

module.exports = DiaChi;