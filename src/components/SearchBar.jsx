import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { searchProducts } from "../services/apiConnection";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = async (value) => {
    setInput(value);
    try {
      const searchResults = await searchProducts(value);
      setResults(searchResults.slice(0, 10));
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar Juegos..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="focus:outline-none w-80 md:w-96 bg-neutral-100 p-2 rounded-lg pl-10"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MdSearch size={20} />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3"></div>
      </div>
      {input.length > 0 && (
        <div className="absolute bg-neutral-100 p-2 h-96 w-80 md:w-96 mt-2 rounded-lg">
          {results.length > 0 && (
            <div>
              <div className="font-bold">Resultados de búsqueda:</div>
              <ul>
                {results.map((result) => (
                  <li key={result.id}>{result.ProductName}</li>
                ))}
              </ul>
            </div>
          )}
          {results.length === 0 && input.length > 0 && (
            <div>No se encontraron resultados.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
