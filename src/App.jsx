import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import TrendingGames from "./components/TrendingGames";
import Sales from "./components/Sales";

const slides = [
  "https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317283/banner/h7rkxef3ub2skfqrpiud.jpg",
  "https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317283/banner/dtdspxzhflwa9keq54bs.png",
  "https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317283/banner/z7onv3cgfijesu9n38lz.png",
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <ImageSlider>
            {slides.map((slide) => (
              <img
                className="w-full md:aspect-auto aspect-video object-cover"
                src={slide}
                key={slide}
                alt="Image Slider"
              />
            ))}
          </ImageSlider>
        </section>
        <TrendingGames />
        <Sales />
      </div>
    );
  }
}
