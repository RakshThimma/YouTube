import React, { useEffect, useRef, useState } from 'react';
import { YOUTUBE_VIDEOS_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState('');

  const loadingRef = useRef(false);
  const nextPageTokenRef = useRef('');

  useEffect(() => {
    // Initial fetch for videos
    getVideos();

    const handleScroll = () => {
      // Check if user has scrolled to the bottom and more videos are available
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
        !loadingRef.current &&
        nextPageTokenRef.current
      ) {
        // Call getVideos with nextPageToken to load more videos
        getVideos(nextPageTokenRef.current);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVideos = async (pageToken = '') => {
    setLoading(true);
    loadingRef.current = true;

    // Fetch data from YouTube API
    const data = await fetch(`${YOUTUBE_VIDEOS_URL}&pageToken=${pageToken}`);
    const json = await data.json();

    // Update videos state with new data
    setVideos((prev) => [...prev, ...json.items]);

    // Set the nextPageToken for pagination
    setNextPageToken(json.nextPageToken);
    nextPageTokenRef.current = json.nextPageToken;

    setLoading(false);
    loadingRef.current = false;
  };

  if (!videos) return null;

  return (
    <div className="flex flex-wrap justify-center m-2 p-1">
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {loading && <p>Loading..........</p>}
    </div>
  );
};

export default Videocontainer;
