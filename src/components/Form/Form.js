import React, { useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
import { Dropdown } from '../Dropdown/Dropdown';
import { FormButton } from '../FormButton/FormButton';
import { GetRecommendations } from '../GetRecommendations/GetRecommendations';

const { getCocktails, filterCocktails } = GetRecommendations();
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

export const Form = ({ onAdd, ingredients, setRecommendations, setLoading, setSubmitted }) => {
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

  const handleInventorySubmit = async (event) => {
    event.preventDefault();
    setRecommendations({});
    setLoading(true);
    const names = ingredients.map(ingredient => ingredient.name.toLowerCase());
    const unfilteredResult = await getCocktails(names);
    const result = await filterCocktails(unfilteredResult, names);
    console.log(result);
    setLoading(false);
    setRecommendations(result);
    setSubmitted(true);
  }

  return (
    <div className="form flex-box">
      <form className="text-box">
        <h2 className="section-heading">Ingredient Search</h2>
        <Dropdown choices={Object.keys(categories)} choicesName="Ingredient Categories" selectIngredient={handleCategoryChange}/>
        <Dropdown choices={category} choicesName={categoryName} selectIngredient={handleIngredientChange}/>
        <FormButton onClick={handleIngredientSubmit} text="Add ingredients to inventory" />
        <FormButton onClick={handleInventorySubmit} text="Submit inventory" />
      </form>
    </div>
  );
}