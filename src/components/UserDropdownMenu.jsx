import React from "react";
import { MdPerson } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function UserDropdownMenu({ isUserDropdownOpen }) {
  const { logout } = useUser();

  return (
    <div>
      {isUserDropdownOpen && (
        <div className="absolute w-42 text-sm font-semibold z-20 top-9 right-0 flex shadow-neutral-700 ">
          <div className="relative p-2 bg-neutral-400 max-w-md m-auto flex-col flex shadow-lg rounded-2xl ">
            <div className="flex flex-col gap-4">
              <Link
                onClick={() => isUserDropdownOpen(false)}
                to={"/account"}
                className="flex gap-3 hover:bg-neutral-300 ease-out duration-300 rounded-md p-1"
              >
                <MdPerson size={24} />
                <span>Mi cuenta</span>
              </Link>
              <Link
                onClick={() => logout() && isUserDropdownOpen(false)}
                className="flex gap-3 hover:bg-neutral-300 ease-out duration-300 rounded-md p-1"
              >
                <IoLogOut size={24} />
                <span>Cerrar Sesión</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDropdownMenu;
