import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/MenuSlice";
import { useSearchParams } from "react-router";
import CommentsConatiner from "./CommentsConatiner";
import LiveChat from "./LiveChat";
import Suggestions from "./Suggestions";

const WatchVideoPage = () => {
  const [live, setLive] = useState(false);
  const [suggestions, setSuggestions] = useState(true);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));
  const video_id = searchParams.get("v");
  useEffect(() => {
    dispatch(CloseMenu());
  }, []);

  return (
    <div className="relative top-20 w-full overflow-x-hidden">
      <div className="flex ml-20 my-2 mr-10 w-full">
        <iframe
          width="960"
          height="500"
          className="rounded-xl w-[880px]"
          src={"https://www.youtube.com/embed/" + video_id + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-[330px] h-[498px] P-1">
          <div className="w-[30px] flex text-xs font-semibold mb-2 mt-1">
            <button
              onClick={() => {
                setSuggestions(!suggestions);
                setLive(!live)
              }}
              className="bg-gray-300 px-2 py-1 rounded-lg ml-4  hover:bg-gray-400"
            >
              Suggestions
            </button>
            <button
              onClick={() => {setLive(!live)
                setSuggestions(!suggestions)
              }}
              className="bg-gray-300 px-2 py-1 rounded-lg ml-2 hover:bg-gray-400"
            >
              Live
            </button>
          </div>
          {live && <LiveChat />}
          {suggestions && <Suggestions />}
        </div>
      </div>
      <CommentsConatiner />
    </div>
  );
};

export default WatchVideoPage;
