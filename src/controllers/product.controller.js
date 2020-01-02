var Product = require('../models/mongoose.models');
var con = require('../models/mysql.models');

module.exports.search = async function(req, res) {
  var mang= req.query.mang||{$ne:""};
  var giatu= req.query.giatu||0;
  var den= req.query.den||1000000000000;
  var sim= req.query.sim||{$ne:""};
  var tongdiem= req.query.tongdiem||{$ne:""};
  var dauso = req.query.dauso||{$ne:""};
  var page= req.query.page||1;
  var date= req.query.date||{$ne:""};
  var allProducts = await Product.Product.find({mang:mang,gia:{$gte:giatu,$lte:den}, dang:sim, tong:tongdiem, dauso:dauso}).where();
  res.json(allProducts);
};

module.exports.signup = async function( req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var temp = Product.User.find({email:email}).where();
  if(temp.length===1) res.sendStatus(500)
  else{
    var user = await new Product.User({username:username,password:password,email:email}).save();
    res.sendStatus(201);
  }
}

module.exports.login = async function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var result = await Product.User.find({email:email,password:password}).where();
  if (result.length) {
    res.cookie('email',email);
    res.sendStatus(200)}
  else {
    res.sendStatus(500);}
}

// module.exports.add = async (req, res)=>{
//   var numberphone = req.body.numberphone;
//   var gia = req.body.gia;
//   var tong = req.body.tong;
//   var mang = req.body.mang;
//   var dang = req.body.dang;
//   var dauso = req.body.dauso;
//   var product = new Product.Product({numberphone:numberphone, gia:gia,tong:tong,mang :mang,dang:dang,dauso:dauso}).save();
//   res.sendStatus(201);
// }

// module.exports.delete = async (req, res)=>{
//   var id = req.body.id;
//   //xoa
// }


// module.exports.search = async function(req, res) {
//   var mang= req.query.mang?("='"+req.query.mang+"'"):("!=''");
//   var giatu= req.query.giatu||0;
//   var so=req.query.so?("like '%"+req.query.so+"%'"):("!=''");
//   var den= req.query.den||1000000000000;
//   var sim=req.query.sim?("='"+req.query.sim+"'"):("!=''");
//   var tongdiem= req.query.tongdiem?("='"+req.query.tongdiem+"'"):("!=''");
//   var dauso = req.query.dauso?("='"+req.query.dauso+"'"):("!=''");
//   // var preq.query.age= req.query.page||1;
//   // var date= req.query.("='"+req.query.date)||("!=''");
//   con.query("SELECT * FROM products where mang"+mang+"  and gia > "+giatu+
//     " and gia <"+den+" and dang"+sim+" and tong"+tongdiem+"  and dauso"+dauso +" and numberphone "+so, function (err, result, fields) {
//     if (err) throw err;
//     res.json(result);
//     });
// };

// module.exports.signup =async function(req, res) {
//   var username = req.body.username;
//   var password = req.body.password;
//   var email = req.body.email;
//   var sql = "insert into users (email,username,password) value (?,?,?);";

//   await con.query( sql, [email,username,password], function( err, result, fields) {
//     if (err) throw err;
//       con.query("select * from users where email = ?", email,function(err2,result2) {
//         if(!result2) res.sendStatus(500);
//         else{
//           res.sendStatus(201);

//         }

//       })
//     });
// }

// module.exports.login =async function(req, res) {
//   var email = req.body.email;
//   var password = req.body.password;
//   var sql = "SELECT * from users where email = ? and password = ?";
//   await con.query(sql, [email,password], function(err, result, fields) {
//     if (err) throw err;
//     if (result) {
//       res.cookie('email',email);
//       res.sendStatus(200);
//     }
//      else res.sendStatus(500);
//   }) 
// }

// // // module.exports.delete = async (req, res){
// // //   var id = req.body.username;
// // //   //xoa
// // // }

