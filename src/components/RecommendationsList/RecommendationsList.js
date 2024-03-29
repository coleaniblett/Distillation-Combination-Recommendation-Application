import './RecommendationsList.css';
import React from 'react';
import { Recommendation } from '../Recommendation/Recommendation';

export const RecommendationsList = ({ submitted, loading, recommendations }) => {
  return (
    <div className="recommendations-list">
      <div className="ready-to-make recommendations-list">
        {submitted && (<h2 className="section-heading">Recommendations</h2>)}
        <ul>
          {Object.keys(recommendations).map(recommendation => (
            <Recommendation key={recommendation} name={recommendation} cocktail={recommendations[recommendation]} />
          ))
          }
        </ul>
        {loading? (<div className="loading-message">Loading recommendations...</div>) : ""}
        {submitted && !loading && Object.keys(recommendations).length === 0 ? (<div className="no-recs-message">No recommendations found</div>) : ""}
      </div>
    </div>
  );
}