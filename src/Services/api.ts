import { AxiosResponse } from "axios";

const axios = require('axios');

const discordApi: AxiosResponse  = axios.create({
        baseURL: 'https://discordapp.com/api/'
    })
const devtoApi = axios.create({
        baseURL: 'https://dev.to/api/'
    })

const habiticaApi = axios.create({
    baseURL: 'https://habitica.com/api/v3'
})


export default {
    discordApi,
    devtoApi,
    habiticaApi
};