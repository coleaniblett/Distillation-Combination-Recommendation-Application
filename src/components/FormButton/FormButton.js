import './FormButton.css';
import React from 'react';

export const FormButton = ({ onClick, text }) => {
  return (
    <div className="formButton">
      <button type="submit" className="submission-button" onClick={onClick}>
        <div class="button-text-wrapper">
          {text}
        </div>
      </button>
      <br />
    </div>
  )
}