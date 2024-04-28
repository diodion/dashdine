'use client';

import useApi from "./use-api"

interface UseAuthReturn {
  login: (email: string, password: string) => Promise<boolean>,
  logout: () => void
}
interface UseAuth {
  (): UseAuthReturn
}

const useAuth: UseAuth = () => {
  const { api } = useApi();

  const login: UseAuthReturn['login'] = async (email, senha) => {
    try {
      const { data } = await api.post('/login/web', { email, senha });


      localStorage.setItem('token', data.accessToken)
      return true;
    } catch (error) {
      return false;
    }
  }

  const logout: UseAuthReturn['logout'] = () => {
    localStorage.clear();
    window.location.href = '/login'
  }

  return {
    login,
    logout
  }
}

export default useAuth;