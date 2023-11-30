'use client';
import Layout from "../components/seriados/layout";
import Seriado from "../core/Seriado";
import Tabela from "../components/seriados/tabela";
import Botao from "../components/seriados/botao";
import Formulario from "../components/seriados/formulario";
import { useState } from "react";



export default function Seriados() {

    function novoSeriado() {
        setSeriado(Seriado.vazio())
        setVisivel("form")
    }

    function seriadoSelecionado(seriado: Seriado) {
        setSeriado(seriado)
        setVisivel('form')

    }

    function seriadoExcluido(seriado: Seriado) {
        console.log(seriado.nome)
    }

    function salvarSeriado(seriado: Seriado) {
        console.log(seriado)
        setVisivel("tabela")
    }

    const [seriado, setSeriado] = useState<Seriado>(Seriado.vazio())

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const seriados = Seriado.geraSeriadosMock()

    return (
        <div className={`flex justify-center items-center h-screen
    bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
    text-white`}>
            <Layout titulo="Cadastro de Eventos">
                {visivel === 'tabela' ? (

                    <> <div className="flex justify-end mb-4">
                        <Botao cor="bg-gradient-to-r from-green-500 to-green-700"
                            onClick={() => novoSeriado()}>
                            Novo Evento
                        </Botao>
                    </div>
                        <Tabela seriados={seriados}
                            seriadoSelecionado={seriadoSelecionado}
                            seriadoExcluido={seriadoExcluido}></Tabela>
                    </>
                ) : (
                    <Formulario seriado={seriado}
                        seriadoMudou={salvarSeriado}
                        cancelado={() => setVisivel('tabela')} />)}
            </Layout>
        </div>
    )
}