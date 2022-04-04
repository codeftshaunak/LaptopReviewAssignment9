import React from 'react';

function Review(props) {
        console.log(props.review);
  return (
          <div>
                  <img src={props.review.profile} alt="images" />
                  <h4>Customer Name:{props.review.profile_name}</h4>       
                  <h5>Product Name:{props.review.product}</h5>
                  <h6>Review:{props.review.review_text}</h6>
                  <h6>Ratings:{props.review.review_rating}</h6>
          </div>
  )
}

export default Review;