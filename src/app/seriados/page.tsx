import Layout from "../components/seriados/layout"

export default function Seriados() {
    return (
        <div className={ `
         flex justify-center items-center h-screen
         bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
         text-white`}>
            <Layout titulo="Cadastro de Seriados">Conteúdo</Layout>
        </div>
    )
}

