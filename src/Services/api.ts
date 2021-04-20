import axios, { AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from "axios";


const config: AxiosRequestConfig = {
    baseURL: 'https://discordapp.com/api/',
};
const discordApi: AxiosInstance = axios.create(config);

const devtoApi: AxiosInstance = axios.create({
        baseURL: 'https://dev.to/api/'
    })

const habiticaApi : AxiosInstance = axios.create({
    baseURL: 'https://habitica.com/api/v3'
})


export default {
    discordApi,
    devtoApi,
    habiticaApi
};