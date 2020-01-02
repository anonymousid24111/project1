var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/dbProducts",{ 
  useUnifiedTopology: true,
  useNewUrlParser: true    });
var productSchema  = new mongoose.Schema({
	numberphone: String,
	gia: Number,
	tong: String,
	mang: String,
	dang: String,
	dauso: String
});
var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String
})
var Product = mongoose.model('products', productSchema, 'products');
var User = mongoose.model('users', userSchema, 'users');
module.exports.User = User;
module.exports.Product = Product;