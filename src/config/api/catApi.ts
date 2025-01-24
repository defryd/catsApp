import axios from "axios";

export const catApi = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {  "x-api-key": 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr' }
    
});