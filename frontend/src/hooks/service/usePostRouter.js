import api_v1 from "../../services/config";

const usePostRouter = () => {

  const sendRouter = async ({ origem, destino }) => {
    const { data } = await api_v1.post(`/rotas`, { origem, destino });
    return data
  }

  const create = async ({ destino, origem, valor }) => {
    const { data } = await api_v1.post(`/create`, { destino, origem, valor });
    return data;
  }

  return {
    sendRouter,
    create
  }
}

export default usePostRouter
