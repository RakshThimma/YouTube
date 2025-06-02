import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import SuggestedVideoCard from "./SuggestedVideoCard";

const Suggestions = () => {
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        getSuggestedVideos()
    },[])

    const getSuggestedVideos= async () =>{
        const data = await fetch(YOUTUBE_VIDEOS_URL)
        const json = await data.json()
        setVideos(json.items)
    }
    if(!videos) return null
    console.log(videos)
  return (
    <div className="flex flex-col m-2 p-1">
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <SuggestedVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Suggestions;
