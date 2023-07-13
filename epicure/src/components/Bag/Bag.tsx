import { useState } from "react";
import BagIcon from "../../assets/nav_bar_images/Property 1=Bag.svg";
import "./Bag.scss"
const Bag = () => {

  return (
    <div className="shopping-bag-div">
        <div className="bag-container">
            <img className = "bag-image" src={BagIcon} alt="Bag Icon" />
            <p>your bag is <br /> empty</p>
        </div>
      
    </div>
  );
};

export default Bag;
