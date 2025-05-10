import axios from "axios"

export const API_URL = "http://localhost:8080/api";

export const api=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
    }
});

// export const api_key = "f415d8c98f8395e1ac57bd596370154f";