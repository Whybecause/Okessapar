exports.listVideos = async (items, callback) => {
    const itemsMapped = await items.map((item, i) => {
      const videoTitle = item.snippet.title;
      const videoUri =
        "https://youtube.com/embed/" + item.snippet.resourceId.videoId;
      return ({ title: videoTitle, Url: videoUri });
    });
    return callback(itemsMapped);
  };
  