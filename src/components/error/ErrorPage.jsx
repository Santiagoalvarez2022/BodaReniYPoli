export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Ha ocurrido un error con el sitio web</h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Por favor, contacte a <span className="font-medium">Milena</span> y <span className="font-medium">Joaquin</span>.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
