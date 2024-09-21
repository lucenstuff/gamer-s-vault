import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchProducts } from "../services/apiConnection";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = async (value) => {
    setInput(value);
    try {
      const searchResults = await searchProducts(value);
      setResults(searchResults.slice(0, 8));
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  return (
    <>
      <button
        className="hover:text-neutral-950"
        aria-hidden="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdSearch />
      </button>

      {isOpen && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pt-2 text-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar Juegos..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              className="focus:outline-none w-full md:w-96 bg-neutral-100 p-2 rounded-lg pl-10"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdSearch size={20} />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3"></div>
          </div>
          {input.length > 0 && (
            <div className="absolute bg-neutral-100 p-6 h-96 w-full mt-2 rounded-lg">
              {results.length > 0 ? (
                <div>
                  <div className="font-bold pb-2">Resultados de búsqueda:</div>
                  <ul>
                    {results.map((result) => (
                      <Link
                        to={`/games/${result.ProductID}`}
                        key={result.ProductID}
                        onClick={() => setInput("")}
                      >
                        <li className="hover:bg-neutral-300 rounded-lg py-1 flex gap-2">
                          <img
                            className="w-8 h-8 rounded-sm"
                            src={result.ImageURL}
                            alt={result.ProductName}
                          />
                          {result.ProductName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>No se encontraron resultados.</div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
