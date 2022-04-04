import React from "react";
import './SingleReview.css'

const SingleReview = (props) => {
    const {name, img, comment, ratings} = props.review;
    console.log(props);
    return (
        <div className="review">
            <p>{comment}</p>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h5>{ratings}</h5>
        </div>
    )
}
export default SingleReview;