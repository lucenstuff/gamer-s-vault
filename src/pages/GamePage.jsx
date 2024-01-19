/* eslint-disable no-irregular-whitespace */
import { MdShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { getSingleProducts } from "../services/apiConnection.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({
    ProductName: "",
    Description: "",
    ImageURL: "",
    Price: "",
    screenshot1: "",
    screenshot2: "",
    screenshot3: "",
  });

  game.screenshot1 = "https://placehold.co/1280x720";
  game.screenshot2 = "https://placehold.co/1280x720";
  game.screenshot3 = "https://placehold.co/1280x720";

  useEffect(() => {
    const loadGame = async () => {
      try {
        const data = await getSingleProducts(gameId);
        if (data) {
          setGame(data);
        } else {
          console.error("No game data found for the provided ID.");
        }
      } catch (error) {
        console.error("Failed to fetch game data:", error);
      }
    };

    loadGame();
  }, [gameId]);

  console.log(game);

  return (
    <div className="mx-auto flex pt-28 px-4 sm:px-6 lg:px-8 max-w-screen-xl ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <div className="flex justify-center m-2 items-center">
            <img src={game.ImageURL} alt="" className="w-full  object-cover" />
          </div>
          <div className="flex justify-center pb-8 lg:pb-0 screenshots">
            <div className="w-1/3 p-2">
              <img
                src={game.screenshot1}
                alt="screenshot"
                className="object-cover"
              />
            </div>
            <div className="w-1/3 p-2">
              <img
                src={game.screenshot2}
                alt="screenshot"
                className="object-cover"
              />
            </div>
            <div className="w-1/3 p-2">
              <img
                src={game.screenshot3}
                alt="screenshot"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="px-2">
          <h2 className="text-lg md:text-2xl font-bold mb-4">
            {game.ProductName}
          </h2>
          <div className="lg:w-full">
            <p className="text-sm sm:text-base h-36">{game.Description}</p>
          </div>
          <h2 className="py-5 md:text-xl font-semibold">Requisitos:</h2>
          <div className="flex flex-col space-y-6 md:space-y-0 md:space-x-6 md:flex-row pb-10">
            <div className="md:w-1/2 lg:w-3/4">
              <h3 className="text-lg font-semibold">MÍNIMO:</h3>
              <p>
                Requiere un procesador y un sistema operativo de 64 bits,
                <br /> SO: 64-bit Windows 10,
                <br /> Procesador: Core i7-6700 or Ryzen 5 1600,
                <br /> Memoria: 12 GB de RAM,
                <br /> Gráficos: GeForce GTX 1060 6GB or Radeon RX 580 8GB or
                Arc A380,
                <br /> DirectX: Versión 12,
                <br /> Almacenamiento: 70 GB de espacio disponible
              </p>
            </div>
            <div className="md:w-1/2 lg:w-3/4">
              <h3 className="text-lg font-semibold">RECOMENDADO:</h3>
              <p>
                Requiere un procesador y un sistema operativo de 64 bits,
                <br /> SO: 64-bit Windows 10,
                <br /> Procesador: Core i7-12700 or Ryzen 7 7800X3D,
                <br /> Memoria: 16 GB de RAM,
                <br /> Gráficos: GeForce RTX 2060 SUPER or Radeon RX 5700 XT or
                Arc A770,
                <br /> DirectX: Versión 12,
                <br /> Almacenamiento: 70 GB de espacio disponible
              </p>
            </div>
          </div>
          <div className="md:mb-8 font-bold pb-6 md:pb-0">
            <p className="md:text-lg">Precio: ${game.Price}</p>
          </div>
          <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-4 pb-10">
            <button className="flex justify-center items-center w-full bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 transition-transform hover:scale-105 hover:bg-neutral-50">
              Añadir al carrito
              <MdShoppingCart size={24} className="ml-2" />
            </button>
            <button className="flex justify-center items-center w-full bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 transition-transform hover:scale-105 hover:bg-neutral-50">
              Añadir a favoritos
              <IoMdHeart size={24} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
