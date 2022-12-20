import { useState, useCallback } from 'react';

export function UseIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = useCallback(ingredient => {
    setIngredients(prevIngredients => [...prevIngredients, ingredient]);
  }, [setIngredients]);

  const removeIngredient = useCallback(id => {
    setIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== id));
  }, [setIngredients]);

  return { ingredients, addIngredient, removeIngredient };
}