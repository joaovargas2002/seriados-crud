import Seriado from "@/app/core/Seriado";

let seriadosList: Seriado[] = [
 
]

let proximoId = seriadosList.length + 1;

export const fetchSeriados = async (): Promise<Seriado[]> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return seriadosList;
    } catch (error) {
      throw new Error('Erro ao buscar seriados');
    }
  };
  
  export const cadastrarSeriado = async (novoSeriado: Seriado): Promise<Seriado> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      novoSeriado.id = proximoId++;
      seriadosList.push(novoSeriado);
  
      return novoSeriado;
    } catch (error) {
      console.error("Erro ao cadastrar seriado:", error);
      throw error;
    }
  };
  
  export const atualizarSeriado = async (seriadoAtualizado: Seriado): Promise<Seriado> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      const index = seriadosList.findIndex((seriado) => seriado.id === seriadoAtualizado.id);
  
      if (index !== -1) {
        seriadosList[index] = seriadoAtualizado;
        return seriadoAtualizado;
      } else {
        throw new Error('Seriado não encontrado');
      }
    } catch (error) {
      console.error("Erro ao atualizar seriado:", error);
      throw error;
    }
  };
  
  export const excluirSeriado = async (id: number): Promise<void> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      seriadosList = seriadosList.filter((seriado) => seriado.id !== id);
    } catch (error) {
      console.error("Erro ao excluir seriado:", error);
      throw error;
    }
  };
