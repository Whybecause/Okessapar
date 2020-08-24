const express = require('express');
const router = express.Router();
const controller = require('../controller/show.controller');
const authJwt = require('../middlewares/authJwt');

router.post("/shows", [authJwt.verifyToken, authJwt.isAdmin], controller.createShow);
router.get("/shows", controller.getAllShows);

module.exports = router;