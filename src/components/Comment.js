import React, { useEffect } from 'react'
import { RELATED_VIDEOS_API, YOUTUBE_COMMENTS_API } from '../utils/constants'


const Comment = ({data}) => {
   const {name,comment} = data
  //  ---------------------------YOUTUBE COMMENTS API--------------------------
  //  useEffect(() => {
  //   console.log('Effect triggered');
  //       getComments();
  //  },[]);
  //  const getComments = async () => {
  //   // const data =await fetch(YOUTUBE_COMMENTS_API)
  //   const data =await fetch(YOUTUBE_SEARCH_WITH_KEYWORD_API)
  //   const json =await data.json()
  //   console.log(json.items)
  //  }
  // https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=VIDEO_ID&maxResults=10
  // ---------------------------------------------------------------------------
  return (
    <div className='flex items-center my-1 bg-gray-100 p-1 rounded-lg'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <div className='m-1 font-semiboldtext-sm'>
            <p className='font-semibold'>{name}</p>
            <p className='font-normal text-sm'>{comment}</p>
        </div>
    </div>
  )
}

export default Comment