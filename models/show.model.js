const mongoose = require('mongoose');

const showSchema = mongoose.Schema({
    date : { type: Date, required: true},
    adress: { type: String, required: true},
    link: { type: String, required: true},
    expireAt: { type: Date, required: true} //YYYY-MM-DD
}, { timestamps: true}
);

showSchema.index({ expireAt: 1}, { expireAfterSeconds: 0});

module.exports = mongoose.model('Show', showSchema);