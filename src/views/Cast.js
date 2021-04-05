import { useState, useEffect } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import s from '../styles/cast.module.css';
const Cast = () => {
  const [actors, setActors] = useState(null);
  const { id } = useParams();

  const urlImg = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    HomePageApi.fetchCast(id).then(({ data }) => {
      const splicedActors = data.cast.slice(0, 8);
      setActors(splicedActors);
    });
  }, [id]);

  return (
    <div>
      <ul>
        {actors &&
          actors.map(actor => (
            <li key={uuidv4()}>
              <img
                width="200"
                height="220"
                src={`${urlImg}${actor.profile_path}`}
                alt="actors"
                className={s.image}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
