import { useState, useEffect } from 'react';
import MoviesView from './MoviesView';
import * as HomePageApi from '../services/ApiGenerator';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchFilm = () => {
      HomePageApi.findFilms(searchQuery).then(res => {
        setFilms(prevFilm => [...prevFilm, ...res]);
      });
    };

    fetchFilm();
  }, [searchQuery]);

  const changeQuery = query => {
    setSearchQuery(query);
    setFilms([]);
  };
  return (
    <>
      <MoviesView onSubmit={changeQuery} />
    </>
  );
};

export default MoviesPage;
