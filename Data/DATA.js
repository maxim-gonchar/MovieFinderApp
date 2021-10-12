import { getMovies, isFetching, chooseMovies } from "../Redux/Reducer"

const KEY = "api_key=4025ed37e3e09fa8c866a4130596a09a";
const BASE_URL = "https://api.themoviedb.org/3"
const POPULAR_MOVIE = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + KEY;
export const fetchMovies = () => {
    return (dispatch) => {
        try {
            // dispatch(isFetching(true))
            fetch(POPULAR_MOVIE)
                .then((response) => response.json())
                .then(json => dispatch(getMovies(json.results)))
        } catch (err) {
            console.log(err)
        }
    }
}

export const fetchChooseMovies = (link) => {
    return (dispatch) => {
        try {
            fetch(link)
                .then((response) => response.json())
                .then(json => dispatch(chooseMovies(json.results)))
        } catch (err) {
            console.log(err)
        }
    }
}