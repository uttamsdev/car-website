import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './SingleReview.css'

const SingleReview = (props) => {
    const {name, img, comment, ratings} = props.review;
    console.log(props);
    const array = [];
    for(let i = 1; i <= ratings; i++){
        array.push(5);
    }
    return (
      <div className="review">
        <p>{comment}</p>
        <img src={img} alt="" /> <br />
        <h4>{name}</h4>
        <span>Ratings: </span>
        {array.map((array) => (
          <FontAwesomeIcon className="icons" icon={faStar}></FontAwesomeIcon>
        ))}
      </div>
    );
}
export default SingleReview;