import React from "react";
import AllReviews from './allReviews'
import PropTypes from 'prop-types'


function ReviewsList(props) {
    return (
        props.reviews.map(review =>{
            return (
                    <AllReviews review={review} key={review.id} />
            )
        })
    )
}

ReviewsList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsList
