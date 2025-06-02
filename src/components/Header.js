import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../utils/MenuSlice";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";
import { cacheResults } from "../utils/SearchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cache = useSelector((store) => store.search)
  const handleMenuClick = () => {
    dispatch(ToggleMenu());
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      if(cache[searchQuery]) {
        setSuggestions(cache[searchQuery])
      }
      else {
        handleSearchSuggestions()
      }
    }, 200);

    return () => clearTimeout(Timer);
  }, [searchQuery]);

  const handleSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  };

  return (
    <div className="bg-white z-40 fixed w-screen grid grid-flow-col px-3 py-1 shadow-xl">
      {/* menu && logo */}
      <div className="flex gap-2 items-center col-span-1">
        <img
          className="w-8 h-8 cursor-pointer hover:bg-gray-100"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="hamburger-menu"
          onClick={handleMenuClick}
        />
        <img
          className="w-26 h-14"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt="youtube-logo"
        />
      </div>
      {/* search bar */}
      <div className="flex flex-col justify-center items-center col-span-10">
        <div className="flex justify-center items-center">
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="text-sm w-[30rem] border border-gray-500 shadow-md rounded-l-full py-1.5 px-4 focus:border-blue-500 focus:outline-none"
          />
          <button className=" border border-gray-500 shadow-md py-1 px-4 border-l-0 rounded-r-full bg-gray-200 hover:bg-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        { showSuggestions && <div className="fixed top-12 rounded-xl z-50 shadow-xl border border-gray-100 left-[406px] m-1 p-1 bg-white w-[30rem]">
          <ul>
            {
              suggestions.map((s) =>  <li key={s} className="px-3 py-1 my-1 cursor-default hover:bg-gray-200 text-sm" onMouseDown={() => setSearchQuery(s)}><Link to={"/search?q="+encodeURIComponent(s)}>{s}</Link></li>)
            }
          </ul>
        </div>}
      </div>
      {/* create , bell && user icon */}
      <div className="flex gap-6 items-center col-span-1">
        <button className="bg-gray-200 px-3 py-1 rounded-xl hover:bg-gray-300">
          Create
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
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
      </div>
    </div>
  );
};

export default Header;
