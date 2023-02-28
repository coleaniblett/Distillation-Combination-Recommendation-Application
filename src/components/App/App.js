import './App.css';
import React, { useState } from 'react';
import { UseIngredients } from '../UseIngredients/UseIngredients';
import { Header } from '../Header/Header';
import { Form } from '../Form/Form';
import { Inventory } from '../Inventory/Inventory';
import { RecommendationsList } from '../RecommendationsList/RecommendationsList';

/*
    TO-DO
  1. Review ingredients
  2. Develop two additional recommendation lists (one-ingredient-away and fine-without-garnish)
  3. Add user instructions
*/

function App() {
  const [recommendations, setRecommendations] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { ingredients, addIngredient, removeIngredient } = UseIngredients();

  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <Form onAdd={addIngredient} ingredients={ingredients} setRecommendations={setRecommendations} setLoading={setLoading} setSubmitted={setSubmitted}/>
        <Inventory ingredients={ingredients} onRemoveIngredient={removeIngredient} />
        <RecommendationsList submitted={submitted} loading={loading} recommendations={recommendations} />
      </div>
    </div>
  );
}

export default App;
