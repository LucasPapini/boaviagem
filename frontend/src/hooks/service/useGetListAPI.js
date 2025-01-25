import api_v1 from "../../services/config";

const useGetListAPI = () => {

  const listaAeropostos = async () => {
    const { data } = await api_v1.get(`/list/all/aeroportos`)
    return data
  }

  const listaRotas = async () => {
    const { data } = await api_v1.get(`/list/all/aeroportos`)
    return data
  }

  return {
    listaAeropostos,
    listaRotas
  }
}


export default useGetListAPI
