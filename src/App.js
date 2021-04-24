import './App.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from './Loader/Loader';
import Navigation from './views/Navigation';

const HomeView = lazy(() => import('./views/HomeView'));
const Users = lazy(() => import('./views/User'));
const Chart = lazy(() => import('./views/Chart'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const FilmPage = lazy(() => import('./views/FilmPage'));
const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:id">
            <FilmPage />
          </Route>
          <Route path="/charts">
            <Chart />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
