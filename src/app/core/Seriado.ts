import { stringParaEntradaDeData } from "@/utils/converters";

export default class Seriado {
    id: number | null;
    nome: string;
    genero: string;
    dataLancamento: string;
    descricao: string;

    constructor (id: number | null, nome: string, genero: string,
         dataLancamento: string, descricao: string) {
            this.id = id;
            this.nome = nome;
            this.genero = genero;
            this.dataLancamento = dataLancamento;
            this.descricao = descricao;
        }

        static geraSeriadosMock() {
            return [ 
            ]
           }
        
        static vazio(): Seriado {
            return new Seriado(null, "", "", stringParaEntradaDeData(""),"");
        }
}