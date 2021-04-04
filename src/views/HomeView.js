import { useState, useEffect } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import * as HomePageApi from '../services/ApiGenerator';
import Loader from '../Loader/Loader';

export default function HomeView() {
  const { url } = useRouteMatch();

  const [page, setPage] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchFilm = () => {
      setLoader(true);
      HomePageApi.fetchFilmsTrends()
        .then(res => res.data)
        .then(({ results }) => {
          setPage(results);
        })
        .finally(() => setLoader(false));
    };
    fetchFilm();
  }, []);

  return (
    <>
      <h1>Films</h1>
      <ul>
        {page &&
          page.map(link => (
            <li key={link.id}>
              <Link to={`movies/${link.id}`}>{link.title}</Link>
            </li>
          ))}
      </ul>
      {loader && <Loader />}
    </>
  );
}
