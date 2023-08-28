import React from "react";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Newsletter from "../components/Newsletter";
import Video from "../components/Video";
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
      <Video></Video>
      <Footer></Footer>
    </div>
  );
}
