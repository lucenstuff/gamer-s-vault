import { MdSearch, MdClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { searchProducts } from "../services/apiConnection";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={searchRef}>
      <button
        className="hover:text-neutral-950 pt-2"
        aria-hidden="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdSearch />
      </button>

      {isOpen && (
        <div className="search-bar-container absolute top-0 w-11/12 md:w-auto left-1/2 transform -translate-x-1/2 pt-2 text-lg">
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
            <button
              className="absolute inset-y-0 right-0 pr-3 bg-neutral-100 rounded-lg flex items-center "
              onClick={() => {
                setIsOpen(false);
                setInput("");
                setResults([]);
              }}
            >
              <MdClose size={20} className="hover:scale-110 hover:text-black" />
            </button>
          </div>
          {input.length > 0 && (
            <div className="absolute bg-neutral-100 p-6 h-96 w-full mt-4 rounded-lg">
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
    </div>
  );
}
