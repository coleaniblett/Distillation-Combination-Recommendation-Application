import React from 'react';
import './Form.css';
import {Ingredients} from '../Ingredients/Ingredients';

const {liquors, liqueurs, mixers} = Ingredients;

export const Form = () => {

  const liquorSelect = document.getElementById("liquor");
  const liqueurSelect = document.getElementById("liqueur");
  const mixerSelect = document.getElementById("mixer");

  if (liquorSelect.childElementCount === 1) {
    liquors.map(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      liquorSelect.appendChild(optionElement);
      return "";
    });
  
    liqueurs.map(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      liqueurSelect.appendChild(optionElement);
      return "";
    });
  
    mixers.map(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      mixerSelect.appendChild(optionElement);
      return "";
    });
  }

  return (
    <form id="cocktail-form">
      <label for="liquor">Liquor:</label><br/>
      <select id="liquor" className="liquor">
        <option value=""></option>
      </select><br/>
      <br/>
      <label for="liqueur">Liqueur:</label><br/>
      <select id="liqueur" className="liqueur">
        <option value=""></option>  
      </select><br/>
      <br/>
      <label for="mixer">Mixer:</label><br/>
      <select id="mixer" className="mixer">
        <option value=""></option>
      </select><br/>
      <br/>
      <button type="submit">Add ingredients to inventory</button><br/>
      <br/>
      <button type="submit">Submit inventory</button>

    </form>
  );
}