import './RecommendationsList.css';
import React from 'react';
import { GetRecommendations } from '../GetRecommendations/GetRecommendations';

export const RecommendationsList = ({ submitted, ingredients }) => {
  if (submitted) {
    return (
      <div className="recommendations">
        <div className="text-box">
          <div className="ready-to-make recommendations-list">
            <h2 className="section-heading">Recommendations</h2>
            {<GetRecommendations ingredients={ingredients} />}
          </div>
        </div>
      </div>
    );
  }
}