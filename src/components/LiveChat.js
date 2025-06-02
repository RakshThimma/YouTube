import React, { memo, useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/ChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chats = useSelector((store) => store.chat.message);
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("live msg")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full h-[465px] rounded-xl border border-gray-300 ml-4  flex flex-col">
      <div className="flex flex-col-reverse overflow-y-scroll h-full m-1">
        {chats.map((c, index) => (
          <ChatMessage key={index} name={c.name} msg={c.message} />
        ))}
      </div>
      <div className="bg-white border border-t-gray-300 rounded-b-xl p-2 m-0 w-full">
        <form action="" onSubmit={(e) =>{ e.preventDefault()
            dispatch(addMessage({
                name: "Rakshitha Thimma",
                message: liveMessage
            }))
        }}>
          <input
            type="text"
            value={liveMessage}
            placeholder="Message...."
            onChange={(e) => setLiveMessage(e.target.value)}
            className="w-3/4 text-xs bg-gray-200  outline-none px-3 py-2 rounded-2xl"
          />
          <button className="w-0.5/4 text-xs font-bold mx-2 bg-gray-200 px-3.5 rounded-xl py-1.5 hover:bg-gray-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
