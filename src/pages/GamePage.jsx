import { MdShoppingCart } from "react-icons/md";
import { IoMdClose, IoMdHeart } from "react-icons/io";
import {
  getSingleProducts,
  getProductScreenshots,
} from "../services/apiConnection.js";
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

  const [selectedImage, setSelectedImage] = useState(null);

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

    const loadScreenshots = async () => {
      try {
        const data = await getProductScreenshots(gameId);
        if (data && data.length >= 3) {
          setGame((prevGame) => ({
            ...prevGame,
            screenshot1: data[0].ImageURL,
            screenshot2: data[1].ImageURL,
            screenshot3: data[2].ImageURL,
          }));
        } else {
          console.error(
            "Insufficient screenshot data found for the provided ID."
          );
        }
      } catch (error) {
        console.error("Failed to fetch screenshot data:", error);
      }
    };

    loadGame();
    loadScreenshots();
  }, [gameId]);

  return (
    <div className="mx-auto flex pt-14 md:pt-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="max-w-lg">
          <div className="hidden md:flex justify-center m-2 items-center group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md">
            {game.ImageURL ? (
              <img
                className="aspect-square rounded-md transform group-hover:scale-105 duration-200"
                src={game.ImageURL}
                alt={game.ProductName}
              />
            ) : (
              <div className="bg-neutral-400 animate-pulse w-full aspect-square"></div>
            )}
          </div>
          <div className="justify-center pb-8 lg:pb-0 screenshots hidden md:flex">
            <div className="w-1/3 p-2">
              <div className="aspect-w-4 aspect-h-3 aspect-video">
                {game.screenshot1 ? (
                  <img
                    src={game.screenshot1}
                    alt="screenshot"
                    className=" aspect-video object-cover shadow-md hover:scale-105 ease-in-out duration-200 cursor-pointer rounded-md"
                    onClick={() => setSelectedImage(game.screenshot1)}
                  />
                ) : (
                  <div className="bg-neutral-400 animate-pulse w-full aspect-video rounded-md shadow-lg"></div>
                )}
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="aspect-w-4 aspect-h-3 aspect-video">
                {game.screenshot2 ? (
                  <img
                    src={game.screenshot2}
                    alt="screenshot"
                    className="aspect-video object-cover shadow-md hover:scale-105 ease-in-out duration-200 cursor-pointer rounded-md"
                    onClick={() => setSelectedImage(game.screenshot2)}
                  />
                ) : (
                  <div className="bg-neutral-400 animate-pulse w-full aspect-video rounded-md shadow-lg"></div>
                )}
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="aspect-w-4 aspect-h-3">
                {game.screenshot3 ? (
                  <img
                    src={game.screenshot3}
                    alt="screenshot"
                    className="aspect-video object-cover shadow-md hover:scale-105 ease-in-out duration-200 cursor-pointer rounded-md"
                    onClick={() => setSelectedImage(game.screenshot3)}
                  />
                ) : (
                  <div className="aspect-video bg-neutral-400 animate-pulse w-full  rounded-md shadow-lg"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center m-2 items-center group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md">
          {game.ImageURL ? (
            <img
              className="aspect-square rounded-md transform group-hover:scale-105 duration-200"
              src={game.ImageURL}
              alt={game.ProductName}
            />
          ) : (
            <div className="bg-neutral-400 animate-pulse w-full aspect-square"></div>
          )}
        </div>
        <div className="px-2">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {game.ProductName}
          </h2>
          <div className="lg:w-full">
            <p className="text-md md-text-sm sm:text-base  md:h-36 max-w-xl">
              {game.Description}
            </p>
          </div>
          <h2 className="py-5 md:text-md font-bold">REQUISITOS:</h2>
          <div className="text-sm flex flex-col space-y-6 md:space-y-0 md:space-x-6 md:flex-row pb-0">
            <div className="text-sm md:w-1/2 lg:w-3/4">
              <h3 className="text-md font-semibold">MÍNIMO:</h3>
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
            <div className="md:w-1/2 lg:w-3/4 pb-2">
              <h3 className="text-md font-semibold">RECOMENDADO:</h3>
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
          <div className="md:mb-4 font-bold pb-0 md:pb-0">
            <p className="md:text-md pt-2">Precio: ${game.Price}</p>
          </div>
          <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-4 pb-10 md:pb-0 pt-10 md:pt-3">
            <button className="flex justify-center items-center w-full bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 transition-transform hover:scale-105 hover:bg-neutral-50">
              Añadir al carrito
              <MdShoppingCart size={24} className="ml-2" />
            </button>
            {/* <button className="flex justify-center items-center w-full bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 transition-transform hover:scale-105 hover:bg-neutral-50">
              Añadir a favoritos
              <IoMdHeart size={24} className="ml-2" />
            </button> */}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed top-0 z-50 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-55 backdrop-blur-lg">
          <div className="relative w-3/4 h-3/4 flex justify-center items-start md:items-center">
            <div className="rounded-md overflow-hidden">
              <img
                src={selectedImage}
                alt="selected screenshot"
                className="max-w-full max-h-full aspect-video"
              />
            </div>
            <button
              className="absolute top-1 right-0 m-4  -mt-12 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <IoMdClose size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
