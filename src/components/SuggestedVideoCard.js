import React from 'react'

const SuggestedVideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { title, channelTitle, publishedAt, thumbnails } = snippet;
    const { viewCount } = statistics;
    return (
      <div className="flex items-start mb-1 p-1 hover:bg-gray-200 rounded-lg">
        <img
          className="rounded-lg h-20 min-w-[8rem] object-cover "
          src={thumbnails.high.url}
          alt="video-img"
          
        />
        <div className="px-1 text-xs">
          <h3 className="truncate-text font-bold">{title}</h3>
          <h5 className="text-xs text-gray-500 hover:text-black">{channelTitle}</h5>
        </div>
      </div>
    );
  };
  

export default SuggestedVideoCard