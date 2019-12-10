var GioHang = require('../models/giohang.model');
var SanPham = require('../models/sanpham.model');
var User = require('../models/userapp.model');

module.exports.index = async function(req, res) {
    var userid = req.query.user_id;
    var giohangs;
    if (userid) {
        var giohangs = await GioHang.find();
        var result = await Promise.all(giohangs.map(async x => {
            var user = await User.find({ _id: x.user_id });
            var sanpham = await SanPham.find({ _id: x.sanPham_id });
            return {
                _id: x._id,
                username: user[0].name,
                tenSP: sanpham[0].tenSP,
                thanhTien: x.thanhTien,
                soLuong: x.soLuong,
                hinh: x.hinh
            };
        }));
        res.json(result);
    } else {
        giohangs = await GioHang.find();
    }
    res.json(giohangs);
}

module.exports.create = async function(req, res) {
    var giohang = new GioHang({
        user_id: req.query.user_id,
        sanPham_id: req.query.sanPham_id,
        soLuong: req.query.soLuong,
        thanhTien: req.query.thanhTien,
        daXuat: req.query.daXuat,
        hinh: req.query.hinh
    })
    var gio_hang = await GioHang.create(giohang);
    if (gio_hang) {
        res.send('success');
    } else {
        res.send('error');
    }
}

module.exports.delete = async function(req, res) {
    var id = req.params.id;
    var result = await GioHang.deleteOne({ _id: id });
    if (result.ok === 1) {
        res.send('success');
    } else {
        res.send('error');
    }
}

module.exports.update = function(req, res) {
    //if(req.body.)
}