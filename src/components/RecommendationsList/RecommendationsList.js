import React from 'react';
import { Recommendations } from '../Recommendations/Recommendations';
import './RecommendationsList.css';

export const RecommendationsList = ({ submitted, ingredients }) => {
  if (submitted) {
    return (
      <div className="recommendations">
        <div className="ready-to-make">
          <h2>Recommendations</h2>
          {<Recommendations ingredients={ingredients} />}
        </div>
      </div>
    );
  }
}