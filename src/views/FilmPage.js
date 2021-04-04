import { useState, useEffect } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cast from './Cast';
import Review from './Review';
import { v4 as uuidv4 } from 'uuid';

export default function FilmPage() {
  const { id } = useParams();
  const [films, setFilms] = useState(null);
  const { url, path } = useRouteMatch();
  const urlImg = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchFilm = () => {
      HomePageApi.filmDetails(id).then(({ data }) => {
        setFilms(data);
      });
    };

    fetchFilm();
  }, [films, id]);

  return (
    <>
      {films && (
        <>
          <h1>{films.title}</h1>
          <img src={`${urlImg}${films.poster_path}`} alt={films.title} />
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
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Review />
          </Route>
        </>
      )}
    </>
  );
}
