import { Link } from "react-router-dom";

const SalesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">ERROR 404</h1>
      <p className="text-xl mb-8 text-gray-600">
        Lo sentimos, la página que estás buscando no ha sido encontrada.
      </p>
      <Link to="/">
        <button className="px-4 py-2 bg-[#a3a3a3] text-white rounded hover:bg-[#818181]">
          Volver al inicio
        </button>
      </Link>
      <img
        src="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1000/q_auto/f_auto/landmannalaugar_iceland.jpg"
        alt=""
      />
    </div>
  );
};

export default SalesPage;
