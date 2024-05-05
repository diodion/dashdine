'use client';

import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

interface UseApiReturn {
  api: AxiosInstance
}
interface UseApi {
  (): UseApiReturn
}

const useApi: UseApi = () => {
  const api = axios.create({
    baseURL: 'https://dashdine-1hvj.onrender.com/'
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  })

  return {
    api
  }
}

export default useApi;