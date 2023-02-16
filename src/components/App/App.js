import './App.css';
import React from 'react';
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
  4. Allow multiple searches in one session
  5. Flexbox the text-boxes
*/

function App() {
  const { ingredients, submitted, addIngredient, removeIngredient, submitIngredients } = UseIngredients();

  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <Form onAdd={addIngredient} onSubmit={submitIngredients}/>
        <Inventory ingredients={ingredients} onRemoveIngredient={removeIngredient} />
        <RecommendationsList submitted={submitted} ingredients={ingredients} />
      </div>
    </div>
  );
}

export default App;
