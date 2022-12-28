import React from 'react';
import './Inventory.css';

export const Inventory = ({ ingredients, onRemoveIngredient }) => {
  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        <li>
          Water
          <button onClick={() => window.alert("If you don't have water, maybe you shouldn't be drinking?")}>X</button>
        </li>
        {ingredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.name}
            <button onClick={() => onRemoveIngredient(ingredient.id)}>X</button>
          </li>
        ))}
    </ul>
    </div>
  );
};
