import React, { useState } from 'react';
import './Form.css';
import {Ingredients} from '../Ingredients/Ingredients';

const {liquors, liqueurs, mixers} = Ingredients;

export const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  /*const liquorSelect = document.getElementById("liquor");
  const liqueurSelect = document.getElementById("liqueur");
  const mixerSelect = document.getElementById("mixer");*/
  const [liquorOptions, setLiquorOptions] = useState([]);
  const [liqueurOptions, setLiqueurOptions] = useState([]);
  const [mixerOptions, setMixerOptions] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
    window.alert("Test");
  }

  /*f (liquorSelect.childElementCount === 1) {
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
  }*/
  if (liquorOptions.length === 0) {
    setLiquorOptions(liquors.map(option => <option value={option}>{option}</option>));
    setLiqueurOptions(liqueurs.map(option => <option value={option}>{option}</option>));
    setMixerOptions(mixers.map(option => <option value={option}>{option}</option>));
  }


  return (
    <form id="cocktail-form">
      <label for="liquor">Liquor:</label><br/>
      <select id="liquor" className="liquor">
        <option value=""></option>
        {liquorOptions}
      </select><br/>
      <br/>
      <label for="liqueur">Liqueur:</label><br/>
      <select id="liqueur" className="liqueur">
        <option value=""></option>
        {liqueurOptions}
      </select><br/>
      <br/>
      <label for="mixer">Mixer:</label><br/>
      <select id="mixer" className="mixer">
        <option value=""></option>
        {mixerOptions}
      </select><br/>
      <br/>
      <button type="submit" >Add ingredients to inventory</button><br/>
      <br/>
      <button type="submit">Submit inventory</button>

    </form>
  );
}