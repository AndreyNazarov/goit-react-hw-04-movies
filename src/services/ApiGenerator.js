import axios from 'axios';

const keyApi = '333ea31ca01b4ec8ead6d98f3e2d2283';
const basicURL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = basicURL;
axios.defaults.params = {
  api_key: keyApi,
};

export function fetchFilmsTrends() {
  return axios.get('trending/movie/day');
}

export function findFilms(query) {
  return axios.get(`search/movie?query=${query}`);
}

export function filmDetails(id) {
  return axios.get(`movie/${id}?language=en-US`);
}
export function fetchCast(movieId) {
  return axios.get(`movie/${movieId}/credits?language=en-US`);
}
export function fetchReviews(movieId) {
  return axios.get(`movie/${movieId}/reviews?language=en-US`);
}
