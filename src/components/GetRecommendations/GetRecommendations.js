import './GetRecommendations.css';
import React, { useState, useEffect } from 'react';
import { IngredientGeneralizer } from '../IngredientGeneralizer/IngredientGeneralizer';
import { TheCocktailDB } from '../../util/TheCocktailDB';
import { Recommendation } from '../Recommendation/Recommendation';

export const GetRecommendations = ({ ingredients }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const names = ingredients.map(ingredient => ingredient.name.toLowerCase());
  const ingredientGeneralizer = IngredientGeneralizer;
  // water and various garnishes are to be ignored as ingredients
  const ingredientsToIgnore = ["water", "lemon", "lemon peel", "lime", "lime peel"];

  useEffect(() => {
    async function fetchRecommendations() {
      const cocktails = await getCocktails(names);
      const recommendations = await filterCocktails(cocktails);
      setCocktails(recommendations);
      setLoading(false);
    }

    fetchRecommendations();
  }, []);

  async function getCocktails(names) {
    const cocktails = {};
    for (const name of names) {
      const response = await TheCocktailDB.getCocktails(name);
      if (response.data.drinks !== "None Found") {
        for (const drink of response.data.drinks) {
          if (!cocktails[drink.strDrink]) {
            cocktails[drink.strDrink] = await TheCocktailDB.getCocktail(drink.strDrink);
          }
        }
      }
    }
    return cocktails;
  }

  async function filterCocktails(cocktails) {
    for (const cocktail of Object.keys(cocktails)) {
      const cocktailIngredients = await getCocktailIngredients(cocktail);
      for (let cocktailIngredient of cocktailIngredients) {
        if (ingredientGeneralizer[cocktailIngredient]) {
          console.log(`Generalizing ingredient ${cocktailIngredient}`);
          cocktailIngredient = IngredientGeneralizer[cocktailIngredient];
        }
        if (!names.includes(cocktailIngredient) && !ingredientsToIgnore.includes(cocktailIngredient)) {
          delete cocktails[cocktail];
        }
      }
    }
    return cocktails;
  }

  async function getCocktailIngredients(cocktail) {
    const cocktailIngredients = [];
    const response = await TheCocktailDB.getCocktailIngredients(cocktail);
    let i = 1;
    while (response.data.drinks[0][`strIngredient${i}`]) {
      const newIngredient = response.data.drinks[0][`strIngredient${i}`].toLowerCase();
      cocktailIngredients.push(newIngredient);
      i++;
    }
    return cocktailIngredients;
  }

  if (loading) {
    return <div id="loading-message">Loading recommendations...</div>;
  } else if (cocktails.length === 0) {
    return <div className="no-recs-message">No recommendations found</div>;
  } else {
    return (
      <ul>
        {Object.keys(cocktails).map(cocktail => (
          <Recommendation key={cocktail} name={cocktail} cocktail={cocktails[cocktail]} />
        ))
        }
      </ul>
    );
  }
}