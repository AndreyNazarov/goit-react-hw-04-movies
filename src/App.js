import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeView from './views/HomeView';
import Navigation from './views/Navigation';
import MoviesPage from './views/MoviesPage';
import FilmPage from './views/FilmPage';
const App = () => {
  return (
    <>
      <Navigation />
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

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
