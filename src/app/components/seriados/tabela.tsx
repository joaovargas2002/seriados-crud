import Seriado from "@/app/core/Seriado";
import { IconeEdicao, IconeLixo } from "../icones/tabela";
import Seriados from "@/app/seriados/page";

interface TabelaProps {
    seriados: Seriado[]
    seriadoSelecionado?: (seriado: Seriado) => void
    seriadoExcluido?: (seriado: Seriado) => void
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.seriadoSelecionado || props.seriadoExcluido
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Genero</th>
                <th className="text-left p-3">Avaliação</th>
                <th className="text-left p-3">Ano de Lançamento</th>
                <th className="text-left p-3">Descrição</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }
    function renderDados() {
        return props.seriados?.map((seriado, i) => {
            return (<tr key={seriado.id}
                className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                <td className="text-left p-3">{seriado.id}</td>
                <td className="text-left p-3">{seriado.nome}</td>
                <td className="text-left p-3">{seriado.genero}</td>
                <td className="text-left p-3">{seriado.avaliacao}</td>
                <td className="text-left p-3">{seriado.dataLancamento}</td>
                <td className="text-left p-3">{seriado.descricao}</td>
                {exibirAcoes ? renderizarAcoes(seriado) : false}
            </tr>)
        })
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100
                bg-gradient-to-r from-indigo-500 to-indigo-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
    function renderizarAcoes(seriado: Seriado) {
        return (
            <td className="flex justify-center">
                {props.seriadoSelecionado ? (<button onClick={() => props.seriadoSelecionado?.(seriado)}
                    className={`flex justify-center items text-green-600
                        rounded-full p-2 m-1 hover:bg-gray-100`}>{IconeEdicao}</button>)
                    : false}
                {props.seriadoExcluido
                    ? (<button onClick={() => props.seriadoExcluido?.(seriado)}
                        className={`flex justify-center items text-red-600
                        rounded-full p-2 m-1 hover:bg-gray-100`}>{IconeLixo}</button>)
                    : false}

            </td>)
    }
}
