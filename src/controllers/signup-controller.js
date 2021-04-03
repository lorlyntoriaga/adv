const User = require('../models/user-model')

const bcrypt = require('bcrypt');

const signup = async (req, res) => {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const emailAddress = req.body.emailAddress;
   const password = req.body.password;

   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(password, salt);


   const user = new User({
       firstName,
       lastName,
       emailAddress,
       password: hash
   })
   res.json(await user.save());
}

module.exports = {
    signup
}
