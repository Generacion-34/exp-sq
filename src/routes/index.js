const express = require('express');
const routerAuthor = require('./author.router');
const routerCountry = require('./country.router');
const routerArticle = require('./article.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/authores', routerAuthor)
router.use('/countries', routerCountry)
router.use('/articles', routerArticle)

module.exports = router;