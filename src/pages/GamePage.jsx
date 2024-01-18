/* eslint-disable no-irregular-whitespace */
import { MdShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
const GamePage = () => {
  return (
    <div className=" mx-1200 pt-28 m-auto pb-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <div className="flex justify-center m-2 items-center">
            <img
              src="https://placehold.co/1024X1024"
              alt=""
              className="w-3/4  object-cover"
            />
          </div>
          <div className=" hidden md:flex justify-center">
            <div className="w-1/4 p-1">
              <img
                src="https://placehold.co/1280X720"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="w-1/4 p-1">
              <img
                src="https://placehold.co/1280X720"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="w-1/4 p-1">
              <img
                src="https://placehold.co/1280X720"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" px-6 md:pt-16">
          <h2 className="text-lg md:text-2xl font-bold mb-4">
            Cyberpunk 2077 & Phantom Liberty
          </h2>
          <div className=" md:w-3/4">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sagittis vitae et leo duis ut diam. Sed risus pretium quam
              vulputate dignissim. Eu consequat ac felis donec et odio
              pellentesque. Sed egestas egestas fringilla phasellus faucibus.
              Pellentesque pulvinar pellentesque habitant morbi tristique
              senectus et. Ipsum nunc aliquet bibendum enim facilisis gravida
              neque convallis. Id diam vel quam elementum pulvinar etiam non
              quam lacus.
            </p>
          </div>
          <h2 className="py-5 md:text-xl font-semibold">Requisitos:</h2>
          <div className="md:flex md:space-x-20  pb-16">
            <div className="md:w-1/4">
              <p>
                MÍNIMO: <br /> Requiere un procesador y un sistema operativo de
                64 bits, SO: 64-bit Windows 10, Procesador: Core i7-6700 or
                Ryzen 5 1600, Memoria: 12 GB de RAM, Gráficos: GeForce GTX 1060
                6GB or Radeon RX 580 8GB or Arc A380, DirectX: Versión 12
                ,Almacenamiento: 70 GB de espacio disponible
              </p>
            </div>
            <div className="pt-6 md:pt-0 md:w-1/4">
              <p>
                RECOMENDADO:
                <br /> Requiere un procesador y un sistema operativo de 64 bits,
                SO: 64-bit Windows 10, Procesador: Core i7-12700 or Ryzen 7
                7800X3D ,Memoria: 16 GB de RAM, Gráficos: GeForce RTX 2060 SUPER
                or Radeon RX 5700 XT or Arc A770, DirectX: Versión 12 ,
                Almacenamiento: 70 GB de espacio disponible
              </p>
            </div>
          </div>

          <div className=" md:mb-8 font-bold">
            <p>Precio: $2.999</p>
          </div>
          <div className="pt-6 flex  justify-center md:justify-between">
            <div className="flex flex-col md:flex-row md:w-1/2 md:space-x-4 ">
              <button className="flex justify-center items-center space-x-1 w-full md:w-1/2  bg-neutral-100 text-neutral-800 font-semibold rounded-2xl p-2 md:p-2 mb-10">
                <h3>Añadir al carro</h3> <MdShoppingCart />
              </button>
              <button className="flex justify-center items-center space-x-1 w-full md:w-1/2 bg-neutral-100 text-neutral-800 font-semibold rounded-2xl p-2 md:p-2 mb-10">
                Añadir a favoritos
                <IoMdHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
