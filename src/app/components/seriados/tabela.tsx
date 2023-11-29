import Seriado from "@/app/core/Seriado";

interface TabelaProps {
    seriados: Seriado[]
}

export default function Tabela(props: TabelaProps) {
    function renderHeader() {
        return (
            <tr>
                <th>id</th> <th>nome</th> <th>genero</th> <th>avaliacao</th>
                <th>dataLancamento</th> <th>descricao</th>
            </tr>
        )
    }
    function renderDados() {
        return props.seriados?.map((seriado, i) => {
            return (<tr key={seriado.id}>
                <td>{seriado.id}</td> <td>{seriado.nome}</td> <td>{seriado.genero}</td>
                <td>{seriado.avaliacao}</td> <td>{seriado.dataLancamento}</td> <td>{seriado.descricao}</td>
            </tr>)
        })
    }
    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )

}