import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as HomePageApi from '../services/ApiGenerator';

export default function HomeView() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchFilm = () => {
      HomePageApi.fetchFilmsTrends()
        .then(res => res.data)
        .then(({ results }) => {
          setPage(results);
        });
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
    </>
  );
}
