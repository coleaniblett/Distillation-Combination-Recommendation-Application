import React from 'react';
import { GetRecommendations } from '../GetRecommendations/GetRecommendations';
import './RecommendationsList.css';

export const RecommendationsList = ({ submitted, ingredients }) => {
  if (submitted) {
    return (
      <div className="recommendations">
        <div className="ready-to-make">
          <h2>Recommendations</h2>
          {<GetRecommendations ingredients={ingredients} />}
        </div>
      </div>
    );
  }
}