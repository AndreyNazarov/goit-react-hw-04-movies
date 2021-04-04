import { useState, useEffect } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Cast = ({ id }) => {
  const [cast, setCast] = useState(null);
  const urlImg = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    const fetchCast = () => {
      HomePageApi.fetchCast(id).then(({ data }) => {
        setCast(data);
      });
    };
    fetchCast();
  }, [id]);

  // const actors = cast.find(actor => actor.id === id);
  return (
    <div>
      {cast &&
        cast.map(actor => (
          // <img src={`${urlImg}${actor.profile_path}`} alt="" />
          <p>Character: {`${actor.name}`}</p>
        ))}
    </div>
  );
};

export default Cast;
