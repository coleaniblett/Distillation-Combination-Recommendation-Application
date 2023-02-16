import './RecommendationsList.css';
import React from 'react';
import { GetRecommendations } from '../GetRecommendations/GetRecommendations';

export const RecommendationsList = ({ submitted, ingredients }) => {
  return (
    <div className="recommendations flex-box">
      <div className="text-box">
        <div className="ready-to-make recommendations-list">
          <h2 className="section-heading">Recommendations</h2>
          {submitted ? <GetRecommendations ingredients={ingredients} /> : ''}
        </div>
      </div>
    </div>
  );
}