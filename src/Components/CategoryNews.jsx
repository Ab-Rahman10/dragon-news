import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold mb-5">Dragon News Home</h2>
      {news.length > 0 ? (
        <div className="space-y-10">
          {news.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
          ))}
        </div>
      ) : (
        <div>
          {" "}
          <h2 className="font-semibold">
            This Category currently has now news.
          </h2>
        </div>
      )}
    </div>
  );
};

export default CategoryNews;
