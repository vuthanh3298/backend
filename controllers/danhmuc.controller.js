var DanhMuc = require('../models/danhmuc.model');

module.exports.index = async function(req, res) {
    var manhomdm = req.query.manhomdm;
    var danhmucs;
    if (manhomdm) {
        danhmucs = await DanhMuc.find({ maNhomDM: manhomdm });
    } else {
        danhmucs = await DanhMuc.find();
    }
    return res.json(danhmucs);
}

module.exports.create = async function(req, res) {
    var danhmuc = await DanhMuc.create(req.body);
    return res.json(danhmuc);
}