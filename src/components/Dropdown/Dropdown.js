import React from 'react';
import './Dropdown.css';

export const Dropdown = ({ choices, selectIngredient }) => {
  return (
    <div className="dropdown ingredient-cell">
      <select className="dropdown-select cell-text" onChange={selectIngredient}>
        {choices[0] !== "Liquors" && <option value=""></option>}
        {choices.map(choice => <option value={choice} key={choice}>{choice}</option>)}
      </select>
    </div>
  );
};