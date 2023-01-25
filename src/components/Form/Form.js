import './Form.css';
import React, { useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
import { Dropdown } from '../Dropdown/Dropdown'

const {liquors, beers, wines, liqueurs, mixers, other} = Ingredients;

export const Form = ({ onAdd, onSubmit }) => {
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
      onAdd({ ...formData, id: Date.now() });
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
    } else if (id === "Beers") {
      setSelection(beers);
    } else if (id === "Liqueurs") {
      setSelection(liqueurs);
    } else if (id === "Wines") {
      setSelection(wines);
    } else if (id === "Mixers") {
      setSelection(mixers);
    } else if (id === "Other") {
      setSelection(other);
    }
  }

  function handleInventorySubmit(event) {
    onSubmit();
  }

  return (
    <form id="cocktail-form">
      <div className="button-container">
        <div className="button-grouping">
          <button type="button" className="selection-button" onClick={handleSelection} id="Liquors">Liquors</button>
          <button type="button" className="selection-button" onClick={handleSelection} id="Beers">Beers</button>
          <button type="button" className="selection-button" onClick={handleSelection} id="Wines">Wines</button>
        </div>
        <div className="button-grouping">
          <button type="button" className="selection-button" onClick={handleSelection} id="Liqueurs">Liqueurs</button>
          <button type="button" className="selection-button" onClick={handleSelection} id="Mixers">Mixers</button>
          <button type="button" className="selection-button" onClick={handleSelection} id="Other">Other</button>
        </div>
      </div>
      <Dropdown choices={selection} choicesName={selectionName} selectIngredient={handleChange}/>
      <button type="submit" className="submission-button" onClick={handleSubmit}>Add ingredients to inventory</button><br/>
      <br/>
      <button type="button" className="submission-button" id="submit-inventory" onClick={handleInventorySubmit}>Submit inventory</button>
    </form>
  );
}