require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET))

var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

var sanPhamApiRoute = require('./routes/sanpham.route');
app.use('/api/sanphams', sanPhamApiRoute);
var danhMucApiRoute = require('./routes/danhmuc.route');
app.use('/api/danhmucs', danhMucApiRoute);
var donHangApiRoute = require('./routes/donhang.route');
app.use('/api/donhangs', donHangApiRoute);
var userAppApiRoute = require('./routes/userapp.route');
app.use('/api/users', userAppApiRoute);
var gioHangApiRoute = require('./routes/giohang.route');
app.use('/api/giohangs', gioHangApiRoute);

//var authMiddleware = require('./middlewares/auth.middleware');

app.get('/', function(req, res) {
    res.send('This is API Backend Android Page');
});
app.listen(port, function() {
    console.log('Example app listening on port ' + port);
});