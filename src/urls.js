import { API_KEY } from "./Constants/constants";
export const trending =`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const originals =`discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;