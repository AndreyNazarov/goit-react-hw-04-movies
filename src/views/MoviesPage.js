import { useState, useEffect } from 'react';
import MoviesView from './MoviesView';
import * as HomePageApi from '../services/ApiGenerator';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Loader from '../Loader/Loader';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchFilm = () => {
      setLoader(true);
      HomePageApi.findFilms(searchQuery)
        .then(({ data }) => {
          setFilms(prevFilm => [...prevFilm, ...data.results]);
        })
        .finally(() => setLoader(false));
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
      <ul>
        {films &&
          films.map(film => (
            <li key={film.id}>
              <NavLink to={`${url}/${film.id}`}>{film.title}</NavLink>
            </li>
          ))}
      </ul>
      {loader && <Loader />}
    </>
  );
};

export default MoviesPage;
