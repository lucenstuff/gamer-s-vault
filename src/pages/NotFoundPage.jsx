const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl mb-8 text-gray-600">
        Lo sentimos, la página que estás buscando no ha sido encontrada.
      </p>
      <button
        href=""
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFoundPage;
