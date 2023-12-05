import React from "react";
import Botao from "../seriados/botao";

export default function Navbar (props: any) {
    return (
        <>
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left
        sm:justify-between py-4 px-6 bg-gray-800 text-stone-100 shadow
        sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">Review de Seriados</div>
        <div>
            <a href="/" className="text-lg no-underline hover:text-amver-300 ml-2">
            <Botao cor="bg-gradient-to-r from-blue-700 to-blue-900">
                Home
                </Botao>
                </a>
                <a href="/seriados" className="text-lg no-underline hover:text-amver-300 ml-2">
            <Botao cor="bg-gradient-to-r from-purple-700 to-purple-900">
                Seriados
                </Botao>
                </a>
                </div>
                </nav>
        </>);}
    