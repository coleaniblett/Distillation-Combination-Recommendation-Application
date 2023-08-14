import React from 'react';
import './Inventory.css';

export const Inventory = ({ ingredients, onRemoveIngredient }) => {
  return (
    <div className="inventory">
      <div className="">
        <h2 className="section-heading">Inventory</h2>
        <ul className="inventory-list">
          <li className="standard-text">
            Water
            <button className="remove-button" onClick={() => window.alert("If you don't have water, maybe you shouldn't be drinking?")}>X</button>
          </li>
          {ingredients.map(ingredient => (
            <li key={ingredient.id} className="standard-text">
              {ingredient.name}
              <button className="remove-button" onClick={() => onRemoveIngredient(ingredient.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
