const { index, show, create, update, destroy } = require('../controllers/books');
const passport = require('passport');

module.exports = (router) => {
    router.get('/books', index);
    router.get('/books/show', show);
    router.post('/books', create);
    router.post('/books/update', passport.authenticate('jwt', { session: false }), update);
    router.post('/books/destroy', passport.authenticate('jwt', { session: false }), destroy);
    return router;
};