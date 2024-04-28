import axios, { AxiosInstance } from "axios"

interface UseApiReturn {
  api: AxiosInstance
}
interface UseApi {
  (): UseApiReturn
}

const useApi: UseApi = () => {
  const api = axios.create();

  return {
    api
  }
}

export default useApi;