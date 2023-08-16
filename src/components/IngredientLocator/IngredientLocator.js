import './IngredientLocator.css';
import React, { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { FormButton } from '../FormButton/FormButton';
import { Ingredients } from '../Ingredients/Ingredients';

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

export const IngredientLocator = ({ onAdd }) => {
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
      onAdd({ ...formData, id: Date.now(), "category": categoryName });
    }
  }
  return (
    <div className="ingredient-locator">
      <h3 className="section-heading" id="ingredient-locator-heading">Add Ingredient</h3>
      <div className="user-interface inner-list-wrapper">
        <Dropdown choices={Object.keys(categories)} choicesName="Categories" selectIngredient={handleCategoryChange}/>
        <Dropdown choices={category} choicesName={categoryName} selectIngredient={handleIngredientChange}/>
        <FormButton onClick={handleIngredientSubmit} text="+" />
      </div>
    </div>
  );
}