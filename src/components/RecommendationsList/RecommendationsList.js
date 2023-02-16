import React from 'react';
import { GetRecommendations } from '../GetRecommendations/GetRecommendations';

export const RecommendationsList = ({ submitted, ingredients }) => {
  if (submitted) {
    return (
      <div className="text-box">
        <div className="ready-to-make">
          <h2 className="section-heading">Recommendations</h2>
          {<GetRecommendations ingredients={ingredients} />}
        </div>
      </div>
    );
  }
}