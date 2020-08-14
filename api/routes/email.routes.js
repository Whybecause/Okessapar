const express = require ('express');
const router = express.Router();
const controller = require ('../controller/email.controller')

router.post('/contact', controller.sendContactForm);

module.exports = router;