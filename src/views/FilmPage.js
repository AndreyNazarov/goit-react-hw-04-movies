import { useState, useEffect, lazy, Suspense } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Loader from 'react-loader-spinner';
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));

export default function FilmPage() {
  const { id } = useParams();
  const [films, setFilms] = useState(null);
  const { url, path } = useRouteMatch();
  const urlImg = 'https://image.tmdb.org/t/p/w500/';
  let history = useHistory();
  useEffect(() => {
    const fetchFilm = () => {
      HomePageApi.filmDetails(id).then(({ data }) => {
        setFilms(data);
      });
    };

    fetchFilm();
  }, [id]);

  return (
    <>
      <button type="button" onClick={history.push('/')}>
        Go home
      </button>
      {films && (
        <>
          <h1>{films.title}</h1>
          <img
            width="300"
            height="320"
            src={`${urlImg}${films.poster_path}`}
            alt={films.title}
          />
          <h3>User Score: {films.vote_average * 10 + '%'}</h3>

          <h3>Overview:</h3>
          <div style={{ width: 800 }}> {films.overview}</div>
          <h3>Genres</h3>
          {films.genres.map(film => (
            <p key={uuidv4()}>{film.name}</p>
          ))}

          <hr />
          <h2>Additional information</h2>

          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<Loader />}>
            <Route path={`${path}/cast`}>
              <Cast id={id} />
            </Route>
            <Route path={`${path}/reviews`}>
              <Review id={id} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
