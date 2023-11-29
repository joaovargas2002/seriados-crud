import Layout from "@/app/components/seriados/layout"
import Tabela from "@/app/components/seriados/tabela"
import Seriado from "@/app/core/Seriado"

export default function Seriados() {
    const seriados = Seriado.geraSeriadosMock()

    return (
        <Tabela seriados={seriados}/>
    )
}