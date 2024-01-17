import React from "react";
import { Link } from "react-router-dom";
import "./PricingCards.css";

function PricingCards(props) {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>{props.sub}</h3>
          <span className="bar"></span>
          <p className="btc">{props.price}</p>
          <p>- One year -</p>
          {//<p>- {props.views}-</p>
          }
          <p>- Featured -</p>
          <p>- {props.trainingType} -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PricingCards;
