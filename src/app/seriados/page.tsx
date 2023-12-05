'use client';
import Botao from "@/app/components/seriados/botao";
import Formulario from "@/app/components/seriados/formulario";
import Layout from "@/app/components/seriados/layout";
import Tabela from "@/app/components/seriados/tabela";
import Seriado from "@/app/core/Seriado";
import { atualizarSeriado, cadastrarSeriado, excluirSeriado, fetchSeriados } from "@/service/seriadoService";
import { useEffect, useState } from "react";

export default function Seriados() {

  const [seriado, setSeriado] = useState<Seriado>(Seriado.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const [seriados, setSeriados] = useState<Seriado[]>([]);

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadSeriados = async () => {
        try {
          const dados = await fetchSeriados();
          setSeriados(dados);
        } catch (error) {
          console.error("Erro ao buscar seriados:", error);
        }
      }

      loadSeriados();
    }
  }, [visivel]);


  function seriadoSelecionado(seriado: Seriado) {
    setSeriado(seriado)
    setVisivel('form')
  }

  async function seriadoExcluido(seriado: Seriado) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir este seriado?");
    if (confirmacao) {
      try {
        if (seriado.id !== null) {
          await excluirSeriado(seriado.id);
        } else {
          console.error("seriadoId é null!");
        }
        setSeriados(prevSeriados => prevSeriados.filter(ev => ev.id !== seriado.id));
      } catch (error) {
        console.error("Erro ao excluir seriado:", error);
      }
    }
  }

  function salvarOuAlterarSeriado(seriado: Seriado) {
    if (seriado.id) {
      alterarSeriado(seriado)
    } else {
      salvarSeriado(seriado)
    }
  }

  async function alterarSeriado(seriado: Seriado) {
    try {
      const seriadoAtualizado = await atualizarSeriado(seriado);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar seriado:", error);
    }
  }

  async function salvarSeriado(seriado: Seriado) {
    try {
      const novoSeriado = await cadastrarSeriado(seriado);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar seriado:", error);
    }
  }

  function novoSeriado() {
    setSeriado(Seriado.vazio())
    setVisivel("form")
  }

  return (
    <div className={`
     flex justify-center items-center h-screen
     bg-gradient-to-bl from-blue-900 via-purple-900 to-purple-500
     text-white`}>
      <Layout titulo="Cadastro de seriados">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
                onClick={() => novoSeriado()}>
                Novo seriado
              </Botao>
            </div>
            <Tabela seriados={seriados}
              seriadoSelecionado={seriadoSelecionado}
                seriadoExcluido={seriadoExcluido}></Tabela>
          </>
        ) : (
          <Formulario seriado={seriado}
            seriadoMudou={salvarOuAlterarSeriado}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}