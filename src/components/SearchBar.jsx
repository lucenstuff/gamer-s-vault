import { useState } from "react";
import propType from "prop-types";

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
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-grow p-2  w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out sm:max-w-xs lg:max-w-sm"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSearch: propType.func.isRequired,
};

export default Searchbar;
