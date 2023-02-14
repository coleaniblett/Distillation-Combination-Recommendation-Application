import './FormButton.css';
import React, { useState } from 'react';

export const FormButton = ({ onClick, text }) => {
  return (
    <div className="formButton">
      <button type="submit" className="submission-button" onClick={onClick}>{text}</button>
      <br />
    </div>
  )
}