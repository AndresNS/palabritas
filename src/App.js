import { useEffect, useState } from "react";

// Components
import Alphabet from "./components/containers/Alphabet";
import Pagination from "./components/modules/Pagination";

const pageSize = 100;

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPageResults, setCurrentPageResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setPage(1);
    setCurrentPageResults(paginateResults(searchResults, pageSize, 1));
    setTotalPages(Math.ceil(searchResults.length / pageSize));
  }, [searchResults]);

  useEffect(() => {
    setCurrentPageResults(paginateResults(searchResults, pageSize, page));
  }, [page]);

  const paginateResults = (results, pageSize, pageNumber) => {
    return results.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  return (
    <div className="bg-slate-100 text-gray-900 min-h-screen flex flex-col">
      <header className="text-center py-4 bg-cyan-600 text-white font-bold text-3xl">
        Palabritas
      </header>

      <div className="container mx-auto my-16 flex-1">
        <h2 className="text-center mb-8 text-2xl">¿Qué letras conoces?</h2>

        <Alphabet setSearchResults={setSearchResults} />

        {currentPageResults.length > 0 && (
          <>
            <h2 className="mt-12 mb-8 text-center text-2xl">
              Aquí tienes tus palabritas
            </h2>
            <div className="my-4 flex flex-wrap justify-center">
              {currentPageResults.map((word, index) => (
                <div
                  className="bg-white px-4 py-2 rounded mx-2 my-1"
                  key={index}
                >
                  {word}
                </div>
              ))}
            </div>
          </>
        )}

        {totalPages > 1 && (
          <>
            <h2 className="text-center mt-16 mb-6 text-2xl">Páginas</h2>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
