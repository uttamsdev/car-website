import React from "react";  
import './Home.css'

const Home = () => {
    return (
      <div>
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
            <button>Live Demo</button>
          </div>
          <div>
            <img src="car1.png" alt="" />
          </div>
        </div>
        <div className="customer-review">
            <h1 className="customer-review-title">Customer Reviews(3)</h1>
        </div>
      </div>
    );
}
export default Home;