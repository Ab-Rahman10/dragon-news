import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-3 mt-8 bg-base-200 p-3">
      <p className="bg-[#D72050] text-white py-2 px-6">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-5">
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
