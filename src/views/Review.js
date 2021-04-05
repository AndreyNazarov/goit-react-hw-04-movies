import { useState, useEffect } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Review = () => {
  const [reviews, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    HomePageApi.fetchReviews(id).then(({ data }) => {
      setReview(data.results);
    });
  }, [id]);

  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={uuidv4()}>
              <h3>{review.author}</h3>
              <p>
                {review.content.length > 180
                  ? review.content.slice(0, 180) + '...'
                  : review.content}
              </p>
            </li>
          ))
        ) : (
          <h2> Oops, there are no reviews</h2>
        )}
      </ul>
    </div>
  );
};

export default Review;
