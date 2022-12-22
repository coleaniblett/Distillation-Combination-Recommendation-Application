import React, { useState } from 'react';
import './Form.css';
import { Ingredients } from '../Ingredients/Ingredients';
import { Dropdown } from '../Dropdown/Dropdown'

const {liquors, liqueurs, mixers} = Ingredients;

export const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [selectionName, setSelectionName] = useState("Liquors");
  const [selection, setSelection] = useState(liquors);

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.name === undefined || formData.name === "") {
      window.alert("No option selected");
    }
    else {
      document.getElementById("cocktail-form").reset();
      onSubmit({ ...formData, id: Date.now() });
      formData.name = "";
    }
  }

  function handleChange(event) {
    const {value} = event.target;
    setFormData(prevFormData => ({ ...prevFormData, "name": value}));
  }

   function handleSelection(event) {
    const {id} = event.target;
    setSelectionName(id);
    if (id === "Liquors") {
      setSelection(liquors);
    } else if (id === "Liqueurs") {
      setSelection(liqueurs);
    } else if (id === "Mixers") {
      setSelection(mixers);
    }
  }

  return (
    <form id="cocktail-form">
      <button type="button" className="selection-button" onClick={handleSelection} id="Liquors">Liquors</button>
      <button type="button" className="selection-button" onClick={handleSelection} id="Liqueurs">Liqueurs</button>
      <button type="button" className="selection-button" onClick={handleSelection} id="Mixers">Mixers</button>
      <Dropdown choices={selection} choicesName={selectionName} selectIngredient={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Add ingredients to inventory</button><br/>
      <br/>
      <button type="submit">Submit inventory</button>
    </form>
  );
}