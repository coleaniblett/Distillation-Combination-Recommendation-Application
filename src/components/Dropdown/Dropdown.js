import React from 'react';
import './Dropdown.css';

export const Dropdown = ({ choices, choicesName, selectIngredient }) => {
  return (
    <div id="dropdown">
      <label htmlFor="dropdown">{choicesName}:</label><br/>
      <select id="dropdown" onChange={selectIngredient}>
        <option value=""></option>
        {choices.map(choice => <option value={choice} key={choice}>{choice}</option>)}
      </select><br/>
      <br/>
    </div>
  );
};