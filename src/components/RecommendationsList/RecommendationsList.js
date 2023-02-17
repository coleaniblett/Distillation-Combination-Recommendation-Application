import './RecommendationsList.css';
import React from 'react';
import { GetRecommendations } from '../GetRecommendations/GetRecommendations';

export const RecommendationsList = ({ submitted, ingredients, loading, setLoading }) => {
  return (
    <div className="recommendations flex-box">
      <div className="text-box">
        <div className="ready-to-make recommendations-list">
          <h2 className="section-heading">Recommendations</h2>
          {submitted ? <GetRecommendations ingredients={ingredients} loading={loading} setLoading={setLoading} /> : ''}
        </div>
      </div>
    </div>
  );
}