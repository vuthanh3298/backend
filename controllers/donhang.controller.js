var DonHang = require('../models/donhang.model');
var SanPham = require('../models/sanpham.model');

module.exports.index = async function(req, res) {
    var userid = req.query.user_id;
    var donhangs;
    if (userid) {
        donhangs = await DonHang.find({ user_id: userid });
        var masanphams = donhangs.map(x => x.sanpham_id);
        var sanphams = masanphams.map(x => async function() {
            return await SanPham.find({ _id: x });
        });
        var giohangsanphams = sanphams.map(x => {
            return new {
                tensp: x[0].tenSP,
                hinhsp: x[0].hinh,
                gia: x[0].gia,
                soluong: 1
            }
        });
        res.json(giohangsanphams);
    } else {
        donhangs = await DonHang.find();
    }
    res.json(donhangs);
}

module.exports.create = async function(req, res) {
    var donhang = new DonHang({
        user_id: req.query.user_id,
        sanpham_id: req.query.sanpham_id,
        soluong: req.query.soluong,
        daxuat: req.query.daxuat,
        danhan: req.query.danhan
    })
    var don_hang = await DonHang.create(donhang);
    if (don_hang) {
        res.json(don_hang);
    } else {
        res.send("");
    }
}