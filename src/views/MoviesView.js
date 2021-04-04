import { useState, useEffect } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const MoviesView = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <h1>Movies</h1>
      <input type="text" value={query} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};
export default MoviesView;
