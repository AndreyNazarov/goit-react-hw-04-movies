import axios from 'axios';

export function fetchFilmsTrends() {
  return axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=333ea31ca01b4ec8ead6d98f3e2d2283',
  );
}
export function findFilms(query) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=333ea31ca01b4ec8ead6d98f3e2d2283&query=${query}`,
  );
}
