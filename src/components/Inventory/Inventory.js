import React from 'react';
import './Inventory.css';

export const Inventory = ({ ingredients, onRemoveIngredient }) => {
  return (
    <div className="inventory">
        <h2 className="section-heading">Inventory</h2>
          <ul className="inventory-list">
            <li className="standard-text">
              <div className="ingredient-cell">
                <h6 className="inventory-heading">CATEGORY</h6>
              </div>
              <div className="ingredient-cell">
                <h6 className="inventory-heading">INGREDIENT</h6>
              </div>
              <h6 className="inventory-heading button-heading">REMOVE</h6>
            </li>
            <li className="standard-text">
              <div className="ingredient-cell">
                <p className="cell-text">Other</p>
              </div>
              <div className="ingredient-cell">
                <p className="cell-text">Water</p>
              </div>
              <button className="remove-button" onClick={() => window.alert("If you don't have water, maybe you shouldn't be drinking?")}>X</button>
            </li>
            {ingredients.map(ingredient => (
              <li key={ingredient.id} className="standard-text inner-list-wrapper">
                <div className="ingredient-cell">
                  <p className="cell-text">{ingredient.category}</p>
                </div>
                <div className="ingredient-cell">
                  <p className="cell-text">{ingredient.name}</p>
                </div>
                <button className="remove-button" onClick={() => onRemoveIngredient(ingredient.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
  );
};
