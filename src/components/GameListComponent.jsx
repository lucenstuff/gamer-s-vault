import { IoMdTrash } from "react-icons/io";
import PropTypes from "prop-types";

const GameListComponent = ({ id, name, price, img }) => {
  return (
    <div className="w-full text-neutral-800">
      <div className="flex justify-start px-4 py-2">
        <div className="w-1/2 rounded-md">
          <img
            className="rounded-md shadow-md"
            src={img}
            alt={`Cover of the game ${name}`}
          />
        </div>
        <div className="px-4 space-y-4">
          <div className="flex items-start">
            <h3 className="truncate">{name}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h3>{price}</h3>
            <button>
              <IoMdTrash size={24} />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t border-neutral-400 my-4 mx-4" />
    </div>
  );
};

GameListComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default GameListComponent;