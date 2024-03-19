import GameListComponent from "../components/GameListComponent";
import { useUser } from "../context/UserContext";
const Account = () => {
  const { user } = useUser();
  return (
    <div className=" bg-neutral-200 p-4 pt-6 md:pt-20">
      <div className="flex md:flex-col md:justify-center md:pt-0 items-center bg-neutral-200 p-4 pt-20">
        <div className="flex justify-center items-center w-full max-w-xs">
          <div className="text-center pt-8">
            <h2 className="text-2xl font-bold text-gray-800">Mi Cuenta</h2>
            <hr className="border-t border-neutral-400 my-4 mx-4" />
            <p className="text-gray-600">
              Nombre y Apellido | {user.firstName} {user.lastName}
            </p>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-36">
          <div className=" flex flex-col w-full max-w-xs">
            <hr className="border-t md:hidden border-neutral-400 my-4 mx-4" />
            <div className="md:mt-0 lg:mt-10 ">
              <h1 className="flex justify-center text-2xl font-bold">
                Historial de compras
              </h1>
            </div>
            <hr className="border-t border-neutral-400 my-4 mx-4" />
            <div className="overflow-y-auto max-h-96 pb-16">
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
              <GameListComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
