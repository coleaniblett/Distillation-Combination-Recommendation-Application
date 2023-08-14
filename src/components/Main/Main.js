import './Main.css';
import React from 'react';
import { Inventory } from '../Inventory/Inventory';
import { Form } from '../Form/Form';
import { RecommendationsList } from '../RecommendationsList/RecommendationsList';

export const Main = ({ onAdd, ingredients, setRecommendations, setLoading, setSubmitted, onRemoveIngredient, submitted, loading, recommendations }) => {
  return (
    <div className="main">
      <Inventory ingredients={ingredients} onRemoveIngredient={onRemoveIngredient} />
      <Form ingredients={ingredients} onAdd={onAdd} setRecommendations={setRecommendations} setLoading={setLoading} setSubmitted={setSubmitted} />
      <RecommendationsList submitted={submitted} loading={loading} recommendations={recommendations} />
    </div>
  );
}