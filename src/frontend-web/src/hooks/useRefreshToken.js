import { axiosPrivate } from "../api/Axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosPrivate.get(process.env.REACT_APP_API_REFRESH);

    setAuth(prev => {
      return {
        ...prev,
        // Atualizar com os campos do hook de auth
        cargos: response.data.cargos,
        accessToken: response.data.accessToken,
      }
    })
    return response.data.accessToken;
  }  
  return refresh;
}

export default useRefreshToken