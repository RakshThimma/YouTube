// const MY_API_KEY = "AIzaSyCHAPy3ngyy-rxfm-kj4APio_PEWsCmpvE"

const MY_API_KEY =process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY

export const YOUTUBE_VIDEOS_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=9&key=" + MY_API_KEY

export const YOUTUBE_SEARCH_URL ="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=pN6jk0uUrD8&key=" + MY_API_KEY

export const LIVE_CHAT_COUNT = 25

export const getSearchQueryURL =(query) => { return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(query)}&type=video&key=` + MY_API_KEY }