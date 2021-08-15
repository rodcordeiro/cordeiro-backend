import axios, { AxiosInstance } from "axios";


const discordApi: AxiosInstance = axios.create({
    baseURL: 'https://discord.com/api/',
});

const devtoApi: AxiosInstance = axios.create({
        baseURL: 'https://dev.to/api/'
    })

const habiticaApi : AxiosInstance = axios.create({
    baseURL: 'https://habitica.com/api/v3'
})

const GHAuth : AxiosInstance  = axios.create({
    baseURL: "https://github.com/login/oauth",
})
const GHapi : AxiosInstance  = axios.create({
    baseURL: "https://api.github.com",
})
const habiAPI : AxiosInstance = axios.create({
    baseURL: "https://habitica.com/api/v3"
})

export {
    discordApi,
    devtoApi,
    habiticaApi,
    GHAuth,
    GHapi,
    habiAPI,
};