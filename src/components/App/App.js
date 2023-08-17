import './App.css';
import React, { useState } from 'react';
import { UseIngredients } from '../UseIngredients/UseIngredients';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

/*
    TO-DO
  1. Review ingredients
  2. Develop two additional recommendation lists (one-ingredient-away and fine-without-garnish)
  3. Better responsiveness from heading;
*/
export const App = () => {
  const [recommendations, setRecommendations] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { ingredients, addIngredient, removeIngredient } = UseIngredients();

  return (
    <div className="App">
      <div className="main-content-wrapper">
        <Header />
        <Main
          onAdd={addIngredient} 
          ingredients={ingredients} 
          setRecommendations={setRecommendations} 
          setLoading={setLoading} 
          setSubmitted={setSubmitted}
          onRemoveIngredient={removeIngredient} 
          submitted={submitted} 
          loading={loading} 
          recommendations={recommendations}
        />
      </div>
      <Footer />
    </div>
  );
}
