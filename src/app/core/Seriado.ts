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

}