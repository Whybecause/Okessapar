const Show = require('../models/show.model')

exports.createShow = async (req, res) => {
    const show = new Show(req.body);
    try {
        const result = await show.save();
        res.status(201).json({
            message: 'Show created succesfuly',
            result: result
        });
    } catch(e) {
        res.status(500).json({
            error: 'Something went wrong...'
        });
    }
}

exports.getAllShows = (req, res) => {
    Show.find()
    .sort({"date": 1})
    .then(shows => res.status(200).json(shows))
    .catch(error => res.status(400).json({ error: error}));
}

