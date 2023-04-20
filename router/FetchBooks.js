const { Router } = require('express');
const router = Router();

let books = require('../Books');

router.get('/', (req, res) => {
    res.json(books);
})

module.exports = router;