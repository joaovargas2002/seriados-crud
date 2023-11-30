import Seriado from "@/app/core/Seriado"
import Entrada from "./entrada"
import { useState } from "react";
import { stringParaEntradaDeData } from "@/utils/converters";
import Botao from "./botao";

interface FormularioProps {
    seriado: Seriado
}

export default function Formulario(props: FormularioProps) {
    const id = props.seriado?.id
    const [nome, setNome] = useState(props.seriado?.nome)
    const [genero, setGenero] = useState(props.seriado?.genero)
    const [avaliacao, setAvaliacao] = useState(props.seriado?.avaliacao)
    const [dataLancamento, setdataLancamento] = useState(props.seriado?.dataLancamento)
    const [descricao, setDescricao] = useState(props.seriado?.descricao)

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Genero" valor={genero} onChange={setGenero}></Entrada>
            <Entrada texto="Avaliacao" valor={avaliacao} onChange={setAvaliacao}></Entrada>
            <Entrada texto="DataLancamento" tipo="date" valor={stringParaEntradaDeData (dataLancamento)}
                onChange={setdataLancamento}></Entrada>
            <Entrada texto="Descricao" valor={descricao} onChange={setDescricao}></Entrada>
            <div className="flex-justify-end mt-5" >
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700" >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
