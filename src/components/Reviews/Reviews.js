import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('reviewsdata.json')
      .then(resp => resp.json())
      .then(data => setReview(data))
  }, [])
  
  return (
    <div className='reviews'> 
      {review.map((review => <Review
        key={review.id}
        review={review}
      ></Review>))}
    </div>
  )
}

export default Reviews;