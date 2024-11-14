import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-3 mt-8 bg-base-200 p-3 w-10/12 mx-auto">
      <p className="bg-[#D72050] text-white py-1 px-2">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-4">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          esse quam totam magnam enim odit illo.
        </Link>{" "}
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          esse quam totam magnam enim odit illo.
        </Link>{" "}
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          esse quam totam magnam enim odit illo.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
