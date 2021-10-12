const GET_MOVIES = "GET_MOVIES";
const IS_FETCHING = "IS_FETCHING";
const CHOOSE_MOVIES = "CHOOSE_MOVIES"
const initialState = {
  movies: [],
  isFetching: true,
  chooseMovies: [],
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload, isFetching: false }
    case IS_FETCHING:
      return { ...state, isFetching: action.payload }
    case CHOOSE_MOVIES:
      return { ...state, chooseMovies: action.payload }
    default:
      return state
  }
}
export const getMovies = (payload) => ({ type: GET_MOVIES, payload });
export const chooseMovies = (payload) => ({ type: CHOOSE_MOVIES, payload })
export const isFetching = (payload) => ({ type: IS_FETCHING, payload });