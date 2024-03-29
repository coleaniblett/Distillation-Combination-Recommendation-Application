import { useState, useCallback } from 'react';

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = useCallback(ingredient => {
    if (ingredients.some(oldIngredient => oldIngredient.name === ingredient.name)) {
      window.alert(`Your inventory already includes ${ingredient.name}`);
    }
    else {
      setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    }
  }, [setIngredients, ingredients]);

  const removeIngredient = useCallback(id => {
    setIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== id));
  }, [setIngredients]);

  return { ingredients, addIngredient, removeIngredient };
}