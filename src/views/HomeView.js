import { useState, useEffect } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import * as HomePageApi from '../services/ApiGenerator';

export default function HomeView() {
  // const match = useRouteMatch();

  const [page, setPage] = useState(null);
  useEffect(() => {
    HomePageApi.fetchFilmsTrends()
      .then(res => res.data)
      .then(({ results }) => {
        setPage(results);
      });
  }, []);

  return (
    <>
      <h1>Films</h1>
      <ul>
        {page &&
          page.map(link => (
            <li key={link.id}>
              <Link to="">{link.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
