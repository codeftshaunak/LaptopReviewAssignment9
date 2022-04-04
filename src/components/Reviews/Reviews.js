import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [review, setReview] = useState({});
  useEffect(() => {
    fetch('reviewsdata.json')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }, [])
  
  return (
    <div className='reviews'> 
      
    </div>
  )
}

export default Reviews;