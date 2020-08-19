const mongoose = require('mongoose');

const showSchema = mongoose.Schema({
    date : { type: Date, required: true, expires: 50},
    adress: { type: String, required: true},
    link: { type: String, required: true},
});

module.exports = mongoose.model('Show', showSchema);