import { useState, useEffect } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Review = ({ id }) => {
  const [review, setReview] = useState(null);
  const urlImg = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    const fetchReviews = () => {
      HomePageApi.fetchCast(id).then(({ data }) => {
        setReview(data);
      });
    };
    fetchReviews();
  }, [id]);
  console.log(review);

  return (
    <div>
      <h3>Review</h3>
    </div>
  );
};

export default Review;
