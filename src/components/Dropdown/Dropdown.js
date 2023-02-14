import React from 'react';
import './Dropdown.css';

export const Dropdown = ({ choices, choicesName, selectIngredient }) => {
  return (
    <div className="dropdown">
      <label htmlFor="dropdown">{choicesName}:</label><br/>
      <select className="dropdown-select" onChange={selectIngredient}>
        {choices[0] !== "Liquors" && <option value=""></option>}
        {choices.map(choice => <option value={choice} key={choice}>{choice}</option>)}
      </select>
    </div>
  );
};