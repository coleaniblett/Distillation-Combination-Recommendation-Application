import React, { useState } from 'react';
import './App.css';
import {Form} from '../Form/Form';
import {Header} from '../Header/Header';
import {Inventory} from '../Inventory/Inventory';
import { UseIngredients } from '../UseIngredients/UseIngredients';

function App() {
  const { ingredients, addIngredient, removeIngredient } = UseIngredients();

  return (
    <div className="App">
      {console.log("App rendering")}
      <Header />
      <Form onSubmit={addIngredient}/>
      <Inventory ingredients={ingredients} onRemoveIngredient={removeIngredient} />
    </div>
  );
}

export default App;
