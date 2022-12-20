import React, { useState } from 'react';
import './App.css';
import {Form} from '../Form/Form';
import {Header} from '../Header/Header';
import {Inventory} from '../Inventory/Inventory';

function App() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = ingredient => {
    setIngredients([...ingredients, ingredient]);
    console.log(ingredient);
  };

  const handleRemoveIngredient = id => {
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Form onSubmit={addIngredient}/>
      <Inventory ingredients={ingredients} onRemoveIngredient={handleRemoveIngredient} />
    </div>
  );
}

export default App;
