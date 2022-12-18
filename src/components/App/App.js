import React, { useState } from 'react';
import './App.css';
import {Form} from '../Form/Form';
import {Header} from '../Header/Header';
import {Inventory} from '../Inventory/Inventory';

function App() {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'flour' },
    { id: 2, name: 'sugar' },
    { id: 3, name: 'butter' },
  ]);

  const handleRemoveIngredient = id => {
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Form />
      <Inventory ingredients={ingredients} onRemoveIngredient={handleRemoveIngredient} />
    </div>
  );
}

export default App;
