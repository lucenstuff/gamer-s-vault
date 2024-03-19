import { useState } from "react";
import propType from "prop-types";
import { MdSearch } from "react-icons/md";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="bg-neutral-100 px-2 py-2 rounded-lg flex justify-center  items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar Productos..."
          className="focus:outline-none w-80 bg-neutral-100"
        />
        <button>
          <MdSearch size={24} />
        </button>
      </div>
    </form>
  );
};

Searchbar.propTypes = {
  onSearch: propType.func.isRequired,
};

export default Searchbar;
