import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

const API_KEY = 'aa5996a21ad59fc86cd58d6c7abc6ee7';
const PARAMS = 'page=1';
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
    try {
        return async dispatch => {
            const res = await axios.get(`${BASE_URL}`);

            if (res.data) {
                dispatch({
                    type: GET_MOVIES,
                    payload: res.data.results,
                });
            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (err) {
        console.log(err);
    }
};