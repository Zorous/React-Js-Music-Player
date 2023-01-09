import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "d2388979405849d2bcf21d088fdc85b8";
const REDIRECT_URI = "https://zorous-music-player.netlify.app/";
// const scopes = ["user-library-read", "playlist-read-private"];
const RESPONSE_TYPE = "token"


export const loginEndpoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

const apiClient = axios.create({
    baseURL : "https://api.spotify.com/v1/",
});

export const setClientToken = (token) =>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
}

export default apiClient;
