import axios from "axios";

export const TMDB_API_KEY = "f415d8c98f8395e1ac57bd596370154f";

export const tmdbapi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key : TMDB_API_KEY,
    }
});