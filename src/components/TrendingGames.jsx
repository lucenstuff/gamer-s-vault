import FeaturedGame from "./FeaturedGame";
import { Component } from "react";

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
              gameId="facb5988-b5a2-11ee-98dd-daaf184304ce"
              gameName="Baldur's Gate 3"
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2">
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317280/games_db_images_compressed/t3ofshvjkbiimbekayfu.jpg"
              gameId="facb5988-b5a2-11ee-98dd-daaf184304ce"
              gameName="Disco Elysum"
            />
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317278/gallery/grwp9e6sgt3goezbk4fn.jpg"
              gameId="facb5988-b5a2-11ee-98dd-daaf184304ce"
              gameName="Resident Evil 4 Remake"
            />
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317281/games_db_images_compressed/fl0nmrtz9nonew8wjw0q.jpg"
              gameId="facb5988-b5a2-11ee-98dd-daaf184304ce"
              gameName="Gris"
            />
            <FeaturedGame
              gameImg="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317280/games_db_images_compressed/uz2xik34di6cjjkbosgv.jpg"
              gameId="facb5988-b5a2-11ee-98dd-daaf184304ce"
              gameName="Doom Eternal"
            />
          </div>
        </div>
      </section>
    );
  }
}
