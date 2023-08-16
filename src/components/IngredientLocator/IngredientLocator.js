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
    <tr className="">
      {/*rename user-interface class*/}
        <td className="ingredient-cell">
          <Dropdown choices={Object.keys(categories)} selectIngredient={handleCategoryChange}/>
        </td>
        <td className="ingredient-cell">
          <Dropdown choices={category} selectIngredient={handleIngredientChange}/>
        </td>
        <td>
          <FormButton onClick={handleIngredientSubmit} text="+" />
        </td>
    </tr>
  );
}