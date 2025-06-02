import React from 'react'

const SearchResultVideoCard = ({info}) => {
    console.log(info)
    if (!info || !info.snippet) {
        return null; // or show a fallback skeleton/loader
      }
    
  return (
    <div className='mx-4 p-2 my-2 relative top-20 left-40 z-80 flex gap-2 h-[280px] rounded-lg hover:bg-gray-100'>
        <img src={info.snippet.thumbnails.high.url} alt="" className='h-[260px] w-[420px] rounded-lg' />
        <div className='py-2'>
            <p className='font-bold text-xl'>{info.snippet.title}</p>
            <p className='py-2'>{info.snippet.channelTitle}</p>
            <p className='py-4 text-xs'>{info.snippet.description}</p>
        </div>
    </div>
  )
}

export default SearchResultVideoCard