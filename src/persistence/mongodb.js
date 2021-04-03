const mongoose = require('mongoose');

const connect = async () => 
    await mongoose.connect('mongodb://localhost/advdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

module.exports = connect