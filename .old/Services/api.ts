import axios, { AxiosInstance } from "axios";


const discordApi: AxiosInstance = axios.create({
    baseURL: 'https://discordapp.com/api/',
});

const devtoApi: AxiosInstance = axios.create({
        baseURL: 'https://dev.to/api/'
    })

const habiticaApi : AxiosInstance = axios.create({
    baseURL: 'https://habitica.com/api/v3'
})


export {
    discordApi,
    devtoApi,
    habiticaApi
};