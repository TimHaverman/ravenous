import React from "react";
import './Business.css';

class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg"
            alt=""
          />
        </div>
        <h2>MarginOtto Pizzeria</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>`{business.address}`1010 Paddington Way</p>
            <p>`{business.city}`Bordertown</p>
            <p>
              `{business.state}
              {business.zipCode}`NY 10101
            </p>
          </div>
          <div className="Business-reviews">
            <h3>ITALIAN</h3>
            <h3 className="rating">4.5 stars</h3>
            <p>90 reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;