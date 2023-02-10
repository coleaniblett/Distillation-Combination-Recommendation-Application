import './Form.css';
import React, { useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
import { Dropdown } from '../Dropdown/Dropdown'

const {liquors, beers, wines, liqueurs, mixers, garnishes, other} = Ingredients;
const categories = [
  "Liquors",
  "Beers",
  "Wines",
  "Liqueurs",
  "Mixers",
  "Garnishes",
  "Other"
];

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
      onAdd({ ...formData, id: Date.now() });
      formData.name = "";
    }
  }

  function handleChange(event) {
    const {value} = event.target;
    setFormData(prevFormData => ({ ...prevFormData, "name": value}));
  }

   function handleSelection(event) {
    const id = event.target.value;
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
    } else if (id === "Garnishes") {
      setSelection(garnishes);
    } else if (id === "Other") {
      setSelection(other);
    }
  }

  function handleInventorySubmit(event) {
    onSubmit();
  }

  return (
    <div className="Form">
      <form id="cocktail-form">
        <Dropdown choices={categories} choicesName="Ingredient Categories" selectIngredient={handleSelection}/>
        <Dropdown choices={selection} choicesName={selectionName} selectIngredient={handleChange}/>
        <button type="submit" className="submission-button" onClick={handleSubmit}>Add ingredients to inventory</button><br/>
        <br/>
        <button type="button" className="submission-button" id="submit-inventory" onClick={handleInventorySubmit}>Submit inventory</button>
      </form>
    </div>
  );
}