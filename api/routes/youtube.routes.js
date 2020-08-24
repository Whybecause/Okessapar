const express = require ('express');
const router = express.Router();
const controller = require ('../controller/youtube.controller');

router.get('/videos', controller.getYoutubePlaylistVideos);

module.exports = router;