import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getSearchQueryURL } from '../utils/constants';
import SearchResultVideoCard from './SearchResultVideoCard';


const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const [videos,setVideos] = useState([])
    const q = searchParams.get("q")
    // console.log(q)

    useEffect(() => {
        handleSearchFetch(q)
    },[q])
    useEffect(() => {
        console.log("Videos updated:", videos);
      }, [videos]);

    const handleSearchFetch = async (q) => {
        const url = getSearchQueryURL(q)
        const data = await fetch(url)
        const json = await data.json()
        // console.log(json)
        setVideos(json.items)
    }
    if(!videos) return null
  return (
    <div>
        {
            videos.map((v) => {
              return <Link key={v.id.videoId} to={"/watch?v="+ v.id.videoId}> <SearchResultVideoCard key={v.id.videoId} info={v}/>   </Link>         
             })
        }
        {/* <SearchResultVideoCard info= {videos[0]}/> */}
    </div>
  )
}

export default SearchResultsPage