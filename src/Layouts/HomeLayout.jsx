import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout-components/LeftNavbar";
import RightNavbar from "../Components/Layout-components/RightNavbar";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto py-3 font-poppins">
      <header>
        <Header></Header>
      </header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav className="py-5">
        <Navbar></Navbar>
      </nav>
      <main className="grid md:grid-cols-12 gap-6  ">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
