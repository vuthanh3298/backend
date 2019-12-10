var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppingdb');

var GioHang = require('./models/giohang.model');
var SanPham = require('./models/sanpham.model');
var User = require('./models/userapp.model');

var getAll = async function() {
    var giohangs = await GioHang.find();
    var res = await Promise.all(giohangs.map(async x => {
        var user = await User.findOne({ _id: x.user_id });
        var sanpham = await SanPham.findOne({ _id: x.sanPham_id });
        return {
            _id: x._id,
            username: user.name,
            tensp: sanpham.tenSP,
            thanhTien: x.thanhTien,
            soLuong: x.soLuong
        };
    }));
    return res;
}

getAll().then(data => console.log(data));