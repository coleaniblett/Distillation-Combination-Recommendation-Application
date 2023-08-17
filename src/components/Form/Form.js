import './Form.css';
import React from 'react';
import { FormButton } from '../FormButton/FormButton';
import { GetRecommendations } from '../GetRecommendations/GetRecommendations';
import { IngredientLocator } from '../IngredientLocator/IngredientLocator';

const { getCocktails, filterCocktails } = GetRecommendations();

export const Form = ({ onAdd, ingredients, setRecommendations, setLoading, setSubmitted }) => {

  const handleInventorySubmit = async (event) => {
    event.preventDefault();
    setRecommendations({});
    setLoading(true);
    console.log(ingredients);
    const names = ingredients.map(ingredient => ingredient.name.toLowerCase());
    const unfilteredResult = await getCocktails(names);
    const result = await filterCocktails(unfilteredResult, names);
    console.log(result);
    setLoading(false);
    setRecommendations(result);
    setSubmitted(true);
  }

  return (
    <div className="form">
        <IngredientLocator onAdd={onAdd} />
      <div className="submit-wrapper">
          <FormButton onClick={handleInventorySubmit} text="Submit inventory" />
      </div>
    </div>
  );
}
