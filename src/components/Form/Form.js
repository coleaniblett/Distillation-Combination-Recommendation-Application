import React, { useState } from 'react';
import './Form.css';
import {Ingredients} from '../Ingredients/Ingredients';
import {Dropdown} from '../Dropdown/Dropdown'

const {liquors, liqueurs, mixers} = Ingredients;

export const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [liquorOptions, setLiquorOptions] = useState([]);
  const [liqueurOptions, setLiqueurOptions] = useState([]);
  const [mixerOptions, setMixerOptions] = useState([]);
  const [selectionName, setSelectionName] = useState("Liquors");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...formData, id: Date.now() });
  }

  function handleChange(event) {
    const {className, value} = event.target;
    if (value != "") {
      setFormData(prevFormData => ({ ...prevFormData, ["name"]: value}));
    }
  }

   function handleSelection(event) {
     const {id} = event.target;
     setSelectionName(id);
   }

  if (liquorOptions.length === 0) {
    setLiquorOptions(liquors.map(option => <option className="liquor" value={option}>{option}</option>));
    setLiqueurOptions(liqueurs.map(option => <option className="liqueur" value={option}>{option}</option>));
    setMixerOptions(mixers.map(option => <option className="mixer" value={option}>{option}</option>));
  }

  return (
    <form id="cocktail-form">
      <button className="selection-button" onClick={handleSelection} id="Liquors">Liquor</button>
      <button className="selection-button" onClick={handleSelection} id="Liqueurs">Liqueur</button>
      <button className="selection-button" onClick={handleSelection}>Mixer</button>
      {/*<label for="liquor">Liquor:</label><br/>
      <select id="liquor" className="liquor" onChange={handleChange}>
        <option value=""></option>
        {liquorOptions}
      </select><br/>
      <br/>
      <label for="liqueur">Liqueur:</label><br/>
      <select id="liqueur" className="liqueur" onChange={handleChange}>
        <option value=""></option>
        {liqueurOptions}
      </select><br/>
      <br/>
      <label for="mixer">Mixer:</label><br/>
      <select id="mixer" className="mixer" onChange={handleChange}>
        <option value=""></option>
        {mixerOptions}
      </select><br/>
      <br/>*/}
      <Dropdown choices={liqueurOptions} choicesName={selectionName} selectIngredient={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Add ingredients to inventory</button><br/>
      <br/>
      <button type="submit">Submit inventory</button>
    </form>
  );
}