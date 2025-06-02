import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const IsMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  
  // early return pattern
  if (!IsMenuOpen) {
    // return <div className="px-1 py-2 w-22">
    //   <ul className="text-xs flex flex-col gap-1">
    //     <li className="hover:bg-gray-300 p-1 cursor-pointer rounded-lg"><Link to="/">Home</Link></li>
    //     <li className="hover:bg-gray-300 p-1 cursor-pointer rounded-lg">Shorts</li>
    //     <li className="hover:bg-gray-300 p-1 cursor-pointer rounded-lg">Subscriptions</li>
    //     <li className="hover:bg-gray-300 p-1 cursor-pointer rounded-lg">You</li>
    //   </ul>
    // </div>;
    return null
  }

  return (
    <div className="fixed top-16 px-4 py-2 w-30 z-20 bg-white">
      <ul className="text-sm p-2 flex flex-col gap-1">
        <li className="hover:bg-gray-300 p-1 cursor-pointer rounded-lg"><Link to="/">Home</Link></li>
        <li className="hover:bg-gray-300 p-1 cursor-pointer rounded-lg">Shorts</li>
        <li className="hover:bg-gray-300 p-1 cursor-pointer rounded-lg">Subscriptions</li>
      </ul>
      <hr className="text-gray-300" />
      <h3 className="pt-3 px-2 font-bold">You</h3>
      <ul className="text-sm p-2 flex flex-col gap-1">
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">History</li>
        <li className="cursor-pointer hover:bg-gray-300 p-1 rounded-lg">Playlists</li>
        <li className="cursor-pointer hover:bg-gray-300 p-1 rounded-lg">Watch Later</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Liked Videos</li>
      </ul>
      <hr className="text-gray-300" />
      <h3 className="pt-3 px-2 font-bold">Explore</h3>
      <ul className="text-sm p-2 flex flex-col gap-1">
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Trending</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Shopping</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Films</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Music</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Live</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Gaming</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">News</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Sports</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Fashion & Beauty</li>
        <li className="hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Podcast</li>
      </ul>
    </div>
  );
};

export default Sidebar;
