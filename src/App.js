import { useState } from "react";
import "./App.css";

// Components
import Alphabet from "./components/containers/Alphabet";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="bg-slate-100 text-gray-900 min-h-screen flex flex-col">
      <header className="text-center py-4 bg-cyan-600 text-white font-bold text-3xl">
        Palabritas
      </header>

      <div className="container mx-auto my-16 flex-1">
        <h2 className="text-center mb-8 text-2xl">¿Qué letras conoces?</h2>

        <Alphabet setSearchResults={setSearchResults} />

        {searchResults.length > 0 && (
          <>
            <h2 className="mt-12 mb-8 text-center text-2xl">
              Aquí tienes tus palabritas
            </h2>
            <div className="my-4 flex flex-wrap justify-center">
              {searchResults.map((word, index) => (
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
      </div>
    </div>
  );
};

export default App;
