import GameListComponent from "../components/GameListComponent";
const UserDasboard = () => {
  return (
    <div className=" bg-neutral-200 p-4 pt-6 md:pt-20">
      <div className="flex flex-col md:flex-row  md:justify-center md:space-x-60  md:pt-0 items-center bg-neutral-200 p-4 pt-20">
        <div className="flex flex-col w-full max-w-xs">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Mi Cuenta</h2>
            <hr className="border-t border-neutral-400 my-4 mx-4" />
            <p className="text-gray-600">Nombre y Apellido | Juan Perez</p>
            <p className="text-gray-600">Email: juanperez@mail.com</p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-4 pb-10">
              <button className="flex justify-center items-center w-full bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 transition-transform hover:scale-105 hover:bg-neutral-50">
                Editar mis datos
              </button>
              <button className="flex justify-center items-center w-full bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 transition-transform hover:scale-105 hover:bg-neutral-50">
                Cambiar contraseña
              </button>
            </div>
            <hr className="border-t border-neutral-400 my-4 mx-4" />
            <div>
              <h1 className="flex justify-center text-2xl font-bold">
                Historial de compras
              </h1>
            </div>
            <hr className="border-t border-neutral-400 my-4 mx-4" />
            <div className="overflow-y-auto max-h-[calc(70vh-250px)] pb-16">
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-full max-w-xs">
          <hr className="border-t md:hidden border-neutral-400 my-4 mx-4" />
          <div className="md:mt-0 lg:mt-10 ">
            <h1 className="flex justify-center text-2xl font-bold">
              Favoritos
            </h1>
          </div>
          <hr className="border-t border-neutral-400 my-4 mx-4" />
          <div className="overflow-y-auto max-h-[calc(70vh-250px)] md:max-h-[calc(100vh-250px)] pb-16">
            <GameListComponent />
            <GameListComponent />
            <GameListComponent />
            <GameListComponent />
            <GameListComponent />
            <GameListComponent />
          </div>
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <button className="flex justify-center items-center   bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 transition-transform hover:scale-105 hover:bg-neutral-50">
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default UserDasboard;
