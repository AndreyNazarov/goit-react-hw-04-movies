import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import Navigation from './views/Navigation';
import MoviesPage from './views/MoviesView';
const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
