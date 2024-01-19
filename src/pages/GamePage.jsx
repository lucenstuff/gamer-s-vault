/* eslint-disable no-irregular-whitespace */
import { MdShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { getSingleProducts } from "../services/apiConnection.js";
import { useEffect } from "react";
import { data } from "autoprefixer";

const GamePage = () => {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { gameId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleProducts(gameId)
      .then((game) => {
        setGame(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [gameId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="mx-auto flex pt-28 px-4 sm:px-6 lg:px-8 max-w-screen-xl ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <div className="flex justify-center m-2 items-center">
            <img
              src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1697317279/games_db_images_compressed/z55h6w6ha4ymabqed2zl.jpg"
              alt=""
              className="w-full  object-cover"
            />
          </div>
          <div className="flex justify-center pb-8 lg:pb-0 screenshots">
            <div className="w-1/3 p-2">
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705521967/Game%20Screenshots/Cyberpunk%202077/ss_8640d9db74f7cad714f6ecfb0e1aceaa3f887e58_rtfnuu.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="w-1/3 p-2">
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705521967/Game%20Screenshots/Cyberpunk%202077/ss_7924f64b6e5d586a80418c9896a1c92881a7905b_tbrvx9.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="w-1/3 p-2">
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705521966/Game%20Screenshots/Cyberpunk%202077/ss_36dd158f7fb3d6a0ac30ad67dae3ce6cddfe1ac9_a7pgr3.jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="px-2">
          <h2 className="text-lg md:text-2xl font-bold mb-4"></h2>
          <div className="lg:w-full">
            <p className="text-sm sm:text-base h-36">
              Cyberpunk 2077 es un juego de rol de acción y aventuras de mundo
              abierto ambientado en el oscuro futuro de Night City, una
              peligrosa megalópolis obsesionada con el poder, el glamour y las
              incesantes modificaciones corporales.
            </p>
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
            <p className="md:text-lg">Precio: $2.999</p>
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
