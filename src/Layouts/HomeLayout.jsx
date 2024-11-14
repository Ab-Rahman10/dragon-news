import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto py-3">
      <Header></Header>
      <LatestNews></LatestNews>
    </div>
  );
};

export default HomeLayout;
