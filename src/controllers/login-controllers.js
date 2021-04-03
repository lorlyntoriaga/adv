const User = require('../models/user-model')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    const emailAddress = req.body.emailAddress
    const password = req.body.password
    console.log(password)

    const user = await User.findOne({
        emailAddress
    })

    if (user) {
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            res.json(user);
        } else {
            res.status(400).json({ message: 'Email address or password not match' })
        }
        
    } else {
        res.status(400).json({ message: 'Email address or password not match' })
  
    }
}

module.exports = {
    login
}