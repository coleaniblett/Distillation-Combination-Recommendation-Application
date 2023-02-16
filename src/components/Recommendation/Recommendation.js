import './Recommendation.css';
import React, { useState, useEffect } from 'react';
import { DrinkInfo } from '../DrinkInfo/DrinkInfo';

export const Recommendation = ({ name, cocktail }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }

  return (
    <div className="recommendation">
      <li className="recommendation-title standard-text" key={name} onClick={handleClick}>{name}</li>
      <button className="display-info-button" onClick={handleClick}>
        {showInfo ? "-" : "+"}
      </button>
      {showInfo && <DrinkInfo drinkData={cocktail["data"]["drinks"][0]} />}
    </div>
  );
}