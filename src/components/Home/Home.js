import React from "react";  
import useReviews from "../../CustomHooks/useReviews";
import SingleReview from "../singleReview/SingleReview";
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews(3);
  const navigate = useNavigate();

  const seeAllReviews = () => {
    navigate('/reviews')
  }
    return (
      <div className="home-container">
        <div className="home">
          <div className="home-content">
            <h1>
              Find The Car Here, <br />
              <span className="title">Build Your Deal</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quod quas modi quidem saepe nemo nostrum aut, fugit
              soluta autem blanditiis ducimus, similique dignissimos
              accusantium. Qui, blanditiis possimus. Aliquid, totam?
            </p>
            <button>
              Live Demo{" "}
              <FontAwesomeIcon className="fa-icon" icon={faArrowCircleRight}></FontAwesomeIcon>
            </button>
          </div>
          <div>
            <img src="car1.png" alt="" />
          </div>
        </div>
        <div className="customer-review">
          <h1 className="customer-review-title">Customer Reviews(3)</h1>
          <div className="review-container">
            <div className="reviews">
              {reviews.map((review) => (
                <SingleReview review={review} key={review.id}></SingleReview>
              ))}
            </div>
          </div>
          <button onClick={seeAllReviews} className="all-reviews-btn">
            See All Reviews{" "}
            <FontAwesomeIcon
              className="fa-icon"
              icon={faArrowCircleRight}
            ></FontAwesomeIcon>{" "}
          </button>
        </div>
      </div>
    );
}
export default Home;