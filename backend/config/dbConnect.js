const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/scatch').then(() => console.log('MongoDB Connected...')).catch((error) => console.error(error))

module.exports = mongoose.connection