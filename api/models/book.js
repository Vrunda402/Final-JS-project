const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const BookSchema = new mongoose.Schema({
    publisherNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);