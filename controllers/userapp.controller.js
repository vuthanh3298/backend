var User = require('../models/userapp.model');


module.exports.index = async function(req, res) {

    var email = req.query.email;
    var password = req.query.password;
    var user = await User.find({
        email: email,
        password: password
    });
    res.json(user);
};

module.exports.create = async function(req, res) {
    var user = new User({
        email: req.query.email,
        password: req.query.password,
        name: req.query.name,
        phone: req.query.phone
    })
    var user_new = await User.create(user);
    if (user_new) {
        res.json(user_new);
    } else {
        res.send('');
    }
}