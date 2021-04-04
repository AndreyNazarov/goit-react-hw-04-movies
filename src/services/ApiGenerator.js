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

export function filmDetails(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=333ea31ca01b4ec8ead6d98f3e2d2283&language=en-US`,
  );
}
export function fetchCast(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=333ea31ca01b4ec8ead6d98f3e2d2283&language=en-US`,
  );
}
