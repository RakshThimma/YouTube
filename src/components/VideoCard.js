import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-96 m-1 p-1">
      <img
        className="rounded-lg h-56 w-96"
        src={thumbnails.high.url}
        alt="video-img"
      />
      <div className="px-1">
        <h3 className="text-sm font-bold">{title}</h3>
        <h5 className="text-xs text-gray-500 hover:text-black">{channelTitle}</h5>
        <p className="text-xs text-gray-500">
          {viewCount} ● {publishedAt}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
