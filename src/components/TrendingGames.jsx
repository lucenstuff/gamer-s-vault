import React, { Component } from "react";
import FeaturedGame from "./FeaturedGame";

export default class TrendingGames extends Component {
  render() {
    return (
      <section className="lg:px-20 px-2">
        <h2 className="text-xl font-bold text-center py-6">
          JUEGOS DESTACADOS
        </h2>
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2">
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317279/games_db_images_compressed/ddakgrie2xsdoebwe7wa.jpg"
              gameUrl="https://example.com/game"
              gameName="Game Title"
              gameDescription="This is a brief description of the game."
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2">
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317280/games_db_images_compressed/t3ofshvjkbiimbekayfu.jpg"
              gameName="Game Title"
              gameDescription="This is a brief description of the game."
            />
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317278/gallery/grwp9e6sgt3goezbk4fn.jpg"
              gameUrl="https://example.com/game"
              gameName="Game Title"
              gameDescription="This is a brief description of the game."
            />
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317281/games_db_images_compressed/fl0nmrtz9nonew8wjw0q.jpg"
              gameUrl="https://example.com/game"
              gameName="Game Title"
              gameDescription="This is a brief description of the game."
            />
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317280/games_db_images_compressed/uz2xik34di6cjjkbosgv.jpg"
              gameUrl="https://example.com/game"
              gameName="Game Title"
              gameDescription="This is a brief description of the game."
            />
          </div>
        </div>
      </section>
    );
  }
}
