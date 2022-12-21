import React from 'react';

export const Dropdown = ({ choices, choicesName, selectIngredient }) => {
  return (
    <div id="dropdown">
      <label for="dropdown">{choicesName}:</label><br/>
      <select id="dropdown" onChange={selectIngredient}>
        <option value=""></option>
        {choices.map(choice => <option value={choice}>{choice}</option>)}
      </select><br/>
      <br/>
    </div>
  );
};