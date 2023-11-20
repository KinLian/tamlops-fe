import axios, { AxiosInstance } from "axios";

export const axiosGet: AxiosInstance = axios.create({
  method: "GET",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const axiosPost: AxiosInstance = axios.create({
  method: "POST",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});