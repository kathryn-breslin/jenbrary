var router = require("express").Router();
const bookController = require("../../controller/bookController");

router
    .route('/')
    .post(bookController.create);

module.exports = router;