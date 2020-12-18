const Book = require('../models/book');
const jwt = require('jsonwebtoken');

exports.index = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
        const { _id } = req.query;
        let data = await Book.findOne({ _id });
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.create = async (req, res, next) => {
    console.log('req.body -> :', req.body)
    const {
        publisherNumber,
        name,
        author,
        introduction,
        price,
    } = req.body;

    var mybook = new Book({
        publisherNumber,
        name,
        author,
        introduction,
        price,
    })
    Book.find({
        publisherNumber,
        name,
    }, async (err, doc) => {
        console.log('doc -> :', doc)
        if (doc && doc.length) {
            return res.json({ code: 500, msg: 'Book already exists' })
        }

        try {
            await mybook.save()
            res.json({ code: 200, msg: 'success' })
        } catch (error) {
            console.log('error -> :', error)
            next(error);
        }
    })

};

exports.update = async (req, res, next) => {
    try {
        const {
            _id,
            publisherNumber,
            name,
            author,
            introduction,
            price, } = req.body;

        const book = await Book.findById(_id);
        if (!book) {
            return res.status(500).json({ msg: 'Did not find this book' });
        }

        Book.findByIdAndUpdate(_id, { $set: { ...req.body } }, function (err, doc) {
            res.status(200).json({ code: 200, data: 'ok' });
        })
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
        const { _id } = req.body;
        const book = await Book.findByIdAndRemove(_id);
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
        next(error);
    }
};