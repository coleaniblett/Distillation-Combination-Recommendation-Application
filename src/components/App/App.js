import React, { useState } from 'react';
import './App.css';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { Inventory } from '../Inventory/Inventory';
import { UseIngredients } from '../UseIngredients/UseIngredients';
import { RecommendationsList } from '../RecommendationsList/ReceommendationsList';

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
