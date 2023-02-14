import './Form.css';
import React, { useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
import { Dropdown } from '../Dropdown/Dropdown';
import { FormButton } from '../FormButton/FormButton';

const {liquors, beers, wines, liqueurs, mixers, garnishes, other} = Ingredients;
const categories = {
  "Liquors": liquors,
  "Beers": beers,
  "Wines": wines,
  "Liqueurs": liqueurs,
  "Mixers": mixers,
  "Garnishes": garnishes,
  "Other": other
}

export const Form = ({ onAdd, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [categoryName, setCategoryName] = useState("Liquors");
  const [category, setCategory] = useState(liquors);

  const handleCategoryChange = (event) => {
    const id = event.target.value;
    setCategoryName(id);
    setCategory(categories[`${id}`]);
  }

  const handleIngredientChange = (event) => {
    const {value} = event.target;
    setFormData(prevFormData => ({ ...prevFormData, "name": value}));
  }

  const handleIngredientSubmit = (event) => {
    event.preventDefault();
    if (formData.name === undefined || formData.name === "") {
      window.alert("No option selected");
    }
    else {
      onAdd({ ...formData, id: Date.now() });
    }
  }

  const handleInventorySubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <div className="form">
      <form id="cocktail-form" className="text-box">
        <Dropdown choices={Object.keys(categories)} choicesName="Ingredient Categories" selectIngredient={handleCategoryChange}/>
        <Dropdown choices={category} choicesName={categoryName} selectIngredient={handleIngredientChange}/>
        <FormButton onClick={handleIngredientSubmit} text="Add ingredients to inventory" />
        <FormButton onClick={handleInventorySubmit} text="Submit inventory" />
      </form>
    </div>
  );
}