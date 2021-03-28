const axios = require('axios');

const discordApi  = axios.create({
        baseURL: 'https://discordapp.com/api/'
    })
const devtoApi = axios.create({
        baseURL: 'https://dev.to/api/'
    })


export default {
    discordApi,
    devtoApi
};