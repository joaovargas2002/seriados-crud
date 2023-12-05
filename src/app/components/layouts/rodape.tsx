import React from "react";

const Rodape = () => {
    return (
        <footer className="bg-gray-800 text-white py-2 text-center">
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left
        sm:justify-between py-2 px-6 bg-gray-800 text-stone-100 shadow
        sm:items-baseline w-full">
              <div className="mb-2 sm:mb-0">Review de Seriados</div>
              <div className="mb-2 sm:mb-0">2024</div>
            </nav>
        </footer>
    );
};

export default Rodape;