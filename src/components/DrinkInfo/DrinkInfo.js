import './DrinkInfo.css';
import React from 'react';

export const DrinkInfo = ({ drinkData }) => {
  const instructions = drinkData["strInstructions"];

  const getIngredients = () => {
    let i = 1;
    const ingredients = [];
    while (drinkData[`strIngredient${i}`]) {
      let measurement = drinkData[`strMeasure${i}`];
      let ingredient = drinkData[`strIngredient${i}`];
      ingredients.push(`${measurement} ${ingredient}`);
      i++;
    }
    return ingredients;
  }

  const ingredients = getIngredients();
  
  return (
    <div className="drink-info">
      {ingredients.map(ingredient => (
        <ul className="ingredient-info standard-text">{ingredient}</ul>
      ))}
      <p className="instructions standard-text">
        {instructions}
      </p>
    </div>
  );
}