import ImageSlider from "../components/ImageSlider";
import TrendingGames from "../components/TrendingGames";
import SalesComponent from "../components/SalesComponent";

const slides = [
  "https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317283/banner/h7rkxef3ub2skfqrpiud.jpg",
  "https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317283/banner/dtdspxzhflwa9keq54bs.png",
  "https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317283/banner/z7onv3cgfijesu9n38lz.png",
];

const HomePage = () => {
  return (
    <div className="bg-neutral-300">
      <section className="pt-16">
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
      <div>
        <TrendingGames />
        <SalesComponent />
      </div>
    </div>
  );
};

export default HomePage;
