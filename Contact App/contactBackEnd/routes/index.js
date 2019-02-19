const router = require('express').Router();
const mongoose = require('mongoose');

/* ----- Abdel, tu peux garder ces ID pour te connecter ------ */
const dbUrl = "mongodb://nicolas:nicolas1@ds247290.mlab.com:47290/contact_app";
/* --------------------- */

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};
mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('server is running');
  }
});

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  mobile: String
});
const UserModel = mongoose.model('users', userSchema);


router.post('/addcontact', function(req, res) {
  if (req.body.first_name !== '' && req.body.last_name !== '' && req.body.email !== '' && req.body.mobile !== '') {
    console.log('addcontact');
    var newUser = new UserModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile: req.body.mobile
    });
    newUser.save(function(error, user) {
      res.json({result: true, user});
    });
  } else {
    console.error('erreur !!!');
    res.json({result: false, error: 'Incorrect data'});
  }
});

module.exports = router;
