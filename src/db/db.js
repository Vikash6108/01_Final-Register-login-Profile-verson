const mongoose = require('mongoose');

function connect() {
    mongoose.connect("mongodb://0.0.0.0/exc-2")
        .then(() => {
            console.log('Connected to db')
        })
        .catch((err) => {
            console.error('Error connecting to db', err.message)
        })
}

module.exports = connect