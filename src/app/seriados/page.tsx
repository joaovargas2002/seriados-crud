'use client';
import Layout from "../components/seriados/layout";
import Seriado from "../core/Seriado";
import Tabela from "../components/seriados/tabela";
import Botao from "../components/seriados/botao";
import Formulario from "../components/seriados/formulario";

function seriadoSelecionado(seriado: Seriado) {
    console.log(seriado.nome)
}

function seriadoExcluido(seriado: Seriado) {
    console.log(seriado.nome)
}

export default function Seriados() {

    const seriados = Seriado.geraSeriadosMock()

    return (
        <div className={`flex justify-center items-center h-screen
    bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
    text-white`}>
            <Layout titulo="Cadastro de Eventos">
                <div className="flex justify-end mb-4">
                    <Botao cor="bg-gradient-to-r from-green-500 to-green-700">
                        Novo Evento
                    </Botao>
                </div>
                <Tabela seriados={seriados}
                    seriadoSelecionado={seriadoSelecionado}
                    seriadoExcluido={seriadoExcluido}></Tabela>
                    <Formulario seriado={seriados[0]}></Formulario>
            </Layout>
        </div>
    )
}