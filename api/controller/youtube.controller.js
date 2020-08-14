// "use strict";
const { google } = require("googleapis");
const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});
const functions = require('../functions/youtube.functions');

exports.getYoutubePlaylistVideos = async (req, res) => {
  try {
    const response = await youtube.playlistItems.list({
      part: "snippet, id",
      playlistId: "PL4fApzfSmi_xJmJqbUt7hXK1ZdEwjnX-e",
    });
    const items = response.data.items;
    functions.listVideos(items, function (callback) {
      res.status(200).send(callback);
    });
  } catch (e) {
    console.log(e);
  }
};
