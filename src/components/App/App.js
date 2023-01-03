import React, { useState } from 'react';
import './App.css';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { Inventory } from '../Inventory/Inventory';
import { UseIngredients } from '../UseIngredients/UseIngredients';
import { RecommendationsList } from '../RecommendationsList/ReceommendationsList';

/*
    TO-DO
  1. Review ingredients, write generalizer function
  2. Split mixers into mixers and garnishes
  3. Develop two additional recommendation lists (one-ingredient-away and fine-without-garnish)
  4. Add clickable functionality to cocktail recommendations
  5. "No recommendations found" output
  6. Add user instructions
  7. Look up to-do compiler
*/

function App() {
  const { ingredients, submitted, addIngredient, removeIngredient, submitIngredients } = UseIngredients();

  return (
    <div className="App">
      <Header />
      <Form onAdd={addIngredient} onSubmit={submitIngredients}/>
      <Inventory ingredients={ingredients} onRemoveIngredient={removeIngredient} />
      <RecommendationsList submitted={submitted} ingredients={ingredients} />
    </div>
  );
}

export default App;
