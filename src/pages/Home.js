import React from "react";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <PopularProducts></PopularProducts>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}
