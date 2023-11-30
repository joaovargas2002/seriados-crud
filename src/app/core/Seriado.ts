import { stringParaEntradaDeData } from "@/utils/converters";

export default class Seriado {
    id: number | null;
    nome: string;
    genero: string;
    avaliacao: string;
    dataLancamento: string;
    descricao: string;

    constructor (id: number | null, nome: string, genero: string,
        avaliacao: string, dataLancamento: string, descricao: string) {
            this.id = id;
            this.nome = nome;
            this.genero = genero;
            this.avaliacao = avaliacao;
            this.dataLancamento = dataLancamento;
            this.descricao = descricao;
        }

        static geraSeriadosMock() {
            return [ new Seriado(1, "Breaking Bad", "Drama", "5", "2008", "MELHOR SERIE DA HISTORIA"
            ), new Seriado(2, "Bojack Horseman", "Animação", "3", "2014", "MAIS OU MENOS")
            ]
           }
        
        static vazio(): Seriado {
            return new Seriado(null, "", "", "", stringParaEntradaDeData(""),"");
        }
}