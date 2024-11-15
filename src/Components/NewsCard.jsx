import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="mx-auto bg-white rounded-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          className="w-12 h-12 rounded-full"
          src={news.author.img}
          alt={news.author.name}
        />
        <div className="ml-4 flex-grow">
          <p className="text-lg font-semibold">{news.author.name}</p>
          <p className="text-gray-500 text-sm">
            {new Date(news.author.published_date).toISOString().split("T")[0]}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegBookmark className="text-gray-500" />
          <FaShareAlt className="text-gray-500" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 text-xl font-bold">{news.title}</h3>

      {/* Image */}
      <img
        className="w-full object-cover mt-4"
        src={news.image_url}
        alt={news.title}
      />

      {/* Details */}
      <p className="p-4 text-gray-600">
        {news.details.slice(0, 200)}...{" "}
        <span className="text-blue-500 font-semibold cursor-pointer">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-gray-200 flex items-center justify-between text-gray-600">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mr-1" />
          ))}
          <span className="ml-2 text-sm">{news.rating.number}</span>
        </div>
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
