import React from 'react';
import './Inventory.css';
import { FormButton } from '../FormButton/FormButton';

export const Inventory = ({ ingredients, onRemoveIngredient }) => {
  return (
    <table className="main-table inventory standard-text">
      <thead>
        <tr>
          <th className="ingredient-cell inventory-heading cell-text left-heading">Category</th>
          <th className="ingredient-cell inventory-heading cell-text right-heading">Ingredient</th>
          <th className="ingredient-cell inventory-heading">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="ingredient-cell">
            <p className="cell-text left-text">Other</p>
          </td>
          <td className="ingredient-cell">
            <p className="cell-text right-text">Water</p>
          </td>
          <td>
            <FormButton 
              onClick={() => window.alert("If you don't have water, maybe you shouldn't be drinking?")}
              text="-"
            />
          </td>
        </tr>
        {ingredients.map(ingredient => (
        <tr key={ingredient.id} className="standard-text inner-list-wrapper">
          <td className="ingredient-cell">
            {ingredient.category}
          </td>
          <td className="ingredient-cell">
            <p className="cell-text right-text">{ingredient.name}</p>
          </td>
          <td>                
            <FormButton onClick={() => onRemoveIngredient(ingredient.id)} text="-" />

          </td>              
        </tr>
      ))}
      </tbody>
    </table>
  );
};
