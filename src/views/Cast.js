import { useState, useEffect } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { castId } = useParams();

  const urlImg = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    console.log(castId);
    HomePageApi.fetchCast(castId).then(({ data }) => {
      setActors(data);
      // console.log(data);
    });
    // console.log('cast');
  }, [castId]);

  return (
    <div>
      {console.log(actors)}
      {actors && actors.map(actor => <p>{console.log(actor)}</p>)}
      {/* {cast &&
        cast.map(actor => ( */}

      {/* <img src={`${urlImg}${cast.profile_path}`} alt="" /> */}
      {/* {cast && <p>Character: {`${cast.cast.name}`}</p>} */}

      {/* ))} */}
      {/* {cast.map(actor => (
        <h1>{actor.name}</h1>
      ))} */}
    </div>
  );
};

export default Cast;
